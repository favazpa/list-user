import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../themes/Colors';

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
          color={colors.placeholder}
          style={styles.arrowIcon}
        />
      </View>

      <TextInput
        placeholder="Phone number"
        placeholderTextColor={colors.placeholder}
        style={styles.phoneInput}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={txt => handleInputChange(txt, 'phoneNumber')}
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
    borderColor: colors.placeholder,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '25%',
    borderRadius: 5,
  },
  arrowIcon: {
    marginHorizontal: 4,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    width: '72%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 30,
    color: 'black',
  },
});
