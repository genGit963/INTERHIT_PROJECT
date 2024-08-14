import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';
import {ThemedText} from '../../../components/ThemedText';
import AuthScreenTop from '../components/AuthScreenTop';
import {Colors} from '../../../constants/Color';
import HeroButton from '../../../components/HeroButton';
import {SCREEN_NAME} from '../../../core/AppScreen';
import FlexImgSvg from '../../../assets/svg/auth-rprst.svg';

// types and interface
type SignUpScreenProps = {} & AppScreenNavigationType;

// ----------------- Sign up Screen ---------------------
const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Screen Top */}
        <AuthScreenTop screenTitle={'Signup'} />

        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/*  Flex Text */}
          <ThemedText type="subtitle" style={styles.FlexText}>
            डिजिटल बंशावलीमा हजुरलाई स्वागत छ
          </ThemedText>

          {/* Flex Image */}
          <FlexImgSvg height={250} width={'100%'} style={styles.FlexImg} />

          {/* btn */}
          <HeroButton btnText={'Signup'} />

          {/* Registration info */}
          <View style={styles.RegInfoView}>
            <ThemedText>Don't have an Account ? </ThemedText>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREEN_NAME.AUTH.LOGIN)}>
              <ThemedText type="link">Login</ThemedText>
            </TouchableOpacity>
          </View>
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
  ScrollView: {marginBottom: 10, paddingBottom: 30},
  ScrollContent: {paddingBottom: 100},
  FlexText: {
    textAlign: 'center',
  },
  FlexImg: {
    marginVertical: 20,
  },
  RegInfoView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
});

export default SignUpScreen;
