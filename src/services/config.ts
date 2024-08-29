import axios from 'axios';
import {asyncGetData, asyncRemoveData} from '../core/AsyncStorage';
import RNRestart from 'react-native-restart';

// API base URL
const API_BASE_URL = 'https://api.thadaraiadhikari.com';

// Fetch user token asynchronously
export async function getUserToken() {
  const token = await asyncGetData('TOKEN');
  // console.log('\n\nstoredAccessToken: ', token);
  return token as string | undefined;
}

// Fetch user token asynchronously
export async function getUserRefreshToken() {
  const data = await asyncGetData('USER');
  const appUser = await JSON.parse(data as string);
  const refreshToken = appUser?.user.refreshToken;
  // console.log('\n\n stored Refresh Token: ', refreshToken);
  return refreshToken;
}

// Create an Axios instance for public services
export const API_PUBLIC_SERVICE = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000, // 20 seconds
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

// Create an Axios instance for private services
export const API_PRIVATE_SERVICE = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000, // 20 seconds
  headers: {
    Accept: '*/*',
  },
});

// Add a request interceptor to include the Authorization header
API_PRIVATE_SERVICE.interceptors.request.use(
  async (config) => {
    const token = await getUserToken();
    // console.log('interceptor accessToken: ', token);
    // console.log('interceptor refreshToken: ', await getUserRefreshToken());
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor to handle token refresh logic
API_PRIVATE_SERVICE.interceptors.response.use(
  (response) => response,
  async function (error) {
    const errorRes = error?.response.data;
    if (errorRes.message === 'Unauthorized' && errorRes.statusCode === 401) {
      // removing user data and restarting
      await asyncRemoveData('USER').then(async () => {
        await asyncRemoveData('TOKEN').then(() => {
          RNRestart.Restart();
        });
      });
    }

    // -------------------- Requesting refresh Token ------------------------
    // const refreshAPI = async () => {
    //   // console.log('Refreshing Token.........');
    //   if (errorRes.message === 'Unauthorized' && errorRes.statusCode === 401) {
    //     const expiredRT = await getUserRefreshToken();
    //     const expiredAT = await getUserToken();

    //     if (expiredRT && expiredAT) {
    //       const refreshTokenRes = await AUTH_SERVICE.refreshToken(
    //         expiredRT,
    //         expiredAT,
    //       );
    //       console.log('\n\nrefreshing tokn: ', refreshTokenRes?.data);
    //       if (refreshTokenRes) {
    //         await asyncStoreData('USER', JSON.stringify(refreshTokenRes?.data));
    //         await asyncStoreData('TOKEN', refreshTokenRes?.data.accessToken);
    //         console.log('Refreshing Token Done.........');
    //       } else {
    //         console.log('Failed Refreshment ...');
    //       }
    //     }
    //   }
    // };
    // refreshAPI().then(() => {
    //   console.log('Refreshing Done.........');
    // });
    return Promise.reject(error);
  },
);
