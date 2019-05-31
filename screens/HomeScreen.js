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
import SynergyLevelButton from '../components/SynegyLevelButton'

export default class HomeScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedIndex: new Set([1, 2])
    }
  }

  updateIndex = selectedIndex => {
    if (this.state.selectedIndex.has(selectedIndex)) {
      alert('exist vaule')

      this.state.selectedIndex.delete(selectedIndex)
    }
    alert(selectedIndex)
    // this.setState({ selectedIndex })
  }

  render () {
    return (
      <View>
        <Text>発動したシナジー</Text>
        <SynergyLevelButton />
      </View>
    )
  }
}
