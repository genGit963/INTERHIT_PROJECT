import axios from 'axios';

//   http://52.55.135.178:8080
export const API_PUBLIC_SERVICE = axios.create({
  baseURL: 'https://api.thadaraiadhikari.com',
  timeout: 20000, // in 20sec
});

export const API_PRIVATE_SERVICE = axios.create({
  baseURL: 'https://api.thadaraiadhikari.com',
  timeout: 20000, // in 20 sec
  headers: {Authorization: 'foobar'},
});
