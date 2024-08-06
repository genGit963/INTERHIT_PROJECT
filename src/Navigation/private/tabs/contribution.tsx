// In App.js in a new project
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../../../core/AppScreen';
import {TabsScreen} from '../../../app/Tabs';

const ContributionTabStack = createNativeStackNavigator();

function ContributionTabNavigationStackScreen() {
  return (
    <ContributionTabStack.Navigator>
      {/* ContributionTab */}
      <ContributionTabStack.Screen
        name={SCREEN_NAME.TABS.CONTRIBUTION.MAIN}
        component={TabsScreen.contribution.main}
        options={{headerShown: false}}
      />
    </ContributionTabStack.Navigator>
  );
}

export default ContributionTabNavigationStackScreen;
