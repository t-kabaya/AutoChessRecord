import React from 'react'
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'

const mockData = [
  { race: 'ライダ-', level: 1 },
  { race: 'サイカ-', level: 2 },
  { race: 'ビースト', level: 1 }
]

const SynergyLevelButton = ({ item }) => {
  return (
    <TouchableHighlight>
      <View style={styles.container}>
        <Text>{item.race}</Text>
        <Text>lv{item.level}</Text>
      </View>
    </TouchableHighlight>
  )
}

const SynergyLevelButtonGroup = () => (
  <FlatList
    data={mockData}
    contentContainerStyle={styles.flatListContainer}
    renderItem={SynergyLevelButton}
  />
)

const playerLevelMockData = [5, 6, 7, 8, 9, 10]

const PlayerLevelButton = ({ item }) => (
  <TouchableHighlight>
    <View style={styles.container}>
      <Text>lv{item}</Text>
    </View>
  </TouchableHighlight>
)

export const PlayerLevelButtonGroup = () => (
  <FlatList
    data={playerLevelMockData}
    contentContainerStyle={styles.flatListContainer}
    renderItem={PlayerLevelButton}
  />
)

export default SynergyLevelButtonGroup

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatListContainer: {
    flexDirection: 'row'
  }
})
