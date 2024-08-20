import {useCallback, useState} from 'react';
import OVERVIEW_SERVICES from '../../../services/tabs/overview';

export const useGetPopByProvince = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetPopByProvince = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const getPopByProvinceResp = await OVERVIEW_SERVICES.getPopByProvince();
      if (getPopByProvinceResp) {
        return getPopByProvinceResp.data;
      } else {
        setError('Fetch Population by province failed.');
      }
    } catch (err) {
      setError('Get PopByProvince Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handleGetPopByProvince};
};
