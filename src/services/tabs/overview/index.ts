import {API_PRIVATE_SERVICE} from '../../config';

const OVERVIEW_SERVICES = {
  //get population by province
  getPopByProvince: async () => {
    return await API_PRIVATE_SERVICE.request({
      url: '/statistics/populationbyprovince',
      method: 'GET',
    });
  },

  //get population by district
  getPopByDistrict: async () => {
    return await API_PRIVATE_SERVICE.request({
      url: '/statistics/population-by-district',
      method: 'GET',
    });
  },
};

export default OVERVIEW_SERVICES;
