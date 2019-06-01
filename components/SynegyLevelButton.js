import React from 'react'
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native'
import { Button } from 'native-base'

const mockData = [
  { race: 'ライダ-', level: 1 },
  { race: 'サイカ-', level: 2 },
  { race: 'ビースト', level: 1 }
]

const BaseButton = props => {
  return (
    <Button style={{ borderRadius: 0, backgroundColor: props.color }}>
      {props.children}
    </Button>
  )
}

const SynergyLevelButton = ({ item }) => {
  return (
    <BaseButton color='gray'>
      <View style={styles.container}>
        <Text>{item.race}</Text>
        <Text>lv{item.level}</Text>
      </View>
    </BaseButton>
  )
}

// 二回タップすると、lv3に。 レベルに応じて色が変わる。
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

const RankingButton = ({ item }) => (
  <BaseButton color='gray'>
    <View style={styles.container}>
      <Text>{item}位</Text>
    </View>
  </BaseButton>
)

export const RankingButtonGroup = () => (
  <FlatList
    data={[1, 2, 3, 4.5, 6, 7, 8]}
    contentContainerStyle={styles.flatListContainer}
    renderItem={RankingButton}
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
