import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <View style={{width: '100%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.countryCodeContainer}>
          <CountryPicker
            withFilter
            withFlagButton
            withCallingCode
            withAlphaFilter
            withCountryNameButton
            withCallingCodeButton
            onSelect={handleCountrySelect}
            countryCode={selectedCountry?.cca2}
            translation="eng"
          />
          <Icon
            name="chevron-down"
            size={10}
            color="#A2ABC3"
            style={styles.arrowIcon}
          />
        </View>

        <TextInput
          placeholder="Phone number"
          placeholderTextColor={'#A2ABC3'}
          style={styles.phoneInputContainer}
          keyboardType="number-pad"
          value={contactIdentifier}
          onChangeText={txt => handleIdentifierChange(txt)}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor={'#A2ABC3'}
          value={password}
          onChangeText={txt => handlePasswordChange(txt)}
          style={styles.passwordInput}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIconContainer}>
          <Icon
            name={isPasswordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="#A2ABC3"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginWithPhoneNumber;

const styles = StyleSheet.create({
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e8e8',
    width: '72%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 30,
    color: 'black',
  },
  phoneInput: {
    flex: 1,
    marginLeft: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e8e8',
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  passwordInput: {
    flex: 1,
    color: 'black',
  },
  eyeIconContainer: {
    marginLeft: 10,
  },
  arrowIcon: {
    marginHorizontal: 4,
  },
  countryCodeContainer: {
    borderWidth: 1,
    borderColor: '#e5e8e8',
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '25%',
    borderRadius: 5,
  },
});
