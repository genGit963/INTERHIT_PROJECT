import {LiteratureZType} from '../../../schema/tabs/dashboard/literature.schema';
import {API_PRIVATE_SERVICE} from '../../config';

const DASHBOARD_SERVICES = {
  // ------------------- alekhs -------------------
  getAlekhs: async () => {
    return await API_PRIVATE_SERVICE.request({
      url: '/user/aalekh?search=%20&verified=true',
      method: 'GET',
    });
  },

  postAlekhs: async (alekh: FormData) => {
    console.log('post Alekhs ep:', alekh);
    return await API_PRIVATE_SERVICE.request({
      url: '/user/aalekh',
      method: 'POST',
      data: alekh,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  // ------------------- literature -------------------
  getLiterature: async () => {
    return await API_PRIVATE_SERVICE.request({
      url: '/user/literature',
      method: 'GET',
    });
  },

  postLiterature: async (literature: LiteratureZType) => {
    return await API_PRIVATE_SERVICE.request({
      url: '/user/literature',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: literature,
    });
  },

  //albums
  getAlbum: async () => {
    return await API_PRIVATE_SERVICE.request({
      url: '/user/album',
      method: 'GET',
    });
  },

  //yogdan
  getYogdan: async () => {
    return await API_PRIVATE_SERVICE.request({
      url: '/user/yogdan',
      method: 'GET',
    });
  },

  //contribution
  getContribution: async () => {
    return await API_PRIVATE_SERVICE.request({
      url: '/user/contribution',
      method: 'GET',
    });
  },
  //   'https://api.thadaraiadhikari.com/user/aalekh?search=%20&verified=true'
};

export default DASHBOARD_SERVICES;
