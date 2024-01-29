import { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Icon,
} from 'react-native';
import styles from './assets/UpfrontStyles';
import { UsersContext } from '../controller/UsersController';
import { UsersList } from './Lists';

const UsersOverview = () => {
  const { state, dispatch } = useContext(UsersContext);

  const handleNavigate = (action, payload) => {
    dispatch({ type: action, id: payload });
  };

  const IconButton = ({ text, iconName, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name={iconName} size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Text style={styles.h1}>List users</Text>
      <Text style={styles.p}>Current result: {state.result}</Text>
      <Text style={styles.p}>Current user: {state.user}</Text>
      <Text style={styles.p}>Current user id: {state.id}</Text>
      {/*
      <Text style={styles.p}>
        Current user: {state.users ? JSON.stringify(state.users) : 'nothing yet'}
      </Text>
      */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'CREATEUSER', payload: 'new' })}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'READUSER', id: 5 })}>
        <Text style={styles.buttonText}>Read</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'UPDATEUSER' })}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'DELETEUSER' })}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: 'LISTUSERS', payload: 'ListObject' })}>
        <Text style={styles.buttonText}>List</Text>
      </TouchableOpacity>
      <UsersList />
    </SafeAreaView>
  );
};

export default UsersOverview;
