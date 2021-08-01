import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Text,
} from 'react-native';
import PokemonItem from '../components/PokemonItem';
import {styles} from '../styles/Pokemons';
import {text} from '../utils/constants/text';

export default ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    const aborCont = new AbortController();
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=30',
        {signal: aborCont.signal},
      );
      const data = await response.json();
      setPokemons(data.results);
      setLoading(false);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('fetch aborted');
      } else {
        console.log(error);
      }
    }
    return () => aborCont.abort();
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.titlePokedex}>{text.pokedex}</Text>

      <View>
        {loading ? (
          <ActivityIndicator size="large" color="#00ff0" />
        ) : (
          <FlatList
            style={styles.list}
            data={pokemons}
            keyExtractor={pokemon => pokemon.name}
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <PokemonItem
                onPress={() => navigation.navigate('Details', item.url)}
                name={item.name}
                url={item.url}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
