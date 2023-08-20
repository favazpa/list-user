import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {checkLoginStatus} from '../../utils/AuthUtils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    checkLoginStatus(navigation);
  }, [navigation]);
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SplashScreen;
