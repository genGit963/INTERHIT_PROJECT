// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// navigation stack
import AuthNavigationStack from './public';
import TabNavigationStackScreen from './private/tabs';

const user: boolean = true;

function AppNavigator() {
  return (
    <NavigationContainer>
      {user ? <TabNavigationStackScreen /> : <AuthNavigationStack />}
    </NavigationContainer>
  );
}

export default AppNavigator;
