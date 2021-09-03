import React from 'react';
import {View, Image, StyleSheet, Text, ImageBackground} from 'react-native';
import ImageBottomBar from './ImageBottomBar';
import 'react-native-gesture-handler';

export default MainImage = props => {
  const {name, image, age, bio} = props.user;
  return (
    <View style={styles.Imagecontainer}>
      <ImageBackground
        style={styles.Image}
        source={{
          uri: image,
        }}>
        <View style={styles.nameAgeContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>{age}</Text>
        </View>
        <View>
          <Text style={styles.bio}>{bio}</Text>
        </View>
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
  nameAgeContainer: {
    flexDirection: 'row',
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  age: {
    color: 'white',
    fontSize: 25,
    paddingTop: 5,
  },
  bio: {
    color: 'white',
    fontSize: 20,
    lineHeight: 25,
    marginHorizontal: 10,
    paddingBottom: 5,
  },
});
