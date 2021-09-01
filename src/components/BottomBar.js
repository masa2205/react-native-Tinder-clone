import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default BottoBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Icon name="fire" color="#F06795" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="star" color="#5c5c5c" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="comments" color="#5c5c5c" size={30} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="user" color="#5c5c5c" size={30} style={styles.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flex: 1,
    padding: 15,

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
