import {API_PRIVATE_SERVICE} from '../../config';

export const ABOUT_SERVICES = {
  getMessage: async (endpoint: string) => {
    return await API_PRIVATE_SERVICE.request({
      url: `/user/message/editor/${endpoint}`,
      method: 'GET',
    });
  },
};
