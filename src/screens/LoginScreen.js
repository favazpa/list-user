import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {handleLogin} from '../utils/AuthUtils';
import LoginWithPhoneNumber from '../components/LoginWithPhoneNumber';
import LoginWIthEmail from '../components/LoginWIthEmail';
import CustomTabView from '../components/CustomTabView';

const LoginScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('email');
  const [contactIdentifier, setContactIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({
    callingCode: ['91'],
    cca2: 'IN',
    currency: ['INR'],
    flag: 'flag-in',
    name: 'India',
    region: 'Asia',
    subregion: 'Southern Asia',
  });

  const phoneNumber = `+${selectedCountry.callingCode[0]}${contactIdentifier}`;

  const handleTabChange = tab => {
    setContactIdentifier('');
    setPassword('');
    setActiveTab(tab);
  };

  const handleIdentifierChange = txt => {
    setContactIdentifier(txt);
  };
  const handlePasswordChange = txt => {
    setPassword(txt);
  };

  return (
    <View style={styles.container}>
      <CustomTabView handleTabChange={handleTabChange} activeTab={activeTab} />
      <View style={styles.inputContainer}>
        {activeTab === 'phone' ? (
          <LoginWithPhoneNumber
            contactIdentifier={contactIdentifier}
            password={password}
            handleIdentifierChange={txt => handleIdentifierChange(txt)}
            handlePasswordChange={txt => handlePasswordChange(txt)}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        ) : (
          <LoginWIthEmail
            contactIdentifier={contactIdentifier}
            password={password}
            handleIdentifierChange={txt => handleIdentifierChange(txt)}
            handlePasswordChange={txt => handlePasswordChange(txt)}
          />
        )}

        <TouchableOpacity
          disabled={contactIdentifier && password ? false : true}
          style={[
            styles.loginButton,
            contactIdentifier && password && {backgroundColor: '#34A2B1'},
          ]}
          onPress={() =>
            handleLogin(
              activeTab === 'phone' ? phoneNumber : contactIdentifier,
              activeTab,
              password,
              navigation,
            )
          }>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginButton, {backgroundColor: '#34A2B1'}]}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.loginButtonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#DEE1E6',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
