import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

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
    borderColor: '#e5e8e8',
    borderWidth: 1,
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  tab: {
    width: '48%',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#34A2B1',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#A2ABC3',
  },
  activeTabText: {
    color: 'white',
  },
});
