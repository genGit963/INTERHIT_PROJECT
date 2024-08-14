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
import {useForm} from 'react-hook-form';
import {LoginZSchema, LoginZType} from '../../../schema/auth';
import CustomTextInput from '../../../components/CustomInput';
import {zodResolver} from '@hookform/resolvers/zod';
import FlexImgSvg from '../../../assets/svg/auth-rprst.svg';
import {useLogin} from '../../../hooks/auth';
import RNRestart from 'react-native-restart';
import ApiError from '../../../components/api/ApiError';

type LoginScreenProps = {} & AppScreenNavigationType;

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginZType>({
    resolver: zodResolver(LoginZSchema),
  });

  const {loading, error, handleLogin} = useLogin();

  const onSubmit = async (data: LoginZType) => {
    await handleLogin(data).then(() => {
      RNRestart.restart();
    });
  };

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* title */}
        <AuthScreenTop screenTitle={'Login'} />
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* flex */}
          <ThemedText type="subtitle" style={styles.FlexText}>
            डिजिटल बंशावलीमा हजुरलाई स्वागत छ
          </ThemedText>
          <FlexImgSvg height={250} width={'100%'} style={styles.FlexImg} />

          {/* inputs */}
          <CustomTextInput
            name="phone"
            control={control}
            placeholder="Eg: 9867549091"
            label="Phone"
            isRequired={true}
            error={errors.phone}
          />
          <CustomTextInput
            name="password"
            control={control}
            label="Password"
            secureTextEntry={false}
            isRequired={true}
            error={errors.password}
          />

          {/* Pswd manager */}
          <View style={styles.RemFPView}>
            <View style={styles.Checkbox}>
              <ThemedText>Remember Password</ThemedText>
            </View>
            <TouchableOpacity>
              <ThemedText style={styles.FPText}> Forgot Password?</ThemedText>
            </TouchableOpacity>
          </View>
          <HeroButton
            disabled={loading}
            btnText={loading ? 'Loading....' : 'Login'}
            onPress={handleSubmit(onSubmit)}
          />
          {/* errors */}
          {error ? <ApiError message={error} /> : null}

          {/* registration */}
          <View style={styles.RegInfoView}>
            <ThemedText>Don't have an Account ? </ThemedText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SCREEN_NAME.AUTH.SIGN_UP);
              }}>
              <ThemedText type="link">Sign up</ThemedText>
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
  RemFPView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: -4,
  },
  FPText: {
    color: Colors.primary,
  },
  Checkbox: {},
  RegInfoView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
