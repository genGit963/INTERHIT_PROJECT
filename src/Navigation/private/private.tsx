// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../../core/AppScreen';

// tabs screens
import {TabsScreen} from '../../app/Tabs';

// drawer screens
import {DrawerScreens} from '../../app/Drawer';

const Stack = createNativeStackNavigator();

function UserNavigationStackContainer() {
  return (
    <Stack.Navigator>
      {/* Dashboard */}
      <Stack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MAIN}
        component={TabsScreen.dashboard.main}
        options={{title: 'Home', headerShown: false}}
      />

      {/* Dashboard/DashboardMenu*/}
      <Stack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.ALEKH}
        component={TabsScreen.dashboard.alekh}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.BANSHACONTRIBUTION}
        component={TabsScreen.dashboard.banshaContribution}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.DOWNLOAD}
        component={TabsScreen.dashboard.download}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.GALLERY}
        component={TabsScreen.dashboard.gallery}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.KULMANDIR}
        component={TabsScreen.dashboard.kulMandir}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.LITERATURE}
        component={TabsScreen.dashboard.literatute}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.TOPCONTRIBUTION}
        component={TabsScreen.dashboard.topContribution}
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
