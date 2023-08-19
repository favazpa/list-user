import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {handleSignUp} from '../utils/AuthUtils';
import PhoneInputWithCountryCode from '../components/PhoneInputWithCountryCode';
import SecureTextInput from '../components/SecureTextInput';
import CustomButton from '../components/CustomButton';
import colors from '../themes/Colors';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    callingCode: ['91'],
    cca2: 'IN',
    currency: ['INR'],
    flag: 'flag-in',
    name: 'India',
    region: 'Asia',
    subregion: 'Southern Asia',
  });

  const phoneNumberWithCountryCode = `+${selectedCountry.callingCode[0]}${phoneNumber}`;

  const handleInputChange = (txt, state) => {
    if (state === 'email') {
      setEmail(txt);
    } else if (state === 'phoneNumber') {
      setPhoneNumber(txt);
    } else if (state === 'password') {
      setPassword(txt);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleCountrySelect = country => {
    setSelectedCountry(country);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={colors.placeholder}
            value={email}
            onChangeText={txt => handleInputChange(txt, 'email')}
            style={styles.emailTextInputContainer}
          />
          <PhoneInputWithCountryCode
            phoneNumber={phoneNumber}
            handleCountrySelect={handleCountrySelect}
            handleInputChange={handleInputChange}
            selectedCountry={selectedCountry}
          />
          <SecureTextInput
            password={password}
            isPasswordVisible={isPasswordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
            handleInputChange={handleInputChange}
          />
        </View>

        <CustomButton
          style={
            password &&
            phoneNumber &&
            email && {backgroundColor: colors.primary}
          }
          isDisabled={password && phoneNumber && email ? false : true}
          onPress={() =>
            handleSignUp(
              email,
              phoneNumberWithCountryCode,
              password,
              navigation,
            )
          }
          label={'SignUp'}
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
  subContainer: {
    width: '100%',
  },
  emailTextInputContainer: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 30,
    color: 'black',
  },
  inputContainer: {width: '100%'},
});

export default SignUpScreen;
