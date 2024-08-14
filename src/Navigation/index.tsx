// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// navigation stack
import AuthNavigationStack from './public';
import TabNavigationStackScreen from './private/tabs';
import {asyncGetData} from '../core/AsyncStorage';

function AppNavigator() {
  const [user, setUser] = React.useState<boolean | undefined>();

  // check user
  const handleUser = async () => {
    const isUser = await asyncGetData('USER');
    if (isUser) {
      setUser(true);
    }
  };
  React.useEffect(() => {
    handleUser();
  }, []);
  return (
    <NavigationContainer>
      {user ? <TabNavigationStackScreen /> : <AuthNavigationStack />}
    </NavigationContainer>
  );
}

export default AppNavigator;
