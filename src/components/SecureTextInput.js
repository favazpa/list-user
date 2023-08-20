import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../themes/Colors';
import CustomTextInput from './CustomTextInput';
import TextConstants from '../constants/TextConstants';

const SecureTextInput = ({
  password,
  isPasswordVisible,
  handleInputChange,
  togglePasswordVisibility,
}) => {
  return (
    <View style={styles.passwordContainer}>
      <CustomTextInput
        placeholder={TextConstants.enterYourPassword}
        value={password}
        onChangeText={txt => handleInputChange(txt, TextConstants.password)}
        style={styles.passwordInput}
        secureTextEntry={!isPasswordVisible}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={styles.eyeIconContainer}>
        <Icon
          name={isPasswordVisible ? 'eye-slash' : 'eye'}
          size={20}
          color={Colors.placeholder}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SecureTextInput;

const styles = StyleSheet.create({
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  passwordInput: {
    flex: 1,
    color: 'black',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  eyeIconContainer: {
    marginLeft: 10,
  },
});
