import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import SecureTextInput from './SecureTextInput';
import colors from '../themes/Colors';

const LoginWIthEmail = ({
  contactIdentifier,
  password,
  handleIdentifierChange,
  handlePasswordChange,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor={colors.placeholder}
        value={contactIdentifier}
        onChangeText={txt => handleIdentifierChange(txt)}
        style={styles.textInputContainer}
      />

      <SecureTextInput
        password={password}
        isPasswordVisible={isPasswordVisible}
        togglePasswordVisibility={togglePasswordVisibility}
        handleInputChange={handlePasswordChange}
      />
    </View>
  );
};

export default LoginWIthEmail;

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 30,
    color: 'black',
  },
  container: {width: '100%'},
});
