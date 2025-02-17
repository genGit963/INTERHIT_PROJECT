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
import CustomTextInput from '../../../components/CustomInput';
import {useForm} from 'react-hook-form';
import {SignupZschema, SignupZType} from '../../../schema/auth';
import {zodResolver} from '@hookform/resolvers/zod';
import CustomDropdownSelector from '../../../components/CustomDropdownSelector';
import {useSignUp} from '../../../hooks/auth';
import ApiError from '../../../components/api/ApiError';
import {AppScreenRouteType} from '../../../core/navigation-type';

// types and interface
type SignUpScreenProps = {} & AppScreenNavigationType & AppScreenRouteType;

// ----------------- Sign up Screen ---------------------
const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupZType>({
    resolver: zodResolver(SignupZschema),
  });

  // sign up hook
  const {loading, error, handleSignUp} = useSignUp();
  const onSubmit = async (data: SignupZType) => {
    console.log('sign up data: ', data);
    await handleSignUp(data).then((Response) => {
      if (Response) {
        console.log('Sign up successful !', Response);
        navigation.navigate(SCREEN_NAME.AUTH.VERIFY_OTP, {
          phone: Response.phone,
        });
      }
    });
  };
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

          {/* Sign up Form */}
          <CustomTextInput
            name="name"
            control={control}
            placeholder="Eg: Shree Krishna"
            label="Name"
            isRequired={true}
            error={errors.name}
          />

          <CustomTextInput
            name="email"
            control={control}
            placeholder="Eg: sk88@gmail.com"
            label="Email"
            isRequired={true}
            error={errors.email}
          />

          <CustomTextInput
            name="phone"
            control={control}
            placeholder="Eg: 9865914599"
            label="Phone"
            isRequired={true}
            error={errors.phone}
          />

          <CustomDropdownSelector
            name="province"
            control={control}
            label="Province"
            options={[
              {label: 'कोशी प्रदेश', value: 'कोशी प्रदेश'},
              {label: 'मधेश प्रदेश', value: 'मधेश प्रदेश'},
              {label: 'बागमती प्रदेश', value: 'बागमती प्रदेश'},
              {label: 'गण्डकी प्रदेश', value: 'गण्डकी प्रदेश'},
              {label: 'लुम्बिनी प्रदेश', value: 'लुम्बिनी प्रदेश'},
              {label: 'कर्णाली प्रदेश', value: 'कर्णाली प्रदेश'},
              {
                label: 'सुदूर पश्चिमाञ्च प्रदेश',
                value: 'सुदूर पश्चिमाञ्च प्रदेश',
              },
            ]}
            isRequired
          />

          <CustomDropdownSelector
            name="district"
            control={control}
            label="District"
            options={[
              {label: 'District 1', value: 'District 1'},
              {label: 'District 2', value: 'District 2'},
            ]}
            isRequired
          />

          <CustomTextInput
            name="password"
            control={control}
            placeholder="Eg: Metalogic9!"
            label="Password"
            isRequired={true}
            error={errors.password}
          />

          {/* <CustomTextInput
            name="confirmPassword"
            control={control}
            placeholder="Eg: Metalogic9!"
            label="Confirm Password"
            isRequired={true}
            error={errors.confirmPassword}
          /> */}

          <CustomTextInput
            name="referral"
            control={control}
            label="Referral Code"
            isRequired={true}
            error={errors.referral}
          />

          {/* btn */}
          <HeroButton
            disabled={loading}
            btnText={loading ? 'Loading...' : 'Signup'}
            onPress={handleSubmit(onSubmit)}
          />

          {/* errors */}
          {error ? <ApiError message={error} /> : null}

          {/* Registration info */}
          <View style={styles.RegInfoView}>
            <ThemedText>Don't have an Account ? </ThemedText>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREEN_NAME.AUTH.LOGIN)}>
              <ThemedText type="link">Login</ThemedText>
            </TouchableOpacity>
          </View>
          {/* develop otp sc */}
          <View style={styles.RegInfoView}>
            <ThemedText>Go to OTP screen ? </ThemedText>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREEN_NAME.AUTH.VERIFY_OTP)}>
              <ThemedText type="link">OTP</ThemedText>
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
  ScrollView: {marginBottom: 10, paddingBottom: 40},
  ScrollContent: {paddingBottom: 140},
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
