import React from 'react';
import {View, Image, StyleSheet, Text, ImageBackground} from 'react-native';
import ImageBottomBar from './ImageBottomBar';

export default MainImage = () => {
  return (
    <View style={styles.Imagecontainer}>
      <ImageBackground
        style={styles.Image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}>
        <ImageBottomBar />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Imagecontainer: {
    width: '95%',
    height: '85%',
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
});
