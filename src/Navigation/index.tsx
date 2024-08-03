// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// navigation stack
import UserNavigationStackContainer from './user';
import AuthNavigationStack from './auth';

const user: boolean = true;

function AppNavigator() {
  return (
    <NavigationContainer>
      {user ? <UserNavigationStackContainer /> : <AuthNavigationStack />}
    </NavigationContainer>
  );
}

export default AppNavigator;
