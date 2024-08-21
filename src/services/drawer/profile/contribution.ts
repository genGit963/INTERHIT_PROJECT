import {API_PRIVATE_SERVICE} from '../../config';

export const CONTRIBUTION_SERVICES = {
  postClaimContribution: async (claimContribData: FormData) => {
    return API_PRIVATE_SERVICE.request({
      url: '/user/contribution',
      method: 'POST',
      data: claimContribData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
