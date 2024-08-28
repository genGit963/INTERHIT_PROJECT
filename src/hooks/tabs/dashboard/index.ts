import {useCallback, useState} from 'react';
import {asyncGetData} from '../../../core/AsyncStorage';
import {StoredUserType} from '../../../schema/auth';

export const useUserDataProvider = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleUserDataProvider = useCallback(async () => {
    setLoading(true);
    try {
      const data: string | null = await asyncGetData('USER');
      if (data) {
        const appUserData = await JSON.parse(data);
        return appUserData;
      }
    } catch (err) {
      console.log('handleUserDataProvider  Failed : ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, handleUserDataProvider};
};
