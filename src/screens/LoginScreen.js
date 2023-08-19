import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {handleLogin} from '../utils/AuthUtils';
import LoginWithPhoneNumber from '../components/LoginWithPhoneNumber';
import LoginWIthEmail from '../components/LoginWIthEmail';
import CustomTabView from '../components/CustomTabView';
import CustomButton from '../components/CustomButton';
import colors from '../themes/Colors';

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

        <CustomButton
          isDisabled={contactIdentifier && password ? false : true}
          style={
            contactIdentifier && password && {backgroundColor: colors.primary}
          }
          onPress={() =>
            handleLogin(
              activeTab === 'phone' ? phoneNumber : contactIdentifier,
              activeTab,
              password,
              navigation,
            )
          }
          label={'Login'}
        />

        <CustomButton
          style={{backgroundColor: colors.primary}}
          onPress={() => navigation.navigate('SignUp')}
          label={'Sign Up'}
        />
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
    backgroundColor: colors.background,
  },
  inputContainer: {
    width: '100%',
  },
});

export default LoginScreen;
