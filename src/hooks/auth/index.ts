import {useCallback, useState} from 'react';
import {LoginZType, SignupZType} from '../../schema/auth';
import AUTH_SERVICE from '../../services/auth';
import {asyncStoreData} from '../../core/AsyncStorage';

// 9865914722
// Mahesh999@

// 0987654321
// MilanPraz@1

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
        await asyncStoreData('TOKEN', Response.data.accessToken);
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

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const handleSignUp = useCallback(async (signUpData: SignupZType) => {
    setLoading(true);
    setError(undefined);
    try {
      await AUTH_SERVICE.signup(signUpData).then((Response) => {
        if (Response) {
          console.log('sign successs res: ', Response.data);
          return Response.data;
        }
      });
    } catch (err) {
      setError('Sign Up Failed!');
      console.log('Failed error: ', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, error, handleSignUp};
};
