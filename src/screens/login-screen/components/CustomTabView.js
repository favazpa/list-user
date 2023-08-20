import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../../themes/Colors';
import TextConstants from '../../../constants/TextConstants';

const CustomTabView = ({activeTab, handleTabChange}) => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === TextConstants.email && styles.activeTab]}
        onPress={() => handleTabChange(TextConstants.email)}>
        <Text
          style={[
            styles.tabText,
            activeTab === TextConstants.email && styles.activeTabText,
          ]}>
          Email
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === TextConstants.phone && styles.activeTab]}
        onPress={() => handleTabChange(TextConstants.phone)}>
        <Text
          style={[
            styles.tabText,
            activeTab ===TextConstants.phone && styles.activeTabText,
          ]}>
          Phone Number
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabView;

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 50,
    padding: 5,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  tab: {
    width: '48%',
    padding: 10,
    backgroundColor: Colors.background,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.placeholder,
  },
  activeTabText: {
    color: Colors.background,
  },
});
