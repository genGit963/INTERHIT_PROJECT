import {useCallback, useState} from 'react';
import DASHBOARD_SERVICES from '../../../services/tabs/dashboard';

export const useGetYogdan = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetYogdan = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const getYogdanResp = await DASHBOARD_SERVICES.getYogdan();
      if (getYogdanResp) {
        return getYogdanResp.data;
      } else {
        setError('Fetch album failed.');
      }
    } catch (err) {
      setError('Get Yogdan Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handleGetYogdan};
};
