import React from 'react'
import { ScrollView, StyleSheet, View, Text, FlatList, Image } from 'react-native'
import {getMyMatchRecord} from '../fireStore/MatchRecordORM'
import unitData, {unitImagePathArray} from '../constants/UnitData'

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

  matchRecordListItem = ({item}) => {
    const ListItem = ({item}) => {
      return (
        <View>
          <Image source={unitImagePathArray[item.id -1]}/>
          <Text>{JSON.stringify(item)}</Text>
          <Text>{JSON.stringify(item)}</Text>
        </View>
      )
    }
  return (
    <View style={styles.cardContainer}>
      <Text>{item.ranking}位</Text>
      {/* <Text>{JSON.stringify(item.units)}位</Text> */}
      <FlatList
        data={item.units}
        renderItem={({item}) => < ListItem item={item}/>} 
      />
    </View>
  )}

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
  },
  cardContainer: {
    width: '100%',
    borderWidth: 1
  }
})
