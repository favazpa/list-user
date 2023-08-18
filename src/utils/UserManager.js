import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

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

export const handleSignUp = async (
  email,
  phoneNumber,
  password,
  navigation,
) => {
  try {
    const usersString = await AsyncStorage.getItem(USER_STORAGE_KEY);
    const usersData = usersString ? JSON.parse(usersString) : [];

    const isPhoneNumberTaken = usersData.some(
      userData => userData.phoneNumber === phoneNumber,
    );
    const isEmailTaken = usersData.some(userData => userData.email === email);

    if (isPhoneNumberTaken) {
      Alert.alert('Error', 'Phone number is already taken');
    } else if (isEmailTaken) {
      Alert.alert('Error', 'Email address is already taken');
    } else {
      const newUser = {password, phoneNumber, email};
      const updatedUsers = [...usersData, newUser];
      await AsyncStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify(updatedUsers),
      );
      Alert.alert('Success', 'User signed up successfully!');
      navigation.navigate('Login');
    }
  } catch (error) {
    console.error('Error signing up:', error);
  }
};
