import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from '../styles/InformationPokemon';
import {text,description} from '../utils/constants/text';

const InformationPokemon = props => {
  const {
    name,
    number,
    type,
    about,
    species,
    height,
    weight,
    abilities,
    evYield,
    catchRateValue,
    catchRateText,
    baseFriendshipValue,
    baseFriendshipText,
    baseExp,
    growthRate,
    genderMale,
    genderFemale,
    eggGroup,
    eggCycles,
    eggCyclesSteps,
  } = props;

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.about}>{about}</Text>

        <Text style={styles.title}>{description.pokedex}</Text>

        <View style={styles.tableContainer}>
          <View>
            <Text style={styles.titleInfo}>{description.species}</Text>
            <Text style={styles.titleInfo}>{description.height}</Text>
            <Text style={styles.titleInfo}>{description.weight}</Text>
            <Text style={styles.titleInfo}>{description.abilities}</Text>
          </View>
          <View style={styles.secondColumnPokedex}>
            <Text style={styles.descriptionInfo}>{species}</Text>
            <Text style={styles.descriptionInfo}>{height}</Text>
            <Text style={styles.descriptionInfo}>{weight}</Text>
            <Text style={styles.descriptionInfo}>{abilities}</Text>
          </View>
        </View>

        <Text style={styles.title}>{description.training}</Text>

        <View style={styles.trainigContainer}>
          <View>
            <Text style={styles.titleInfo}>{description.evYiel}</Text>
            <Text style={styles.titleInfo}>{description.catchRate}</Text>
            <Text style={styles.titleInfo}>{description.baseFriendship}</Text>
            <Text style={styles.titleInfo}>{description.baseExperience}</Text>
            <Text style={styles.titleInfo}>{description.growthRate}</Text>
          </View>
          <View style={styles.secondColumnTraining}>
            <Text style={styles.descriptionInfo}>{evYield}</Text>
            <Text style={styles.descriptionInfo}>
              {catchRateValue} ({catchRateText})
            </Text>
            <Text style={styles.descriptionInfo}>
              {baseFriendshipValue} {baseFriendshipText}
            </Text>
            <Text style={styles.descriptionInfo}>{baseExp}</Text>
            <Text style={styles.descriptionInfo}>{growthRate}</Text>
          </View>
        </View>

        <Text style={styles.title}>{description.breeding}</Text>

        <View style={styles.tableContainer}>
          <View>
            <Text style={styles.titleInfo}>{description.gender}</Text>
            <Text style={styles.titleInfo}>{description.eggGroups}</Text>
            <Text style={styles.titleInfo}>{description.eggCycles}</Text>
          </View>
          <View style={styles.secondColumnBreeding}>
            <Text style={styles.descriptionInfo}>
              {text.male}{genderMale}{text.percentage}{'   '}{text.female}{genderFemale}{text.percentage} 
            </Text>
            <Text style={styles.descriptionInfo}>{eggGroup}</Text>
            <Text style={styles.descriptionInfo}>
              {eggCycles} ({eggCyclesSteps})
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InformationPokemon;
