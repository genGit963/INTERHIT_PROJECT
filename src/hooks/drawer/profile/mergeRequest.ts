import {useCallback, useState} from 'react';
import {MERGE_SERVICES} from '../../../services/drawer/profile/mergeRequest';

export const useHandleGetMergeRequests = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetMergeRequests = useCallback(async (path: string) => {
    setLoading(true);
    setError(undefined);

    try {
      const merge_resp = await MERGE_SERVICES.mergeRequests(path);
      if (merge_resp) {
        return merge_resp.data;
      } else {
        setError('Unable to get merge requests now');
      }
    } catch (error) {
      setError('Unable to get merge requests now');
      console.log('Fetching merge requests failed.', error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handleGetMergeRequests};
};
