import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardTabNavigationStackScreen from './dashboard';
import NoticeTabNavigationStackScreen from './notice';
import GenealogyTabNavigationStackScreen from './genealogy';
import ContributionTabNavigationStackScreen from './contribution';
import OverviewTabNavigationStackScreen from './overview';

// tabs
const Tab = createBottomTabNavigator();

// tabBarIcon

function TabNavigationStackScreen() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={DashboardTabNavigationStackScreen} />
      <Tab.Screen name="Notice" component={NoticeTabNavigationStackScreen} />
      <Tab.Screen
        name="Genealogy"
        component={GenealogyTabNavigationStackScreen}
      />
      <Tab.Screen
        name="Contribution"
        component={ContributionTabNavigationStackScreen}
      />
      <Tab.Screen
        name="Overview"
        component={OverviewTabNavigationStackScreen}
      />
    </Tab.Navigator>
  );
}

export default TabNavigationStackScreen;
