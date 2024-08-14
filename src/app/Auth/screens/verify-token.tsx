import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';
import ScreenTopTitle from '../../../components/ScreenTopTitle';
import {VerifyTokenZSchema, VerifyTokenZType} from '../../../schema/auth';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ThemedText} from '../../../components/ThemedText';
import CustomTextInput from '../../../components/CustomInput';
import HeroButton from '../../../components/HeroButton';
import {Colors} from '../../../constants/Color';

// types and interface
type VerifyOTPScreenProps = {} & AppScreenNavigationType;

// ----------------- Sign up Screen ---------------------
const VerifyOTPScreen: React.FC<VerifyOTPScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<VerifyTokenZType>({
    resolver: zodResolver(VerifyTokenZSchema),
  });

  const onSubmit = async (data: VerifyTokenZType) => {
    console.log('sign up data: ', data);
  };
  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Screen Top */}
        <ScreenTopTitle screenTitle={'Verify Token'} navigation={navigation} />

        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/*  Flex Text */}
          <ThemedText type="subtitle" style={styles.FlexText}>
            डिजिटल बंशावलीमा हजुरलाई स्वागत छ
          </ThemedText>

          {/* Verify OTP Form */}
          <CustomTextInput
            name="phone"
            control={control}
            placeholder="Eg: 9865714682"
            label="Phone"
            isRequired={true}
            error={errors.phone}
          />

          <CustomTextInput
            name="otp"
            control={control}
            placeholder="Eg: 090901"
            label="OTP"
            isRequired={true}
            error={errors.otp}
          />

          {/* btn */}
          <HeroButton btnText={'Verify'} onPress={handleSubmit(onSubmit)} />
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

export default VerifyOTPScreen;
