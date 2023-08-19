import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {handleLogOut} from '../utils/AuthUtils';
import colors from '../themes/Colors';

const CustomNavigationHeader = ({navigation}) => {
  return (
    <View style={styles.navigationHeader}>
      <TouchableOpacity onPress={() => handleLogOut(navigation)}>
        <Icon name="logout" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.logout}>Logout</Text>
    </View>
  );
};

export default CustomNavigationHeader;

const styles = StyleSheet.create({
  navigationHeader: {
    width: '100%',
    backgroundColor: colors.primary,
    height: 50,
    alignItems: 'center',
    gap: 10,
    padding: 10,
    flexDirection: 'row',
  },
  logout: {color: 'white', fontSize: 15, fontWeight: '700'},
});
