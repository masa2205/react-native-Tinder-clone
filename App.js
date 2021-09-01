import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BottomBar from './src/components/BottomBar';

export default App = () => {
  return (
    <View style={styles.container}>
      <BottomBar />
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
