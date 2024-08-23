import {API_PRIVATE_SERVICE} from '../../config';

export const CONTRIBUTION_SERVICES = {
  getAllContributions: async () => {
    return await API_PRIVATE_SERVICE.request({
      url: '/user/event',
      method: 'GET',
    });
  },
};
