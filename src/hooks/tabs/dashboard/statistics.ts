import {useCallback, useState} from 'react';
import DASHBOARD_SERVICES from '../../../services/tabs/dashboard';

export const useGetStatistics = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetStatistics = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    try {
      const getStatsData = await DASHBOARD_SERVICES.getStatistics();
      if (getStatsData) {
        return getStatsData.data;
      } else {
        setError('Fetch Stats failed.');
      }
    } catch (err) {
      setError('Get Stats Failed !');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
      setError(undefined);
    }
  }, []);

  return {loading, error, handleGetStatistics};
};
