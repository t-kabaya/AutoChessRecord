import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import {getMyMatchRecord} from '../fireStore/MatchRecordORM'

export default class LinksScreen extends React.Component {
  componentDidMount = () => {
    getMyMatchRecord()
  }

  render () {
    return (
      <View>
        <Text>AAAA</Text>
      </View>
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
