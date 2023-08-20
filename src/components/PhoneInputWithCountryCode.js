import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../themes/Colors';
import CustomTextInput from './CustomTextInput';
import TextConstants from '../constants/TextConstants';

const PhoneInputWithCountryCode = ({
  handleCountrySelect,
  selectedCountry,
  phoneNumber,
  handleInputChange,
}) => {
  return (
    <View style={styles.phoneInputContainer}>
      <View style={styles.countryPicker}>
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
          color={Colors.placeholder}
          style={styles.arrowIcon}
        />
      </View>

      {/* <TextInput
        placeholder="Phone number"
        placeholderTextColor={Colors.placeholder}
        style={styles.phoneInput}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={txt => handleInputChange(txt, 'phoneNumber')}
      /> */}

      <CustomTextInput
        placeholder={'Phone number'}
        value={phoneNumber}
        onChangeText={txt => handleInputChange(txt, TextConstants.phoneNumber)}
        style={styles.phoneInput}
        keyboardType={'phone-pad'}
      />
    </View>
  );
};

export default PhoneInputWithCountryCode;

const styles = StyleSheet.create({
  phoneInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countryPicker: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '28%',
    borderRadius: 5,
  },
  arrowIcon: {
    marginHorizontal: 4,
  },
  phoneInput: {flexDirection: 'row', alignItems: 'center', width: '70%'},
});
