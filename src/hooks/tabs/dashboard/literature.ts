import {useCallback, useState} from 'react';
import DASHBOARD_SERVICES from '../../../services/tabs/dashboard';

export const useGetLiterature = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetLiterature = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const getLiteratureResponse = await DASHBOARD_SERVICES.getLiterature();
      if (getLiteratureResponse) {
        return getLiteratureResponse.data;
      } else {
        setError('Fetch literature failed.');
      }
    } catch (err) {
      setError('Get Literature Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
      setError(undefined);
    }
  }, []);

  return {loading, error, handleGetLiterature};
};

export const usePostLiterature = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handlePostLiterature = useCallback(async (literature: FormData) => {
    setLoading(true);
    setError(undefined);
    try {
      const postLiteratureResp = await DASHBOARD_SERVICES.postLiterature(
        literature,
      );
      if (postLiteratureResp) {
        // console.log('postLiterature: ', postLiteratureResp.data);
        return postLiteratureResp.data;
      }
    } catch (err) {
      setError('Post Alekhs Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handlePostLiterature};
};
