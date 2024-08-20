import {IdCardZType} from '../../../schema/drawer/profile/id-card.schema';
import {API_PRIVATE_SERVICE} from '../../config';

export const PROFILE_SERVICES = {
  requestIdCard: async (idCardData: IdCardZType) => {
    return await API_PRIVATE_SERVICE.request({
      url: '/user/idcard',
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/formdata',
      },
      data: idCardData,
    });
  },
};
