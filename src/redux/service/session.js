import AsyncStorage from '@react-native-community/async-storage';

export const setSessionToken = (token) => {
  if (token) {
    AsyncStorage.setItem('token', token);
  } else {
    AsyncStorage.removeItem('token');
  }
};

export const getSessionToken = () => AsyncStorage.getItem('token');

export const setUserName = (username) => {
  if (username) {
    AsyncStorage.setItem('username', username);
  } else {
    AsyncStorage.removeItem('username');
  }
};

export const getUserName = async () => await AsyncStorage.getItem('username');
