import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardTabNavigationStackScreen from './dashboard';
import NoticeTabNavigationStackScreen from './notice';
import GenealogyTabNavigationStackScreen from './genealogy';
import ContributionTabNavigationStackScreen from './contribution';
import OverviewTabNavigationStackScreen from './overview';

//icons
import HomeIcon from '../../../assets/svg/home.svg';
import HomeFocusedIcon from '../../../assets/svg/home-focused.svg';
import NoticeIcon from '../../../assets/svg/pepicons-pop_bulletin-notice.svg';
import NoticeFocusedIcon from '../../../assets/svg/notice-focused.svg';
import GenealogyIcon from '../../../assets/svg/ph_tree-structure.svg';
import ContributionIcon from '../../../assets/svg/support-contribution-ruppe.svg';
import ContributionFocusedIcon from '../../../assets/svg/contribution-focused.svg';
import OverviewIcon from '../../../assets/svg/solar_pie-chart-bold.svg';
import OverviewFocusedIcon from '../../../assets/svg/overview-focused.svg';
import TabBarIcon from './components/tabbar-icon';
import {Colors} from '../../../constants/Color';
import supplyShadowEffect from '../../../utils/Shadow';

// tabs
const Tab = createBottomTabNavigator();

// tabBarIcon

function TabNavigationStackScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 75,
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {},
      })}>
      <Tab.Screen
        name="Home"
        component={DashboardTabNavigationStackScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              label="Home"
              IconComponent={focused ? HomeFocusedIcon : HomeIcon}
              color={focused ? Colors.primary : Colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notice"
        component={NoticeTabNavigationStackScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              label="Notice"
              IconComponent={focused ? NoticeFocusedIcon : NoticeIcon}
              color={focused ? Colors.primary : Colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Genealogy"
        component={GenealogyTabNavigationStackScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              label="Genealogy"
              IconComponent={GenealogyIcon}
              color={focused ? Colors.primary : Colors.text}
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: '20%',
                backgroundColor: Colors.primary,
                ...supplyShadowEffect({
                  X_off: 0,
                  Y_off: 0,
                  Radius: 5,
                  Color: 'black',
                  Elevation: 10,
                  Opacity: 0.15,
                }),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contribution"
        component={ContributionTabNavigationStackScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              label="Contribution"
              IconComponent={
                focused ? ContributionFocusedIcon : ContributionIcon
              }
              color={focused ? Colors.primary : Colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Overview"
        component={OverviewTabNavigationStackScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabBarIcon
              label="Overview"
              IconComponent={focused ? OverviewFocusedIcon : OverviewIcon}
              color={focused ? Colors.primary : Colors.text}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigationStackScreen;
