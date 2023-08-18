import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_STORAGE_KEY = 'users';

export const getUsers = async () => {
  try {
    const usersString = await AsyncStorage.getItem(USER_STORAGE_KEY);
    if (usersString) {
      const usersData = JSON.parse(usersString);
      return usersData;
    }
    return [];
  } catch (error) {
    console.error('Error getting users:', error);
    return [];
  }
};
