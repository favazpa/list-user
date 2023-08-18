import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <View style={{width: '100%'}}>
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor={'#A2ABC3'}
        value={contactIdentifier}
        onChangeText={txt => handleIdentifierChange(txt)}
        style={styles.textInputContainer}
      />
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

export default LoginWIthEmail;

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: '#e5e8e8',
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 30,
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
  },
  eyeIconContainer: {
    marginLeft: 10,
  },
});
