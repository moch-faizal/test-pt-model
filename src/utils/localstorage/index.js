import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('error store async storage: ', e);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.stringify(value);
    }

    console.log(value);
  } catch (e) {
    console.log('error get async storage: ', e);
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    //error reading value
  }
};
