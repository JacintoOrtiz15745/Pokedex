import {StyleSheet} from 'react-native';
import {text, pokemonColor} from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonsContainer: {
    width: '85%',
    height: 115,
    backgroundColor: pokemonColor.grass,
    borderRadius: 12,
  },
  imageBackground: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  infoPokemon: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  numberPokemonText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 14,
    color: text.grey,
  },
  namePokemonText: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 26,
    color: text.white,
    textTransform: 'capitalize',
  },
  imagePokemon: {
    width: 130,
    height: 130,
    position: 'absolute',
    left: '60%',
    bottom: '10%',
  },
});
