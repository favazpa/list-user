import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import SecureTextInput from '../../../components/SecureTextInput';
import Colors from '../../../themes/Colors';
import CustomTextInput from '../../../components/CustomTextInput';
import TextConstants from '../../../constants/TextConstants';

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
      {/* <TextInput
        placeholder="Enter your email"
        placeholderTextColor={Colors.placeholder}
        value={contactIdentifier}
        onChangeText={txt => handleIdentifierChange(txt)}
        style={styles.textInputContainer}
      /> */}

      <CustomTextInput
        placeholder={TextConstants.enterYourEmail}
        value={contactIdentifier}
        onChangeText={txt => handleIdentifierChange(txt)}
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
    borderColor: Colors.borderColor,
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 30,
    color: 'black',
  },
  container: {width: '100%'},
});
