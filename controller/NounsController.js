import React, { createContext, useContext, useReducer } from 'react';
import { useNavigation } from '@react-navigation/native';
import NounsLogic from '../model/NounsLogic';
import { initialNouns } from '../model/initialNouns';

export const NounsContext = createContext();

export const NounsController = ({ children }) => {

  const navigation = useNavigation();

  const { createNoun, readNoun, updateNoun, deleteNoun, listNouns } = NounsLogic();

  const collectCreateNoun = (action) => {
    const result = action ? action.payload : null;
    console.log('collectCreateNoun', result);
    return result;
  };
  const collectReadNoun = (id, nouns) => {
    const result = readNoun(id, nouns);
    console.log('collectReadNoun', result)
    return result;
  };
  const collectUpdateNoun = (id, nouns, updateNouns) => {
    const result = updateNoun(id, nouns, updateNouns);
    console.log('collectUpdateNoun', result);
    return result;
  };
  const collectDeleteNoun = (id, nouns) => {
    const result = deleteNoun(id, nouns);
    console.log('CollectDeleteNoun', result);
    return result;
  };
  const collectListNounsView = () => {
    const nouns = listNouns();
    console.log('collectListNouns', result);
    return nouns;
  };

  const handleRequest = (nounsState, action) => {
    switch (action.type) {
      case 'CREATENOUN':
        create = collectCreateNoun();
        navigation.navigate('CreateNounView');
        return {
          ...nounsState,
          currentScreen: 'CreateNounView',
          message: 'Create your Noun',
        };
      case 'CREATENEWNOUN':
        console.log('CREATENEWNOUN', action);
        const noun = action.payload;
        navigation.navigate('ListNounsView');
        return {
          ...nounsState,
          nouns: [...nounsState.nouns, noun],
          currentScreen: 'CreateNewNounView',
          message: 'Create your noun',
        }
      case 'READNOUN':
        read = collectReadNoun(action.id, nounsState.nouns);
        navigation.navigate('ReadNounView');
        return {
          ...nounsState,
          currentScreen: 'ReadNounView',
          noun: read,
          message: 'Read your Noun',
        };
      case 'UPDATENOUN':
        console.log('UPDATENOUNtriggerd', action);
        if (action.sub === 'updatenoun') {

          let updatedNouns = collectUpdateNoun(
            action.payload.id,
            nounsState.nouns,
            action.payload,
          );
          // console.log('updated noun', action.payload);
          // const updated = nounsState.nouns.map((noun) =>
          //   noun.id === action.payload.id ? action.payload : noun
          // );
          navigation.navigate('ListNounsView');
          return {
            ...nounsState,
            nouns: updatedNouns,
            currentScreen: 'UpdateNounView',
            message: 'Updated your noun',
          };
        } else {
          console.log(action);
          let tbunoun = collectUpdateNoun(action.payload.id, nounsState.nouns);

          navigation.navigate('UpdateNounView');
          return {
            ...nounsState,
            currentScreen: "updateScreen",
            noun: tbunoun,
          }
        }
        case 'DELETENOUN':
          const updatedNouns = collectDeleteNoun(nounsState.nouns, action.payload.id);
          return {
            ...nounsState,
            nouns: updatedNouns,
            currentScreen: 'ListNounsView',
            message: 'Deleted the Noun',
          }
      case 'LISTNOUNS':
        console.log('LISTNOUNStriggerd')
        let list =
          nounsState.nouns.length > 0
            ? nounsState.nouns
            : collectListNounsView();
        navigation.navigate('ListNounsView');
        return { ...nounsState, currentScreen: 'listNounsView', nouns: list };
      default:
        return nounsState;
    }
  };

  // State en dispatch initialiseren met de useRedcuer
  const [nounsState, dispatch] = useReducer(handleRequest, initialNouns);
  return (
    <NounsContext.Provider value={{ nounsState, dispatch }}>
      {children}
    </NounsContext.Provider>
  );
};

export const useNounsContext = () => {
  return useContext(NounsContext);
};
