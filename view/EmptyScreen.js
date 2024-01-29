import { View, Text } from 'react-native';

const EmptyScreen = (props) => {
  return (
    <View>
      <Text>Home {props.extraData} Screen</Text>
      <Text>{props.extraData ? props.extraData : 'Guest'}</Text>
      <Text>{props.isAuthenticated ? 'Logged In' : 'Logged Out'}</Text>
    </View>
  );
};

export default EmptyScreen;
