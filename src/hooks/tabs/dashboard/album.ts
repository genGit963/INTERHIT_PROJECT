import {useCallback, useState} from 'react';
import DASHBOARD_SERVICES from '../../../services/tabs/dashboard';

export const useGetAlbum = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetAlbum = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const getAlbumResp = await DASHBOARD_SERVICES.getAlbum();
      if (getAlbumResp) {
        return getAlbumResp.data;
      } else {
        setError('Fetch album failed.');
      }
    } catch (err) {
      setError('Get Album Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handleGetAlbum};
};
