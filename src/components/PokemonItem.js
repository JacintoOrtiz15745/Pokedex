import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {styles} from '../styles/PokemonItem';

export default ({name, url, onPress}) => {
  const pokemonNumber = url
    .replace('https://pokeapi.co/api/v2/pokemon/', '')
    .replace('/', '');

  const imageUrl =
    'https://pokeres.bastionbot.org/images/pokemon/' + pokemonNumber + '.png';

  const image = require('../assets/patterns/background-card.png');

  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.pokemonsContainer}>
        <ImageBackground source={image} style={styles.imageBackground}>
          <View style={styles.infoPokemon}>
            <Text style={styles.numberPokemonText}>#{pokemonNumber} </Text>
            <Text style={styles.namePokemonText}>{name} </Text>
          </View>

          <Image style={styles.imagePokemon} source={{uri: imageUrl}}></Image>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
