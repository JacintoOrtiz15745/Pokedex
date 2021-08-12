import {StyleSheet} from 'react-native';
import {text, pokemonColor} from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  upContainer: {
    height: '40%',
    width: '100%',
    backgroundColor: pokemonColor.grass,
  },
  pokemonInfoContainer: {
    position: 'absolute',
    marginTop: '30%',
    marginLeft: '50%',
  },
  number: {
    fontSize: 20,
    fontFamily: 'SFProDisplay-Medium',
    fontWeight: 'bold',
    color: text.grey,
  },
  name: {
    fontSize: 32,
    fontFamily: 'SFProDisplay-Medium',
    fontWeight: 'bold',
    color: text.white,
    textTransform: 'capitalize',
  },
  downContainer: {
    height: '60%',
    width: '100%',
  },
  back: {
    position: 'absolute',
    padding: 35,
  },
  iconBack:{
    height: 21,
    width: 21,
  },
  containerImageBackground: {
    position: 'absolute',
    marginLeft: 40,
    marginTop: 95,
  },
  circle: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePokemon: {
    height: 120,
    width: 120,
  },
  scrollContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'red',
  },
});
