// alekhs
import {useCallback, useState} from 'react';
import DASHBOARD_SERVICES from '../../../services/tabs/dashboard';
import {AlekhZType} from '../../../schema/tabs/dashboard/alekh.schema';

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

export const usePostAlekhs = (alekh: AlekhZType) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const postAlekhs = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      await DASHBOARD_SERVICES.postAlekhs(alekh).then(async (Response) => {
        console.log('postAlekhs: ', Response.data);
        return Response.data;
      });
    } catch (err) {
      setError('Post Alekhs Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, [alekh]);

  return {loading, error, postAlekhs};
};
