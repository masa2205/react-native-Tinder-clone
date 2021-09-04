import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './store';

export default App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // </Provider>
  );
};
