import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MainImage from '../components/MainImage';

export default HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
