import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native'
import Layout from '../constants/Layout'
import unitData, { unitImagePathArray } from '../constants/UnitData'
import {Badge} from 'native-base'

// unitの重複は考えない

export default class SelectUnitsScreen extends React.Component {
  state = {
    unitState: unitData.map(data => ({...data, level: 0}))
  }

  unitListItem = ({ item }) => {
    return (
      <View style={styles.unitListItemContainer}>
        <Badge><Text>Lv{item.level}</Text></Badge>
        <Image resizeMode='contain' style={styles.unitListItemImage} source={unitImagePathArray[item.id - 1]} />
        <Text>{item.unitName}</Text>
      </View>
    )
  }

  render () {
    const {unitState} = this.state
    return (
      <View>
        <Text>選択してください</Text>
        <FlatList numColumns={4} data={unitState} renderItem={this.unitListItem} />

        {/* <FlatList numColumns={4} data={unitData} renderItem={this.unitListItem} /> */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  unitListItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Layout.window.width / 4,
  },
  unitListItemImage: {
    width: Layout.window.width / 5,
    height: Layout.window.width / 5,
    borderWidth: 5,
    borderColor: '#ffe084'
  }
})