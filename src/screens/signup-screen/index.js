import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {handleSignUp} from '../../utils/AuthUtils';
import PhoneInputWithCountryCode from '../../components/PhoneInputWithCountryCode';
import SecureTextInput from '../../components/SecureTextInput';
import CustomButton from '../../components/CustomButton';
import Colors from '../../themes/Colors';
import CustomTextInput from '../../components/CustomTextInput';
import TextConstants from '../../constants/TextConstants';

const INDIAN_CALLING_CODE_DETAILS = {
  callingCode: ['91'],
  cca2: 'IN',
  flag: 'flag-in',
};

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    INDIAN_CALLING_CODE_DETAILS,
  );

  const phoneNumberWithCountryCode = `+${selectedCountry.callingCode[0]}${phoneNumber}`;

  const handleInputChange = (txt, state) => {
    if (state === TextConstants.email) {
      setEmail(txt);
    } else if (state === TextConstants.phoneNumber) {
      setPhoneNumber(txt);
    } else if (state === TextConstants.password) {
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
          <CustomTextInput
            placeholder={TextConstants.enterYourEmail}
            value={email}
            onChangeText={txt => handleInputChange(txt, TextConstants.email)}
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
            email && {backgroundColor: Colors.primary}
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
          label={TextConstants.signupButtonLabel}
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
    backgroundColor: Colors.background,
  },
  subContainer: {
    width: '100%',
  },
  emailTextInputContainer: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
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
