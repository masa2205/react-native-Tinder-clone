import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux'

export default LikeKeepScreen = () => {

  const user = useSelector(state => state.user)
  const {likeUsers} = user;

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>
          New Matches
        </Text>
        <ScrollView>
          <View style={styles.users} data={likeUsers}>
            {likeUsers.map(users => (
              <View style={styles.user} key={users.id}>
                <Image source={{uri: users.image}} style={styles.image} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,

    borderWidth: 2,
    padding: 3,
    borderColor: '#F63A6E',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});