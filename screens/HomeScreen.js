import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import SynergyLevelButtonGroup, {
  PlayerLevelButtonGroup,
  RankingButtonGroup
} from '../components/SynegyLevelButton'

export default class HomeScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: new Set([1, 2])
    }
  }

  updateIndex = selectedIndex => {
    if (this.state.selectedIndex.has(selectedIndex)) {
      // alert('exist vaule')

      this.state.selectedIndex.delete(selectedIndex)
    }
    alert(selectedIndex)
    // this.setState({ selectedIndex })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>発動したシナジー</Text>
        <SynergyLevelButtonGroup />
        <Text>プレイヤーのレベル</Text>
        <PlayerLevelButtonGroup />

        <Text style={styles.baseText}>選択したユニット</Text>

        <Text style={styles.baseText}>順位</Text>
        <RankingButtonGroup />

        <Text style={styles.baseText}>決定</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  baseText: {
    fontSize: 20
  }
})
