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

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(undefined);

    // Caching the fetched data:
    const cacheKey = queryFn.toString(); // Unique key based on function string
    if (cache[cacheKey] && cache[cacheKey].expiry > Date.now()) {
      setData(cache[cacheKey].data);
      setLoading(false);
      return;
    }

    try {
      const response = await queryFn();
      // console.log('useGenQuery queryFn Res: ', response.data);
      if (response) {
        setData(response.data);
      }

      // Cache the data
      cache[cacheKey] = {
        data: response.data,
        expiry: Date.now() + cacheTime * 60 * 1000,
      };
    } catch (err) {
      setError('Query Failed!');
      console.log('useGenQuery Failed error: ', err);
    } finally {
      setLoading(false);
    }
  }, [queryFn, cacheTime]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {loading, error, data};
};
