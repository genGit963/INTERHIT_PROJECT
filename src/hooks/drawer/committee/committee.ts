import {useCallback, useState} from 'react';
import {COMMITTEE_SERVICES} from '../../../services/drawer/committee/committee';

export const useGetCommitteMembers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleGetMembers = useCallback(
    async (
      type: string,
      year: number = 2020,
      district?: string | null,
      province?: string | null,
    ) => {
      setLoading(true);
      setError(undefined);

      try {
        const getMembersResponse = await COMMITTEE_SERVICES.getCommitteeMembers(
          type,
          year,
          district,
          province,
        );
        if (getMembersResponse) {
          return getMembersResponse.data;
        } else {
          setError('Fetch members failed.');
        }
      } catch (err) {
        setError('Get members Failed !');
        console.log('Failed error: ', err);
        return null;
      } finally {
        setLoading(false);
        setError(undefined);
      }
    },
    [],
  );

  return {loading, error, handleGetMembers};
};
