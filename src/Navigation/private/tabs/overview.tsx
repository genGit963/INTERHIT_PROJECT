import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../../../core/AppScreen';
import {TabsScreen} from '../../../app/Tabs';

const OverviewTabStack = createNativeStackNavigator();

function OverviewTabNavigationStackScreen() {
  return (
    <OverviewTabStack.Navigator>
      {/* OverviewTab */}
      <OverviewTabStack.Screen
        name={SCREEN_NAME.TABS.OVERVIEW.MAIN}
        component={TabsScreen.overview.main}
        options={{headerShown: false}}
      />
    </OverviewTabStack.Navigator>
  );
}

export default OverviewTabNavigationStackScreen;
