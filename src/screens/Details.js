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
  const url = route.params;
  const [details, setDetails] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokemonDetails = async () => {
    let controller = new AbortController();
    try {
      const response = await fetch(url, {
        signal: controller.signal,
      });
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
    return () => controller?.abort();
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemon = async () => {
    let controller = new AbortController();
    try {
      const responsePokemon = await fetch(
        'https://pokemon-db-json.herokuapp.com/',
        {
          signal: controller.signal,
        },
      );
      const dataPokemon = await responsePokemon.json();
      setPokemon(dataPokemon);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    return () => controller?.abort();
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const imageUrl =
    'https://pokeres.bastionbot.org/images/pokemon/' + details.id + '.png';

  const circle = require('../assets/patterns/circle.png');
  let number = 1;

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
              about={pokemon[number].description}
              description={pokemon[number].description}
              species={pokemon[number].species}
              height={pokemon[number].height}
              weight={pokemon[number].weight}
              abilities={details.abilities.map((ability, index) => {
                return (
                  <Text key={index} style={styles.textCapitalize}>
                    {ability.ability.name}{' '}
                  </Text>
                );
              })}
              evYield={pokemon[number].training.evYield}
              catchRateValue={pokemon[number].training.catchRate.value}
              catchRateText={pokemon[number].training.catchRate.text}
              baseFriendshipValue={
                pokemon[number].training.baseFriendship.value
              }
              baseFriendshipText={pokemon[number].training.baseFriendship.text}
              baseExp={pokemon[number].training.baseExp}
              growthRate={pokemon[number].training.growthRate}
              genderMale={pokemon[number].breedings.gender.male}
              genderFemale={pokemon[number].breedings.gender.female}
              eggGroup={pokemon[number].breedings.eggGroups.map(
                (eggs, index) => {
                  return (
                    <Text key={index} style={styles.textCapitalize}>
                      {eggs}{' '}
                    </Text>
                  );
                },
              )}
              eggCycles={pokemon[number].breedings.eggCycles.value}
              eggCyclesSteps={pokemon[number].breedings.eggCycles.text}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Details;
