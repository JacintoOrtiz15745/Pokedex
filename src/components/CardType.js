import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../styles/CardType';

const CardType = props => {
  const {type} = props;
  return (
    <View style={styles.mainContainer}>
      {/* <Image resizeMode='contain' source=''/> */}
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

export default CardType;
