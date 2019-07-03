import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text } from 'native-base'
import { secondaryColor } from '../constants/Colors'
import I18n, { en } from '../constants/I18n'

const SaveMatchRecordButton = props => (
  <Button
    block
    onPress={props.onPressRecordMatchButton}
    style={styles.recordMatchButton}
  >
    <Text>{I18n.t('saveMatchRecordButtonText')}</Text>
  </Button>
)

const styles = StyleSheet.create({
  recordMatchButton: {
    backgroundColor: secondaryColor
  }
})

export default SaveMatchRecordButton
