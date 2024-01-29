import React, { createContext, useContext, useReducer } from 'react';
import { useNavigation } from '@react-navigation/native';
import UsersLogic from '../model/UsersLogic';

export const UsersContext = createContext();

export const UsersController = ({ children }) => {
  const initialState = {
    user: '',
    id: '',
    users: [],
    result: null,
    data: null,
    message: 'Joehoe',
  };

  const navigation = useNavigation();

  const UsersLogicInstance = UsersLogic();

  const collectCreateUser = () => {
    const result = UsersLogicInstance.createUser();
    return result;
  };
  const collectReadUser = (id) => {
    const result = UsersLogicInstance.readUser(id);
    return result;
  };
  const collectUpdateUser = (id) => {
    const result = UsersLogicInstance.updateUser(id);
    return result;
  };
  const collectDeleteUser = (id) => {
    const result = UsersLogicInstance.deleteUser(id);
    return result;
  };
  const collectListUsersView = () => {
    const user = UsersLogicInstance.listUsers();
    return user;
  };

  const handleRequest = (state, action) => {
    switch (action.type) {
      case 'CREATEUSER':
        create = collectCreateUser();
        navigation.navigate('CreateUserView');
        return {
          ...state,
          currentScreen: 'CreateUserView',
          message: 'Create your User',
        };
      case 'READUSER':
        read = collectReadUser(action.id);
        navigation.navigate('ReadUserView');
        return {
          ...state,
          currentScreen: 'ReadUserView',
          message: 'Read your User',
        };
      case 'UPDATEUSER':
        update = collectUpdateUser(state.id);
        navigation.navigate('UpdateUserView');
        return {
          ...state,
          currentScreen: 'UpdateUserView',
          message: 'Update your User',
        };
      case 'DELETEUSER':
        deelete = collectDeleteUser(state.id);
        navigation.navigate('DeleteUserView');
        return {
          ...state,
          currentScreen: 'DeleteUserView',
          message: 'Delete your User',
        };
      case 'LISTUSER':
        list = collectListUsersView();
        navigation.navigate('ListUserView');
        return { ...state, currentScreen: 'listUsersView', data: list };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(handleRequest, initialState);
  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  return useContext(UsersContext);
};
