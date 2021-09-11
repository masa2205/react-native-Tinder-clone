import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import LikeKeepScreen from '../screens/LikeKeepScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const LikeKeepTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LikeKeep"
        component={LikeKeepScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ChatTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const ProfileTransition = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const screenOption = ({route}) => ({
  tabBarIcon: ({color, size}) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = 'fire';
    } else if (route.name === 'LikeKeep') {
      iconName = 'star';
    } else if (route.name === 'Chat') {
      iconName = 'comments';
    } else if (route.name === 'profile') {
      iconName = 'user';
    }
    return <Icon name={iconName} size={size} color={color} />;
  },
});

export default AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen
        name="Home"
        component={HomeTransition}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="LikeKeep"
        component={LikeKeepTransition}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Chat"
        component={ChatTransition}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="profile"
        component={ProfileTransition}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
