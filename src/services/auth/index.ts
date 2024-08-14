import {LoginZType, SignupZType} from '../../schema/auth';
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
};

export default AUTH_SERVICE;
