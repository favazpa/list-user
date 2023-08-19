import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';

const CustomTabView = ({activeTab, handleTabChange}) => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'email' && styles.activeTab]}
        onPress={() => handleTabChange('email')}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'email' && styles.activeTabText,
          ]}>
          Email
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'phone' && styles.activeTab]}
        onPress={() => handleTabChange('phone')}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'phone' && styles.activeTabText,
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
    borderColor: colors.borderColor,
    borderWidth: 1,
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  tab: {
    width: '48%',
    padding: 10,
    backgroundColor: colors.background,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.placeholder,
  },
  activeTabText: {
    color: colors.background,
  },
});
