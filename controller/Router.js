import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import LandingView from '../view/LandingView';
import NounsOverview from '../view/NounsOverview';
import UsersOverview from '../view/UsersOverview';
import ReadNounView from '../view/ReadNounView';
import ReadUserView from '../view/ReadUserView';
import ListNounsView from '../view/ListNounsView';
import CreateNounView from '../view/CreateNounView';
import UpdateNounView from '../view/UpdateNounView';

const Stack = createNativeStackNavigator();

const CreateUserView = () => <Text>Create Screen</Text>;
const DeleteNounView = () => <Text>Delete Screen</Text>;

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="LandingView">

      <Stack.Screen name="LandingView" component={LandingView} />
      <Stack.Screen name="ListNounsView" component={ListNounsView} />

      <Stack.Screen name="NounsOverview" component={NounsOverview} />
      <Stack.Screen name="CreateNounView" component={CreateNounView} />
      <Stack.Screen name="ReadNounView" component={ReadNounView} options={{headerTintColor: 'white', headerTransparent: 'true'}} />
      <Stack.Screen name="UpdateNounView" component={UpdateNounView} />
      <Stack.Screen name="DeleteNounView" component={DeleteNounView} />

      <Stack.Screen name="UsersOverview" component={UsersOverview} />
      <Stack.Screen name="CreateUserView" component={CreateUserView} />
      <Stack.Screen name="ReadUserView" component={ReadUserView} />

    </Stack.Navigator>
  );
};
export default Router;
