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

  //refreshToken
  refreshToken: async (
    refTok: string | undefined,
    accessToken: string | undefined,
  ) => {
    console.log(
      '\n\nep refreshToken: ',
      refTok,
      '\n\n ep accessToken:',
      accessToken,
    );
    const res = await API_PUBLIC_SERVICE.request({
      url: '/auth/refreshtoken',
      method: 'POST',
      data: {
        refreshToken: refTok,
        // refreshToken:
        //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijk4NjU5MTQ3MjIiLCJlbWFpbCI6ImJvZ2F0aS5tYWhlc2guMjk5Ljc5Mi40NThAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MjQ4NDE3NzAsImV4cCI6MTcyNTQ0NjU3MH0.LetDBcj7v2MVCa3jq6pu_csLR6C0DAhnYPor881JQRc',
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // Authorization:
        //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijk4NjU5MTQ3MjIiLCJlbWFpbCI6ImJvZ2F0aS5tYWhlc2guMjk5Ljc5Mi40NThAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MjQ4NDE3NzAsImV4cCI6MTcyNDg0NTc3MH0.1gxsMWEw-9UFup5UnXQ35wmPe3EZzGsXSUNnDnfTbEo',
      },
    });
    if (res) {
      console.log('\n\nep refreshToken res: ', res.data);
      return res;
    } else {
      return null;
    }
  },
};

export default AUTH_SERVICE;

// storedAccessToken:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijk4NjU5MTQ3MjIiLCJlbWFpbCI6ImJvZ2F0aS5tYWhlc2guMjk5Ljc5Mi40NThAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MjQ4NDE3NzAsImV4cCI6MTcyNDg0NTc3MH0.1gxsMWEw-9UFup5UnXQ35wmPe3EZzGsXSUNnDnfTbEo

// interceptor refreshToken:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijk4NjU5MTQ3MjIiLCJlbWFpbCI6ImJvZ2F0aS5tYWhlc2guMjk5Ljc5Mi40NThAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MjQ4NDE3NzAsImV4cCI6MTcyNTQ0NjU3MH0.LetDBcj7v2MVCa3jq6pu_csLR6C0DAhnYPor881JQRc
