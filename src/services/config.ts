import axios from 'axios';
import {asyncGetData} from '../core/AsyncStorage';

//   http://52.55.135.178:8080

export const API_PUBLIC_SERVICE = axios.create({
  baseURL: 'http://localhost:4444',
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

// Create an Axios instance for private services
export const API_PRIVATE_SERVICE = axios.create({
  baseURL: 'http://localhost:4444',
  timeout: 20000, // in 20 sec
  headers: {Accept: '*/*'},
});

// Add an interceptor to add the Authsorization header after resolving the token
API_PRIVATE_SERVICE.interceptors.request.use(
  async (config) => {
    const token = await getUserToken();
    if (token) {
      // console.log('Token interceptor: ', token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
