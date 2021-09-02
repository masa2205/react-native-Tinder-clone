import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MainImage from '../components/MainImage';
import users from '../../assets/data/users';

export default HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainImage user={users[5]} />
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
