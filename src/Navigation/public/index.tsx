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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.AUTH.SIGN_UP}
        component={AuthScreens.signup}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={SCREEN_NAME.AUTH.FORGOT_PSWD}
        component={AuthScreens.forgotPswd}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigationStackScreen;
