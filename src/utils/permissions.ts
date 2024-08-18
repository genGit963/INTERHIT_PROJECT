import {check, request, RESULTS, Permission} from 'react-native-permissions';

const checkPermission = async (permission: Permission | undefined) => {
  if (permission) {
    console.log('checking permission: ', permission);

    try {
      const result = await check(permission);

      if (result === RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
};

const requestPermission = async (permission: Permission) => {
  console.log('request Permission:', permission);
  try {
    const result = await request(permission);
    console.log('requesting permission: ', result);
    return result === RESULTS.GRANTED;
  } catch (error) {
    console.log('requesting permission error: ', error);
    return false;
  }
};

export {checkPermission, requestPermission};
