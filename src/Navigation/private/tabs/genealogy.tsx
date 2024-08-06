import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../../../core/AppScreen';
import {TabsScreen} from '../../../app/Tabs';

const GenealogyTabStack = createNativeStackNavigator();

function GenealogyTabNavigationStackScreen() {
  return (
    <GenealogyTabStack.Navigator>
      {/* GenealogyTab */}
      <GenealogyTabStack.Screen
        name={SCREEN_NAME.TABS.GENEALOGY.MAIN}
        component={TabsScreen.genealogy.main}
        options={{headerShown: false}}
      />
    </GenealogyTabStack.Navigator>
  );
}

export default GenealogyTabNavigationStackScreen;
