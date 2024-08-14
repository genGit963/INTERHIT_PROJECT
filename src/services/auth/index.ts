import {LoginZType, SignupZType} from '../../schema/auth';
import {API_PUBLIC_SERVICE} from '../config';

const AUTH_SERVICE = {
  // login
  login: async (loginData: LoginZType) => {
    return await API_PUBLIC_SERVICE.request({
      url: '/auth/signin',
      method: 'POST',
      data: loginData,
      headers: {
        Accept: 'application/json',
      },
    });
  },

  signup: async (signupData: SignupZType) => {
    return await API_PUBLIC_SERVICE.request({
      url: '/auth/signup',
      method: 'POST',
      data: signupData,
      headers: {
        Accept: 'application/json',
      },
    });
  },
};

export default AUTH_SERVICE;
