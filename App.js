import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigations} from './src/navigations/Navigations';
import AnimatedSplash from 'react-native-animated-splash-screen';

const App = () => {
  return (
    <NavigationContainer>
      <Navigations></Navigations>
    </NavigationContainer>
  );
};

export default App;
