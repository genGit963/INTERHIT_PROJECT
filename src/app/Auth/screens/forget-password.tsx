import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';
import {ThemedText} from '../../../components/ThemedText';
import {Colors} from '../../../constants/Color';
import ScreenTopTitle from '../../../components/ScreenTopTitle';

// types and interface
type ForgotPasswordScreenProps = {} & AppScreenNavigationType;

// ----------------- Sign up Screen ---------------------
const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Screen Top */}
        <ScreenTopTitle
          screenTitle={'Forgot Password'}
          navigation={navigation}
        />

        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* btn */}

          <ThemedText>Here will be Forget Password Screen</ThemedText>
          {/* <HeroButton btnText={'Submit'} /> */}
        </ScrollView>
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
  ScrollView: {marginBottom: 10, paddingBottom: 40},
  ScrollContent: {paddingBottom: 140},
});

export default ForgotPasswordScreen;
