import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../themes/Colors';

const SecureTextInput = ({
  password,
  isPasswordVisible,
  handleInputChange,
  togglePasswordVisibility,
}) => {
  return (
    <View style={styles.passwordContainer}>
      <TextInput
        placeholder="Enter your password"
        placeholderTextColor={colors.placeholder}
        value={password}
        onChangeText={txt => handleInputChange(txt, 'password')}
        style={styles.passwordInput}
        secureTextEntry={!isPasswordVisible}
      />
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={styles.eyeIconContainer}>
        <Icon
          name={isPasswordVisible ? 'eye-slash' : 'eye'}
          size={20}
          color={colors.placeholder}
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
    borderColor: colors.borderColor,
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
});
