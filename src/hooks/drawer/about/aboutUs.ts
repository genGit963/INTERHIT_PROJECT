import {useCallback, useState} from 'react';
import {ABOUT_SERVICES} from '../../../services/drawer/about-us/aboutUs';

export const useGetMessages = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetMessage = useCallback(async (endpoint: string) => {
    setLoading(true);
    setError(undefined);
    try {
      const getMessageResponse = await ABOUT_SERVICES.getMessage(endpoint);
      if (getMessageResponse) {
        return getMessageResponse.data;
      } else {
        setError('Fetch messages failed.');
      }
    } catch (err) {
      setError('Get messages Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
      setError(undefined);
    }
  }, []);

  return {loading, error, handleGetMessage};
};
