import {LoginZType, SignupZType, VerifyOTPZType} from '../../schema/auth';
import {API_PUBLIC_SERVICE} from '../config';

const AUTH_SERVICE = {
  // login
  login: async (loginData: LoginZType) => {
    return await API_PUBLIC_SERVICE.request({
      url: '/auth/signin',
      method: 'POST',
      data: loginData,
    });
  },

  signup: async (signupData: SignupZType) => {
    console.log('singu portal : ', signupData);
    return await API_PUBLIC_SERVICE.request({
      url: '/auth/signup',
      method: 'POST',
      data: signupData,
    });
  },

  //request otp
  requestOTP: async (phone: string) => {
    return await API_PUBLIC_SERVICE.request({
      url: '/auth/request-otp',
      method: 'POST',
      data: {phone},
    });
  },

  //verify otp
  verifyOTP: async (otpData: VerifyOTPZType) => {
    return await API_PUBLIC_SERVICE.request({
      url: '/auth/verify-otp',
      method: 'PATCH',
      data: otpData,
    });
  },
};

export default AUTH_SERVICE;
