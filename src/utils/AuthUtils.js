import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const USER_STORAGE_KEY = 'users';

export const checkLoginStatus = async navigation => {
  try {
    const login = await AsyncStorage.getItem('login');
    if (login === 'true') {
      navigation.replace('List');
    } else {
      navigation.replace('Login');
    }
  } catch (error) {
    console.error('Error checking login status:', error);
  }
};

export const handleLogin = async (
  contactIdentifier,
  activeTab,
  password,
  navigation,
) => {
  console.log('contactIdentifier', contactIdentifier);
  try {
    const usersString = await AsyncStorage.getItem(USER_STORAGE_KEY);
    const usersData = usersString ? JSON.parse(usersString) : [];

    const user =
      activeTab === 'phone'
        ? usersData.find(
            userData =>
              userData.phoneNumber === contactIdentifier &&
              userData.password === password,
          )
        : usersData.find(
            userData =>
              userData.email === contactIdentifier &&
              userData.password === password,
          );

    console.log('user', user);

    if (user) {
      Alert.alert('Success', 'Login successful!');
      await AsyncStorage.setItem('login', 'true');
      navigation.replace('List');
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export const handleLogOut = async navigation => {
  try {
    await AsyncStorage.setItem('login', 'false');
    navigation.replace('Login');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
