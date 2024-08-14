import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppScreenNavigationType} from '../../../core/navigation-type';

// types and interface
type SignUpScreenProps = {} & AppScreenNavigationType;

// ----------------- Sign up Screen ---------------------
const SignUpScreen: React.FC<SignUpScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignupZType>({
    resolver: zodResolver(SignupZschema),
  });

  const onSubmit = async (data: SignupZType) => {
    console.log('sign up data: ', data);
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
              {label: 'Province 1', value: 'Province 1'},
              {label: 'Province 2', value: 'Province 2'},
              {label: 'Province 3', value: 'Province 3'},
              {label: 'Province 4', value: 'Province 4'},
              {label: 'Province 5', value: 'Province 5'},
              {label: 'Province 6', value: 'Province 6'},
              {label: 'Province 7', value: 'Province 7'},
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

          <CustomTextInput
            name="confirmPassword"
            control={control}
            placeholder="Eg: Metalogic9!"
            label="confirmPassword"
            isRequired={true}
            error={errors.confirmPassword}
          />

          <CustomTextInput
            name="referral"
            control={control}
            label="Referral Code"
            isRequired={true}
            error={errors.referral}
          />

          {/* btn */}
          <HeroButton btnText={'Signup'} onPress={handleSubmit(onSubmit)} />

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
