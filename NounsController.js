// NounsController.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import NounsLogic from '../model/NounsLogic';
import { initialNouns } from '../model/initialNouns';

export const NounsContext = createContext();

export const NounsController = ({ children }) => {
  // Krijg toegang tot het navigation object
  const navigation = useNavigation();

  // Specifieke functies uit het verkregen(return) object halen
  const { createNoun, readNoun, updateNoun, deleteNoun, listNouns } =
    NounsLogic();

  // Functies voor interactie met NounsLogic methoden
  const collectCreateNoun = (action) => {
    const result = action ? action.payload : null;
    console.log('collectCreateNoun', result);
    return result;
  };
  const collectReadNoun = (id, nouns) => {
    const result = readNoun(id, nouns);
    console.log('collectReadNoun', result);
    return result;
  };
  const collectUpdateNoun = (id) => {
    const result = updateNoun(id);
    console.log('collectUpdateNoun', result);
    return result;
  };
  const collectDeleteNoun = (id) => {
    const result = deleteNoun(id);
    console.log('collectDeleteNoun', result);
    return result;
  };
  const collectListNounsView = () => {
    const result = listNouns();
    console.log('collectListNounsView', result);
    return result;
  };

  const handleRequest = (nounsState, action) => {
    // handleRequest application!!! logic
    switch (action.type) {
      case 'CREATENOUN':
        console.log('CREATENOUNtriggered', action);
        // Handle create action
        create = collectCreateNoun();
        // Navigeer naar het specifieke scherm
        navigation.navigate('CreateNounView');
        return {
          ...nounsState,
          currentScreen: 'CreateNounView',
          message: 'Create your noun',
        };
      case 'CREATENEWNOUN':
        console.log('CREATENEWNOUNtriggered', action);
        // Handle create action
        noun = action.payload;
        // Navigeer naar het specifieke scherm
        navigation.navigate('ListNounsView');
        return {
          ...nounsState,
          nouns: [...nounsState.nouns, noun],
          currentScreen: 'CreateNewNounView',
          message: 'Create your noun',
        };
      case 'READNOUN':
        console.log('READNOUNtriggered', action);
        // Handle read action
        read = collectReadNoun(action.id, nounsState.nouns);
        // Navigeer naar het specifieke scherm
        navigation.navigate('ReadNounView');
        return { ...nounsState, currentScreen: 'ReadNounView', noun: read };
      case 'UPDATENOUN':
        console.log('UPDATENOUNtriggered', action);
        if (action.sub === 'updatenoun') {
          // Navigeer naar het specifieke scherm
          navigation.navigate('ListNounsView');
          // Handle update action
          const updated = nounsState.nouns.map((noun) =>
            noun.id === action.payload.id ? action.payload : noun
          );
          return {
            ...nounsState,
            nouns: updated,
            currentScreen: 'UpdateNounView',
            message: 'Updated your noun',
          };
        } else {
          // Navigeer naar het specifieke scherm
          navigation.navigate('UpdateNounView');
          // Handle update action
          return {
            ...nounsState,
            currentScreen: 'UpdateScreen',
            noun: action.payload,
          };
        }
      case 'DELETENOUN':
        console.log('DELETENOUNtriggered', action);
        // Handle delete action
        deelete = collectDeleteNoun(action.id);
        // Navigeer naar het specifieke scherm
        navigation.navigate('DeleteNounView');
        return {
          ...nounsState,
          currentScreen: 'DeleteNounView',
          noun: deelete,
        };
      case 'LISTNOUNS': {
        console.log('LISTNOUNStriggered', action);
        // Handle List action
        console.log('LISTNOUNSnouns', nounsState.nouns);
        // Als nounsState.nouns niet leeg is dan nounsState.nouns; anders call collectListNounsView()-functie.
        let list =
          nounsState.nouns.length > 0
            ? nounsState.nouns
            : collectListNounsView();
        navigation.navigate('ListNounsView');
        // Gebruik immutable(onveranderlijke) objecten; maak een nieuwe aan voor wijzigingen.
        return { ...nounsState, currentScreen: 'ListNounsView', nouns: list };
      }
      default:
        return nounsState;
    }
  };

  // Initiële staat voor de context
  const [nounsState, dispatch] = useReducer(handleRequest, initialNouns);

  return (
    <NounsContext.Provider value={{ nounsState, dispatch }}>
      {children}
    </NounsContext.Provider>
  );
};

// Custom hook om eenvoudiger toegang tot de context te verlenen
export const useNounsContext = () => {
  return useContext(NounsContext);
};
