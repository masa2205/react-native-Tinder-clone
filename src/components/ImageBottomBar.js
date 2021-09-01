import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ImageBottomBar = () => {
  return (
    <View>
      <View style={styles.nameAgeContainer}>
        <Text style={styles.name}>Masa</Text>
        <Text style={styles.age}>Masa</Text>
      </View>
      <View>
        <Text style={styles.bio}>Masa</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.reloadButton}>
          <Icon name="refresh" color="yellow" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nopeButton}>
          <Icon name="times" color="#F06795" size={50} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.superLikeButton}>
          <Icon name="star" color="blue" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton}>
          <Icon name="heart" color="#64EDCC" size={40} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boostButton}>
          <Icon name="bolt" color="violet" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 15,
  },
  reloadButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nopeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  superLikeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boostButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
