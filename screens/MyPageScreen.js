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

export default class MyPage extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.comingSoonText}>Coming Soon!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  baseText: {
    fontSize: 20
  },
  comingSoonText: {
    fontSize: 25
  }
})
