import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItem/CarItem';
import styles from './CarlistStyles';
import cars from './cars';

const carsList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={cars}
        renderItem={({item}) => <CarItem car={item}/>}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default carsList