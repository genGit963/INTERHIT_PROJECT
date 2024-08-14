import {AlekhZType} from '../../../schema/tabs/dashboard/alekh.schema';
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
      url: '/user/aalekh?search=%20&verified=true',
      method: 'POST',
      data: alekh,
    });
  },

  //   'https://api.thadaraiadhikari.com/user/aalekh?search=%20&verified=true'
};

export default DASHBOARD_SERVICES;
