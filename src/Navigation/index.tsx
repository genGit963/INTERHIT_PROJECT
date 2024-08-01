// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../core/AppScreen';

// Dashboard
import {DashboardScreen} from '../app';

// Dashboard/DashboardMenu
import {
  AlekhScreen,
  BanshaContribution,
  DownloadScreen,
  Gallery,
  KulMandir,
  Literature,
  TopContribution,
} from '../app/Dashboard/MenuScreen';

// screens

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Dashboard */}
        <Stack.Screen
          name={SCREEN_NAME.DASHBOARD}
          component={DashboardScreen}
          options={{title: 'Home', headerShown: false}}
        />

        {/* Dashboard/DashboardMenu*/}
        <Stack.Screen
          name={SCREEN_NAME.MENUSCREEN.ALEKH}
          component={AlekhScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={SCREEN_NAME.MENUSCREEN.BANSHACONTRIBUTION}
          component={BanshaContribution}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.MENUSCREEN.DOWNLOAD}
          component={DownloadScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.MENUSCREEN.GALLERY}
          component={Gallery}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.MENUSCREEN.KULMANDIR}
          component={KulMandir}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.MENUSCREEN.LITERATURE}
          component={Literature}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.MENUSCREEN.TOPCONTRIBUTION}
          component={TopContribution}
          options={{headerShown: false}}
        />

        {/* other */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
