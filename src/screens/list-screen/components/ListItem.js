import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Colors from '../../../themes/Colors';

const ListItem = ({details}) => {
  return (
    <View style={styles.userItem}>
      <View style={styles.iconContainer}>
        <Icon color={Colors.placeholder} name="user" size={30} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Developer Demo</Text>
        <Text style={styles.userDetails}>Physician</Text>
        <Text style={styles.userDetails}>{details.email}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  userItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: Colors.background,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  profileIcon: {
    marginRight: 16,
    backgroundColor: Colors.profileIcon,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  userDetails: {
    fontSize: 13,
    fontWeight: '400',
    color: 'black',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.profileIcon,
    marginHorizontal: 10,
  },
});
