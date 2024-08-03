// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../core/AppScreen';

// Dashboard
import {DashboardScreen} from '../app/Tabs';

// Dashboard/DashboardMenu
import {
  AlekhScreen,
  BanshaContribution,
  DownloadScreen,
  Gallery,
  KulMandir,
  Literature,
  TopContribution,
} from '../app/Tabs/Dashboard/MenuScreen';

// drawer screens
import {DrawerScreens} from '../app/Drawer';

const Stack = createNativeStackNavigator();

function UserNavigationStackContainer() {
  return (
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

      {/* Drawer Screen */}
      {/* profile */}
      <Stack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.MAIN}
        component={DrawerScreens.profile.main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.TRANSACTION_HISTORY}
        component={DrawerScreens.profile.TransactionHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.SUBSCRIPTION}
        component={DrawerScreens.profile.Subscription}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.IDCARD}
        component={DrawerScreens.profile.IDCard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.MERGE_REQUEST}
        component={DrawerScreens.profile.MergeRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.CONTRIBUTION}
        component={DrawerScreens.profile.Contribution}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.OTHER}
        component={DrawerScreens.profile.ProfileOther}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default UserNavigationStackContainer;
