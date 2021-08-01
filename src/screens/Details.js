import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {styles} from '../styles/Details';
import CardType from '../components/CardType';
import InformationPokemon from '../components/InformationPokemon';

const Details = ({route, navigation}) => {
  const [details, setDetails] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const url = route.params;
  let number = 1;
  const circle = require('../assets/patterns/circle.png');
  const imageUrl =
    'https://pokeres.bastionbot.org/images/pokemon/' + details.id + '.png';

  const fetchPokemonDetails = async () => {
    const aborCont = new AbortController();
    try {
      const response = await fetch(url, {signal: aborCont.signal});
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('fetch aborted');
      } else {
        console.log(error);
      }
    }
    return () => aborCont.abort();
  };

  const fetchPokemon = async () => {
    const aborContTwo = new AbortController();
    try {
      const responsePokemon = await fetch(
        'https://pokemon-db-json.herokuapp.com/',
        {signal: aborContTwo.signal},
      );
      const dataPokemon = await responsePokemon.json();
      setPokemon(dataPokemon);
      setLoading(false);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('fetch aborted');
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
    fetchPokemon();
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff0" />
      ) : (
        <View>
          <View style={styles.upContainer}>
            <View style={styles.back}>
              <TouchableOpacity onPress={() => navigation.navigate('Pokemons')}>
                <Image
                  source={require('../assets/patterns/leftArrow.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.containerImageBackground}>
              <ImageBackground style={styles.circle} source={circle}>
                <Image
                  style={styles.imagePokemon}
                  source={{uri: imageUrl}}></Image>
              </ImageBackground>
            </View>
            <View style={styles.pokemonInfoContainer}>
              <Text style={styles.number}>#{details.id}</Text>
              <Text style={styles.name}>{details.name}</Text>
            </View>
          </View>

          <View style={styles.downContainer}>
            <InformationPokemon
              pokemon={pokemon}
              number={number}
              details={details}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Details;
