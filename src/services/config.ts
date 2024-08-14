import axios from 'axios';
import {asyncGetData} from '../core/AsyncStorage';

//   http://52.55.135.178:8080

export const API_PUBLIC_SERVICE = axios.create({
  // baseURL: 'https://api.thadaraiadhikari.com',
  baseURL: 'http://0.0.0.0:4444',
  timeout: 20000, // in 20sec
  headers: {
    Accept: 'application/json',
  },
});

// Fetch user token asynchronously
export async function getUserToken(): Promise<string> {
  return (await asyncGetData('TOKEN')) as string;
}

// Create an Axios instance for private services
export const API_PRIVATE_SERVICE = axios.create({
  // baseURL: 'https://api.thadaraiadhikari.com',
  baseURL: 'http://0.0.0.0:4444',
  timeout: 20000, // in 20 sec
  headers: {Accept: 'application/json'},
});

// Add an interceptor to add the Authorization header after resolving the token
API_PRIVATE_SERVICE.interceptors.request.use(
  async (config) => {
    const token = await getUserToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
