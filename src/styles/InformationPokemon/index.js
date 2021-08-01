import {StyleSheet} from 'react-native';
import {text} from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    width: '85%',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  about: {
    fontSize: 17,
    fontFamily: 'SFProDisplay-Regular',
    color: text.grey,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFProDisplay-Bold',
    color: text.green,
    marginBottom: 22,
  },
  titleInfo: {
    fontSize: 14,
    fontFamily: 'SFProDisplay-Medium',
    color: text.black,
    marginBottom: 22,
    height: 28,
  },
  descriptionInfo: {
    fontSize: 16,
    fontFamily: 'SFProDisplay-Regular',
    color: text.grey,
    marginBottom: 22,
    height: 28,
  },
  tableContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  secondColumnPokedex: {
    marginLeft: '20%',
  },
  trainigContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  secondColumnTraining: {
    marginLeft: '5%',
  },
  secondColumnBreeding: {
    marginLeft: '12%',
  },
  
  textCapitalize: {
    textTransform: 'capitalize',
  },
});
