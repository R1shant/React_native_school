import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Go to Nouns"
        onPress={() => navigation.navigate('NounsOverview')}
      />
      <Button
        title="Go to User"
        onPress={() => navigation.navigate('UsersOverview')}
        />
    </View>
  );
};

export default LandingView;
