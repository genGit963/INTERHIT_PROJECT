import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {SCREEN_NAME} from '../../core/AppScreen';
import {AuthScreens} from '../../app/Auth';

const Stack = createNativeStackNavigator();

const AuthNavigationStackScreen = () => {
  return (
    <Stack.Navigator>
      {/* Dashboard */}
      <Stack.Screen
        name={SCREEN_NAME.AUTH.LOGIN}
        component={AuthScreens.login}
        options={{title: 'Login', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigationStackScreen;
