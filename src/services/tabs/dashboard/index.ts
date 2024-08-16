import {AlekhZType} from '../../../schema/tabs/dashboard/alekh.schema';
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

  postAlekhs: async (alekh: AlekhZType) => {
    return await API_PRIVATE_SERVICE.request({
      url: '/user/aalekh',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: alekh,
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
  //   'https://api.thadaraiadhikari.com/user/aalekh?search=%20&verified=true'
};

export default DASHBOARD_SERVICES;
