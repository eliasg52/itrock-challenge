import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_TOKEN_KEY = 'userToken';

export const saveToken = async () => {
  try {
    await AsyncStorage.setItem(USER_TOKEN_KEY, 'itRockToken');
  } catch (e) {
    console.error('Failed to save user token:', e);
    throw e;
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(USER_TOKEN_KEY);
  } catch (e) {
    console.error('Failed to remove user token:', e);
    throw e;
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem(USER_TOKEN_KEY);
    return token;
  } catch (e) {
    console.error('Failed to get user token:', e);
    return null;
  }
};
