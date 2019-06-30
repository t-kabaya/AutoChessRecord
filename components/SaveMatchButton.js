import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import { secondaryColor } from '../constants/Colors'

export default class saveMatchButton extends React.Component {
  render () {
    return (
      <View>
        <Button mode='contained' style={styles.buttonContainer}>
          <Text style={styles.buttonText}>+</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: secondaryColor,
    borderRadius: 50,
    height: 50,
    width: 50
  },
  buttonText: {
    fontSize: 30
  }
})
