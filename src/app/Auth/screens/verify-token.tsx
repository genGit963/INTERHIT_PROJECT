import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {
  AppScreenNavigationType,
  AppScreenRouteType,
} from '../../../core/navigation-type';
import ScreenTopTitle from '../../../components/ScreenTopTitle';
import {VerifyOTPZSchema, VerifyOTPZType} from '../../../schema/auth';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ThemedText} from '../../../components/ThemedText';
import CustomTextInput from '../../../components/CustomInput';
import HeroButton from '../../../components/HeroButton';
import {Colors} from '../../../constants/Color';
import {useVerifyOTP} from '../../../hooks/auth';
import {SCREEN_NAME} from '../../../core/AppScreen';
import ApiError from '../../../components/api/ApiError';

// types and interface
type VerifyOTPScreenProps = {} & AppScreenNavigationType & AppScreenRouteType;

// ----------------- Sign up Screen ---------------------
const VerifyOTPScreen: React.FC<VerifyOTPScreenProps> = ({
  navigation,
  route,
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<VerifyOTPZType>({
    resolver: zodResolver(VerifyOTPZSchema),
  });
  // console.log("route.params:", route.params)

  const {loading, error, handleVerifyOTP} = useVerifyOTP();
  // verifyOTPZType has phone,otp and the data coming here is otp only
  const onSubmit = async (data: Pick<VerifyOTPZType, "otp">) => {
    const {phone} = route.params as {phone: string};
    const otpData: VerifyOTPZType = {
      otp: data.otp,
      phone: phone,
    }

    await handleVerifyOTP(otpData).then((Response) => {
      if (Response) {
        // console.log('OTP verification successful', Response);
        navigation.navigate(SCREEN_NAME.AUTH.LOGIN);
      }
    });
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
            name="otp"
            control={control}
            placeholder="Eg: 090901"
            label="OTP"
            isRequired={true}
            error={errors.otp}
          />

          {/* btn */}
          <HeroButton
            disabled={loading}
            btnText={'Verify'}
            onPress={handleSubmit(onSubmit)}
          />
          {/* error */}
          {error && <ApiError message={error} />}
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
