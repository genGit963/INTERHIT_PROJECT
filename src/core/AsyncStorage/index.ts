import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncGetData = async (key: string) => {
  const data = await AsyncStorage.getItem(key);
  // console.log('asyncGetData: ', data);
  if (data) {
    return data;
  }
  return null;
};

const asyncStoreData = async (key: string, value: string) => {
  try {
    const stringify = typeof value !== 'string' ? JSON.stringify(value) : value;
    await AsyncStorage.setItem(key, stringify);
  } catch (e) {
    // saving error
    console.log('async store  storing error: ', e);
  }
};

const asyncRemoveData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
    console.log('async store removing error: ', e);
  }
};

export {asyncGetData, asyncStoreData, asyncRemoveData};
