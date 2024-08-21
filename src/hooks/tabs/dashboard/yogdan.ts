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

export const usePostYogdan = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handlePostYogdan = useCallback(async (yogdanData: FormData) => {
    setLoading(true);
    setError(undefined);
    try {
      const getYogdanResp = await DASHBOARD_SERVICES.postYogdan(yogdanData);
      if (getYogdanResp) {
        return getYogdanResp.data;
      } else {
        setError('Post yogdan failed.');
      }
    } catch (err) {
      setError('post Yogdan Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handlePostYogdan};
};
