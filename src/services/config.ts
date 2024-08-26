import axios from 'axios';
import {asyncGetData} from '../core/AsyncStorage';
import {handleRefreshToken} from '../hooks/auth';
import AUTH_SERVICE from './auth';

//   http://52.55.135.178:8080

export const API_PUBLIC_SERVICE = axios.create({
  // baseURL: 'http://192.168.16.153:4444',
  baseURL: 'https://api.thadaraiadhikari.com',
  timeout: 20000, // in 20sec
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

// Fetch user token asynchronously
export async function getUserToken() {
  const token = await asyncGetData('TOKEN');
  // console.log('getUserToken: ', token);
  if (token) {
    return token as string;
  }
}

//'USER' key le asyncstorage ma store hune data types
type userDataType = {
  accessToken: string;
  user: {
    id: number;
    name: string;
    phone: string;
    email: string;
    imgurl: null;
    mynode: null;
    role: string;
    verified: true;
    merged: false;
    ascendants: null;
    fulltree: null;
    topnode: null;
    refreshToken: string;
    province: string;
    district: string;
  };
};

export async function getUserData(): Promise<userDataType | null> {
  const userData = await asyncGetData('USER');
  if (userData) {
    return JSON.parse(userData);
  }
  return null;
}

// Create an Axios instance for private services
export const API_PRIVATE_SERVICE = axios.create({
  // baseURL: 'http://192.168.16.153:4444',
  baseURL: 'https://api.thadaraiadhikari.com',
  timeout: 20000, // in 20 sec
  headers: {Accept: '*/*'},
});

// Add an interceptor to add the Authsorization header after resolving the token
API_PRIVATE_SERVICE.interceptors.request.use(
  async (config) => {
    const token = await getUserToken();
    // console.log('Token interceptor: ', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API_PRIVATE_SERVICE.interceptors.response.use(
  (resp) => resp,
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const userData: userDataType | null = await getUserData();
      const refreshToken = userData?.user.refreshToken;
      if (refreshToken) {
        console.log('token expired');
        await handleRefreshToken(refreshToken);
        //yaha chai refresh api call garera user and token feri naya set garnu parne ho, but the api didnt respond
        //to my request.....
      } else {
        console.log('No refresh token found in the local storage.');
        //return to login page logic
      }
    } else {
      console.log('something other error');
      //return to login page logic here as wel.
    }
  },
);
