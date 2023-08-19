import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({style, onPress, label, isDisabled = false}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.loginButton, {...style}]}
      onPress={() => onPress()}>
      <Text style={styles.loginButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
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
});
