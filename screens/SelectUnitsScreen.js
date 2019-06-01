import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native'
import unitData, { unitImagePathArray } from '../constants/UnitData'

export default class SelectUnitsScreen extends React.Component {
  unitListItem = ({ item }) => {
    return (
      <View>
        <Image source={unitImagePathArray[item.id - 1]} />
        <Text>{item.unitName}</Text>
      </View>
    )
  }

  render () {
    return (
      <View>
        <Text>選択してください</Text>
        <FlatList data={unitData} renderItem={this.unitListItem} />
      </View>
    )
  }
}
