import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ListScreen from '../screens/ListScreen';
import SplashScreen from '../screens/SplashScreen';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerStyle: {backgroundColor: '#34A2B1'}}}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default Navigation;
