import {API_PRIVATE_SERVICE} from '../../config';

export const MERGE_SERVICES = {
  mergeRequests: async (merge_path: string) => {
    return await API_PRIVATE_SERVICE.request({
      url: `/merge/${merge_path}`,
      method: 'GET',
    });
  },
};
