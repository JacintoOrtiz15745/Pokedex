import {StyleSheet} from 'react-native';
import {text, typeColors} from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: 80,
    height: 40,
    backgroundColor: typeColors.grass,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'SFProDisplay-Medium',
    fontSize: 20,
    color: text.white,
    textTransform: 'capitalize',
  },
});
