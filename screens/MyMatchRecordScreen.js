import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { getMyMatchRecord } from '../fireStore/MatchRecordORM'
import unitData, { unitImagePathArray } from '../constants/UnitData'

const UnitImageListItem = ({ item }) => {
  return (
    <View style={styles.unitImageListItem}>
      <Image
        style={styles.unitImage}
        source={unitImagePathArray[item.unitId - 1]}
      />
      <Text>{JSON.stringify(item.level)}</Text>
      <View style={styles.starContainer}>
        {[...Array(item.level)].map(level => (
          <Ionicons name='ios-star' size={12} color='#FBC02D' />
        ))}
      </View>
    </View>
  )
}

export default class MyMatchRecordScreen extends React.Component {
  state = {
    isLoading: true,
    myMatchRecord: null
  }

  componentDidMount = () => {
    this.setInitialState()
  }

  setInitialState = async () => {
    const myMatchRecord = await getMyMatchRecord()
    this.setState({ myMatchRecord, isLoading: false })
  }

  matchRecordListItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Text>{item.ranking}位</Text>
        {/* <Text>{JSON.stringify(item.units)}位</Text> */}
        <FlatList
          horizontal
          data={item.units}
          renderItem={({ item }) => <UnitImageListItem item={item} />}
        />
      </View>
    )
  }

  render () {
    const { myMatchRecord } = this.state
    if (this.state.isLoading) return null
    console.log({ myMatchRecord })
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>私の戦績</Text>
        <FlatList data={myMatchRecord} renderItem={this.matchRecordListItem} />
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
  },
  unitImageListItem: {},
  unitImage: {
    height: 50,
    width: 50
  },
  starContainer: {
    flexDirection: 'row'
  }
})
