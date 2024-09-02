import {useCallback, useEffect, useState} from 'react';

// types
type GenQueryProps = {
  queryFn: () => Promise<any>;
  cacheTime?: number;
};

type Cache = {
  data: any;
  expiry: number;
};

const cache: Record<string, Cache> = {};

export const useGenQuery = ({
  queryFn,
  cacheTime = 10, // default 10 minutes
}: GenQueryProps) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  console.log('lkjugujhokpon......');
  const cacheKey = queryFn.toString();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await queryFn();
      // console.log('useGenQuery queryFn Res: ', response.data);
      if (response) {
        setData(response.data);
        cache[cacheKey] = {
          data: response.data,
          expiry: Date.now() + cacheTime * 60 * 1000,
        };
        console.log('chave data: ', cache);
      }
      // Cache the data
    } catch (err) {
      setError('Query Failed!');
      console.log('useGenQuery Failed error: ', err);
    } finally {
      setLoading(false);
    }
  }, [queryFn, cacheTime]);

  const checkCache = useCallback(() => {
    if (cache[cacheKey] && cache[cacheKey].expiry > Date.now()) {
      setData(cache[cacheKey].data);
      setLoading(false);
      console.log('chave data if: ', cache);
      return;
    }
  }, []);

  useEffect(() => {
    checkCache();
    fetchData();
  }, [fetchData, checkCache]);

  return {loading, error, data};
};
