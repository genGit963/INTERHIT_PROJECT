import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardTabNavigationStackScreen from './dashboard';
import NoticeTabNavigationStackScreen from './notice';
import GenealogyTabNavigationStackScreen from './genealogy';
import ContributionTabNavigationStackScreen from './contribution';
import OverviewTabNavigationStackScreen from './overview';
import {Colors} from '../../../constants/Color';

// tabs
const Tab = createBottomTabNavigator();

// tabBarIcon
interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}
const TabBarIcon:React.ReactNode = ({focused, color, size}:TabBarIconProps) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused
      ? 'ios-information-circle'
      : 'ios-information-circle-outline';
  } else if (route.name === 'Settings') {
    iconName = focused ? 'ios-list' : 'ios-list-outline';
  }

  // You can return any component that you like here!
  return <Ionicons name={iconName} size={size} color={color} />;
},


function TabNavigationStackScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: 
        tabBarActiveTintColor: Colors.tabIconSelected,
        tabBarInactiveTintColor: Colors.tabIconDefault,
      })}>
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
