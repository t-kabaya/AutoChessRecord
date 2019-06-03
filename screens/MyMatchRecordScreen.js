import React from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native'
import {getMyMatchRecord} from '../fireStore/MatchRecordORM'

export default class MyMatchRecordScreen extends React.Component {
  state={
    isLoading: true,
    myMatchRecord: null
  }

  componentDidMount = () => {
    this.setInitialState()
  }
  
  setInitialState = async() => {
    const myMatchRecord = await getMyMatchRecord()
    this.setState({myMatchRecord, isLoading: false})
  }

  matchRecordListItem = ({item}) => (
    <View>
      <Text>{item.ranking}位</Text>
    </View>
  )

  render () {
    const {myMatchRecord} = this.state
    if (this.state.isLoading) return null
    console.log({myMatchRecord})
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>私の戦績</Text>
        <FlatList
          data={myMatchRecord}
          renderItem={this.matchRecordListItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20
  }
})
