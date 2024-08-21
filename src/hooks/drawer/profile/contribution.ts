import {useCallback, useState} from 'react';
import {CONTRIBUTION_SERVICES} from '../../../services/drawer/profile/contribution';

export const useClaimContribution = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleClaimContribution = useCallback(
    async (claimContribData: FormData) => {
      setLoading(true);
      setError(undefined);
      try {
        const claimContribResp =
          await CONTRIBUTION_SERVICES.postClaimContribution(claimContribData);
        if (claimContribResp) {
          return claimContribResp.data;
        } else {
          setError('Unable to claim the contribution now');
        }
      } catch (error) {
        setError('Unable to claim contribution now. Please try again later.');
        console.log('Unable to claim contribution now: ', error);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {loading, error, handleClaimContribution};
};
