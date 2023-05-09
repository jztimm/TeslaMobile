import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Button from '../StyledButton/Button'
import styles from './styles'

const Cars = () => {
  return (
    <View style={styles.carContainer}>
        <ImageBackground
          source={require('../../assets/images/ModelX.jpeg')}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at %69,420</Text>
        </View>

        <Button
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn('Custom Order button clicked')
          }}
        />

        <Button
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn('Existing Inventory button clicked')
          }}
        />

      </View>
  )
}

export default Cars