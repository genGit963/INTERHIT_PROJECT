import {useCallback, useState} from 'react';
import OVERVIEW_SERVICES from '../../../services/tabs/overview';

export const useGetPopByDistrict = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetPopByDistrict = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const getPopByDistrictResp = await OVERVIEW_SERVICES.getPopByDistrict();
      if (getPopByDistrictResp) {
        return getPopByDistrictResp.data;
      } else {
        setError('Fetch Population by district failed.');
      }
    } catch (err) {
      setError('Get PopByDistrict Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handleGetPopByDistrict};
};
