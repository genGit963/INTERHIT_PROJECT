import {useCallback, useState} from 'react';
import {LoginZType} from '../../schema/auth';
import AUTH_SERVICE from '../../services/auth';
import {asyncStoreData} from '../../core/AsyncStorage';

// 9865914722
// Mahesh999@

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleLogin = useCallback(async (loginData: LoginZType) => {
    setLoading(true);
    setError(undefined);
    try {
      await AUTH_SERVICE.login(loginData).then(async (Response) => {
        // storing to AsyncStorage
        await asyncStoreData('USER', JSON.stringify(Response.data));
      });
    } catch (err) {
      setError('Login Failed!');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handleLogin};
};
