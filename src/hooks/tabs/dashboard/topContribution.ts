import {useCallback, useState} from 'react';
import DASHBOARD_SERVICES from '../../../services/tabs/dashboard';

export const useGetTopContributions = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetTopContribution = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const getTopContribution = await DASHBOARD_SERVICES.getContribution();
      if (getTopContribution) {
        return getTopContribution.data;
      } else {
        setError('Fetch Contribution data failed.');
      }
    } catch (err) {
      setError('Get contribution data Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
      setError(undefined);
    }
  }, []);

  return {loading, error, handleGetTopContribution};
};
