import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {handleSignUp} from '../utils/AuthUtils';

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
    console.log('country', country);
    setSelectedCountry(country);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={{width: '100%'}}>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={'#A2ABC3'}
            value={email}
            onChangeText={txt => handleInputChange(txt, 'email')}
            style={styles.emailTextInputContainer}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                color="#A2ABC3"
                style={styles.arrowIcon}
              />
            </View>

            <TextInput
              placeholder="Phone number"
              placeholderTextColor={'#A2ABC3'}
              style={styles.phoneInputContainer}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={txt => handleInputChange(txt, 'phoneNumber')}
            />
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={'#A2ABC3'}
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
                color="#A2ABC3"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.loginButton, {backgroundColor: '#34A2B1'}]}
          onPress={() =>
            handleSignUp(
              email,
              `+${selectedCountry.callingCode[0]}${phoneNumber}`,
              password,
              navigation,
            )
          }>
          <Text style={styles.loginButtonText}>SignUp</Text>
        </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#DEE1E6',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
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
  emailTextInputContainer: {
    borderWidth: 1,
    borderColor: '#e5e8e8',
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 30,
    color: 'black',
  },
  countryPicker: {
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

export default SignUpScreen;
