import {API_PRIVATE_SERVICE} from '../../config';

export const COMMITTEE_SERVICES = {
  getCommitteeMembers: async (
    type: string,
    year: number,
    district?: string | null,
    province?: string | null,
  ) => {
    console.log('getcommittee members ep: ', type, year, district, province);
    return await API_PRIVATE_SERVICE.request({
      url: district
        ? `/user/committee?type=${type}&year=${year}&district=${district}`
        : province
        ? `/user/committee?type=${type}&year=${year}&province=${province}`
        : `/user/committee?type=${type}&year=${year}`,
      method: 'GET',
    });
  },
};
