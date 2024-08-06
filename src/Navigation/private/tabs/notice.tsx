import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAME} from '../../../core/AppScreen';
import {TabsScreen} from '../../../app/Tabs';

const NoticeTabStack = createNativeStackNavigator();

function NoticeTabNavigationStackScreen() {
  return (
    <NoticeTabStack.Navigator>
      {/* NoticeTab */}
      <NoticeTabStack.Screen
        name={SCREEN_NAME.TABS.NOTICE.MAIN}
        component={TabsScreen.notice.main}
        options={{headerShown: false}}
      />
    </NoticeTabStack.Navigator>
  );
}

export default NoticeTabNavigationStackScreen;
