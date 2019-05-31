import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'

const SynergyLevelButton = props => (
  <TouchableHighlight>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>ライダー</Text>
      <Text>lv1</Text>
    </View>
  </TouchableHighlight>
)

export default SynergyLevelButton
