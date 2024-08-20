import {useCallback, useState} from 'react';
import {IdCardZType} from '../../../schema/drawer/profile/id-card.schema';
import {PROFILE_SERVICES} from '../../../services/drawer/profile/idCard';

export const useRequestIdCard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>();

  const handleRequestIdCard = useCallback(async (idCardData: IdCardZType) => {
    setLoading(true);
    setError(undefined);
    try {
      const requestIdResp = await PROFILE_SERVICES.requestIdCard(idCardData);
      if (requestIdResp) {
        return requestIdResp.data;
      } else {
        setError('Unable to request id card now');
      }
    } catch (error) {
      setError('Id card request failed. Please try again later.');
      console.log('Id card request failed: ', error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handleRequestIdCard};
};
