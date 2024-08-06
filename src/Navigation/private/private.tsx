// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {SCREEN_NAME} from '../../core/AppScreen';

// drawer screens
// import {DrawerScreens} from '../../app/Drawer';
import TabNavigationStackScreen from './tabs';

const Stack = createNativeStackNavigator();

function UserNavigationStackScreen() {
  return (
    <Stack.Navigator>
      {/* Tabs */}
      <TabNavigationStackScreen />

      {/* Drawer Screen */}
      {/* profile */}
      {/* <Stack.Screen
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
      /> */}
    </Stack.Navigator>
  );
}

export default UserNavigationStackScreen;
