import { useContext } from 'react';
import {
  View,
  Image,
  // Een FlatList component rendert alleen items op het scherm, waardoor de app beter presteert bij lange lijsten.
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './ListSyle.js';
import { useNounsContext } from '../../controller/NounsController.js';
import { useNavigation } from '@react-navigation/native';

const NounsLists = () => {
  const { nounsState, dispatch } = useNounsContext();

  const navigation = useNavigation();

  const Item = (props) => {
    const { id, name, bornAt, photo } = props;
    return (
      <View style={styles.listcontainer}>
        <Image style={styles.listlead} source={{ uri: photo }} />
        <View style={styles.listtextcontainer}>
          <Text style={styles.listhead}>{name}</Text>
          <Text style={styles.listtext}>
            {bornAt} {id}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch({ type: 'READNOUN', id: id })}>
          <Image style={styles.listtrail} source={{ uri: photo }} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={nounsState.nouns}
      renderItem={({ item }) => (
        <Item
          id={item.id}
          name={item.name}
          bornAt={item.bornAt}
          photo={item.photo}
          keyExtractor={(item) => item.id}
        />
      )}
    />
  );
};

export default NounsLists;
