import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Pokemons from '../screens/Pokemons';
import Details from '../screens/Details';

const Stack = createStackNavigator();

export const Navigations = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Pokemons" component={Pokemons} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
