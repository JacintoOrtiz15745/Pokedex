import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigations} from './src/navigations/Navigations'; 

const App = () => {
  return (
    <NavigationContainer>
      <Navigations></Navigations>
    </NavigationContainer>
  );
};

export default App;
