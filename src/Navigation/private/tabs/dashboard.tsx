// In App.js in a new project
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../../../core/AppScreen';
import { TabsScreen } from '../../../app/Tabs';
import { DrawerScreens } from '../../../app/Drawer';

const DashboardStack = createNativeStackNavigator();

function DashboardTabNavigationStackScreen() {
  return (
    <DashboardStack.Navigator>
      {/* Dashboard */}
      <DashboardStack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MAIN}
        component={TabsScreen.dashboard.main}
        options={{ headerShown: false }}
      />

      {/* Dashboard/DashboardMenu*/}
      <DashboardStack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.ALEKH}
        component={TabsScreen.dashboard.alekh}
        options={{ headerShown: false }}
      />

      <DashboardStack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.BANSHACONTRIBUTION}
        component={TabsScreen.dashboard.banshaContribution}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.DOWNLOAD}
        component={TabsScreen.dashboard.download}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.GALLERY}
        component={TabsScreen.dashboard.gallery}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.KULMANDIR}
        component={TabsScreen.dashboard.kulMandir}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.LITERATURE}
        component={TabsScreen.dashboard.literatute}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.TOPCONTRIBUTION}
        component={TabsScreen.dashboard.topContribution}
        options={{ headerShown: false }}
      />

      {/* Drawer screens here  */}

      {/* ------------------ Profile Navigation ------------------ */}
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.MAIN}
        component={DrawerScreens.profile.main}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.TRANSACTION_HISTORY}
        component={DrawerScreens.profile.TransactionHistory}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.SUBSCRIPTION}
        component={DrawerScreens.profile.Subscription}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.IDCARD}
        component={DrawerScreens.profile.IDCard}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.MERGE_REQUEST}
        component={DrawerScreens.profile.MergeRequest}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.CONTRIBUTION}
        component={DrawerScreens.profile.Contribution}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.OTHER}
        component={DrawerScreens.profile.ProfileOther}
        options={{ headerShown: false }}
      />

      {/* ------------------ Settings Navigation ------------------ */}
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.SETTING.MAIN}
        component={DrawerScreens.Setting.main}
        options={{ headerShown: false }}
      />

      {/* ------------------ Commitee Navigation ------------------ */}
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.COMMITTEE.BANSHAWALI_COMMITTEE}
        component={DrawerScreens.Committee.banshawaliCommittee}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.COMMITTEE.CENTRAL_COMMITTEE}
        component={DrawerScreens.Committee.centralCommittee}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.COMMITTEE.DISTRICT_COMMITTEE}
        component={DrawerScreens.Committee.districtCommittee}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.COMMITTEE.COMMITTEE_HISTORY}
        component={DrawerScreens.Committee.committeeHistory}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.COMMITTEE.FINANCE_COMMITTEE}
        component={DrawerScreens.Committee.financeCommittee}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.COMMITTEE.PROVINCE_COMMITTEE}
        component={DrawerScreens.Committee.provinceCommittee}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.COMMITTEE.SADHASHYA_MEMBER}
        component={DrawerScreens.Committee.sadhashyaMember}
        options={{ headerShown: false }}
      />
      {/* ------------------ About US Navigation ------------------ */}
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.ABOUT_US.ABOUT_ORGANIZATION}
        component={DrawerScreens.AboutUs.aboutOrganization}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.ABOUT_US.CHAIRMAN_MESSAGE}
        component={DrawerScreens.AboutUs.chairmanMessage}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.ABOUT_US.EDITOR_MESSAGE}
        component={DrawerScreens.AboutUs.editorMessage}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name={SCREEN_NAME.DRAWER.ABOUT_US.WELL_WISHES}
        component={DrawerScreens.AboutUs.wellWishes}
        options={{ headerShown: false }}
      />
    </DashboardStack.Navigator>
  );
}

export default DashboardTabNavigationStackScreen;
