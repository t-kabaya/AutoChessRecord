import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export default class LinksScreen extends React.Component {
  render () {
    return (
      <View>自分の戦績が表示される。ここで、自分のサイカーの勝率とかがわかる。</View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
