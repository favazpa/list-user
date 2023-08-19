import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import PhoneInputWithCountryCode from './PhoneInputWithCountryCode';
import SecureTextInput from './SecureTextInput';

const LoginWithPhoneNumber = ({
  contactIdentifier,
  password,
  handleIdentifierChange,
  handlePasswordChange,
  selectedCountry,
  setSelectedCountry,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleCountrySelect = country => {
    setSelectedCountry(country);
  };

  return (
    <View style={styles.container}>
      <PhoneInputWithCountryCode
        handleCountrySelect={handleCountrySelect}
        selectedCountry={selectedCountry}
        phoneNumber={contactIdentifier}
        handleInputChange={handleIdentifierChange}
      />

      <SecureTextInput
        password={password}
        handleInputChange={handlePasswordChange}
        isPasswordVisible={isPasswordVisible}
        togglePasswordVisibility={togglePasswordVisibility}
      />
    </View>
  );
};

export default LoginWithPhoneNumber;

const styles = StyleSheet.create({
  container: {width: '100%'},
});
