import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';
import TextConstants from '../constants/TextConstants';

const CustomTextInput = ({
  value,
  onChangeText,
  style,
  placeholder,
  keyboardType,
  secureTextEntry = false,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={Colors.placeholder}
      value={value}
      onChangeText={txt => onChangeText(txt, TextConstants.email)}
      style={[styles.textInputContainer, {...style}]}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomTextInput;

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
});
