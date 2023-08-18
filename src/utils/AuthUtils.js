import AsyncStorage from '@react-native-async-storage/async-storage';
import {showToast} from './ToastUtils';

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

    if (user) {
      showToast('success', 'Login successful!');
      await AsyncStorage.setItem('login', 'true');
      navigation.replace('List');
    } else {
      showToast('error', 'Invalid username or password');
    }
  } catch (error) {
    console.error('Error logging in:', error);
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
      showToast('error', 'Phone number is already taken');
    } else if (isEmailTaken) {
      showToast('error', 'Email address is already taken');
    } else {
      const newUser = {password, phoneNumber, email};
      const updatedUsers = [...usersData, newUser];
      await AsyncStorage.setItem(
        USER_STORAGE_KEY,
        JSON.stringify(updatedUsers),
      );
      showToast('success', 'Signed up Successfully');
      navigation.navigate('Login');
    }
  } catch (error) {
    console.error('Error signing up:', error);
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
