// alekhs
import {useCallback, useState} from 'react';
import DASHBOARD_SERVICES from '../../../services/tabs/dashboard';

export const useGetAlekhs = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getAlekhs = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      await DASHBOARD_SERVICES.getAlekhs().then(async (Response) => {
        console.log('getAlekhs: ', Response.data);
        return Response.data;
      });
    } catch (err) {
      setError('Get Alekhs Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, getAlekhs};
};

export const usePostAlekhs = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePostAlekhs = useCallback(async (formData: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await DASHBOARD_SERVICES.postAlekhs(formData);
      if (response) {
        console.log('\npostAlekhs hook : ', response.data);
        return response.data;
      }
    } catch (err) {
      setError('Post Alekh Failed !! ');
      console.log('post alekh: ' + err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handlePostAlekhs};
};
