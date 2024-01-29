import { NavigationContainer } from '@react-navigation/native';
import Router from './Router';
import { NounsController } from './NounsController';
import { UsersController } from './UsersController';

const MainController = () => {
  return (
    <NavigationContainer>
      <NounsController>
        <UsersController>
          <Router />
        </UsersController>
      </NounsController>
    </NavigationContainer>
  );
};

export default MainController;
