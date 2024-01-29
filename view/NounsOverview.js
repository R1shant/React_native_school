import { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './assets/UpfrontStyles';
import { useNounsContext } from '../controller/NounsController';

const NounsOverview = () => {
  const { dispatch } = useNounsContext();

  const handleNavigate = (action, payload) => {
    dispatch({ type: action, id: payload });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 9 }}>
        <TouchableOpacity style={styles.button}
          onPress={() => handleNavigate('CREATENOUN', 'NEW')}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => handleNavigate('READNOUN', 5)}>
          <Text style={styles.buttonText}>Read</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => handleNavigate('UPDATENOUN')}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => handleNavigate('DELETENOUN')}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => handleNavigate('LISTNOUNS', 'ALL')}>
          <Text style={styles.buttonText}>List</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NounsOverview;
