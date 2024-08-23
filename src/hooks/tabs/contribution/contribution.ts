import {useCallback, useState} from 'react';
import {CONTRIBUTION_SERVICES} from '../../../services/tabs/contribution';

export const useGetAllContributionEvents = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');

  const handleGetContributionEvents = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const getContributionEvent =
        await CONTRIBUTION_SERVICES.getAllContributions();
      if (getContributionEvent) {
        return getContributionEvent.data;
      } else {
        setError('unable to get contribution events');
      }
    } catch (error) {
      setError('unable to get contribution events');
      console.log('Failed: ', error);
    } finally {
      setLoading(false);
    }
  }, []);
  return {loading, error, handleGetContributionEvents};
};
