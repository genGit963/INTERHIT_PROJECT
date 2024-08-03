import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';
import {ThemedText} from '../../../components/ThemedText';
import {SCREEN_NAME} from '../../../core/AppScreen';
import BottomSpace from '../../../components/BottomSpace';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// types and interface
type LoginScreenProps = {} & AppScreenNavigationType;

// ----------------- Subscription Screen ---------------------
const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/*  Screen Body */}
        <ThemedText>Login Screen</ThemedText>
        <Button
          title={'Home'}
          onPress={() => navigation.navigate(SCREEN_NAME.DASHBOARD)}
        />

        <BottomSpace spaceHeight={'5%'} />
      </SafeAreaView>
    </View>
  );
};

export const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
    paddingHorizontal: 24,
  },
  Screen: {
    backgroundColor: Colors.screenBackground,
  },
});

export default LoginScreen;
