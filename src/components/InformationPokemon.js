import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from '../styles/InformationPokemon';
import {text, description} from '../utils/constants/text';

const InformationPokemon = props => {
  const {
    pokemon,
    number,
    details,
  } = props;

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}> 
        <Text style={styles.about}>{pokemon[number].description}</Text>

        <Text style={styles.title}>{description.pokedex}</Text>

        <View style={styles.tableContainer}>
          <View>
            <Text style={styles.titleInfo}>{description.species}</Text>
            <Text style={styles.titleInfo}>{description.height}</Text>
            <Text style={styles.titleInfo}>{description.weight}</Text>
            <Text style={styles.titleInfo}>{description.abilities}</Text>
          </View>
          <View style={styles.secondColumnPokedex}>
            <Text style={styles.descriptionInfo}>
              {pokemon[number].species}
            </Text>
            <Text style={styles.descriptionInfo}>{pokemon[number].height}</Text>
            <Text style={styles.descriptionInfo}>{pokemon[number].weight}</Text>
            <Text style={styles.descriptionInfo}>
              {details.abilities.map((ability, index) => {
                return (
                  <Text key={index} style={styles.textCapitalize}>
                    {ability.ability.name}{' '}
                  </Text>
                );
              })}
            </Text>
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
            <Text style={styles.descriptionInfo}>
              {pokemon[number].training.evYield}
            </Text>
            <Text style={styles.descriptionInfo}>
              {pokemon[number].training.catchRate.value} (
              {pokemon[number].training.catchRate.text})
            </Text>
            <Text style={styles.descriptionInfo}>
              {pokemon[number].training.baseFriendship.value}{' '}
              {pokemon[number].training.baseFriendship.text}
            </Text>
            <Text style={styles.descriptionInfo}>
              {pokemon[number].training.baseExp}
            </Text>
            <Text style={styles.descriptionInfo}>
              {pokemon[number].training.growthRate}
            </Text>
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
              {text.male}
              {pokemon[number].breedings.gender.male}
              {text.percentage}
              {'   '}
              {text.female}
              {pokemon[number].breedings.gender.female}
              {text.percentage}
            </Text>
            <Text style={styles.descriptionInfo}>
              {pokemon[number].breedings.eggGroups.map((eggs, index) => {
                return (
                  <Text key={index} style={styles.textCapitalize}>
                    {eggs}{' '}
                  </Text>
                );
              })}
            </Text>
            <Text style={styles.descriptionInfo}>
              {pokemon[number].breedings.eggCycles.value} ({pokemon[number].breedings.eggCycles.text})
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InformationPokemon;
