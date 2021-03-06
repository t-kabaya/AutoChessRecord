import React from 'react'
import { ScrollView, StyleSheet, View, FlatList, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Button, Text, Card } from 'native-base'
import { getMyMatchRecord } from '../fireStore/MatchRecordORM'
import unitData, { unitImagePathArray } from '../constants/UnitData'
import * as Localization from 'expo-localization'
import SaveMatchRecordButton from '../components/SaveMatchRecordButton'

const UnitImageListItem = ({ item }) => {
  return (
    <View style={styles.unitImageListItem}>
      <Image
        style={styles.unitImage}
        source={unitImagePathArray[item.unitId - 1]}
      />
      <Text>{unitData[item.unitId - 1].unitName}</Text>
      <Text>{item.level}</Text>
      <View style={styles.starContainer}>
        {[...Array(item.level)].map(level => (
          <Ionicons name='ios-star' size={12} color='#FBC02D' />
        ))}
      </View>
    </View>
  )
}

const SynergyListItem = ({ item }) => (
  <View style={styles.unitImageListItem}>
    {/* <Image
      style={styles.unitImage}
      source={unitImagePathArray[item.unitId - 1]}
    /> */}
    <Text>{item.synergy}</Text>
  </View>
)

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
      <Card style={styles.cardContainer}>
        <Text>{item.ranking}位</Text>
        {/* <Text>{JSON.stringify(item.units)}位</Text> */}
        <FlatList
          horizontal
          data={item.units}
          renderItem={({ item }) => <UnitImageListItem item={item} />}
        />
        <View>
          <FlatList
            horizontal
            // data={item.synergy}
            data={[
              { synergy: 'mech', synergyLevel: 1 },
              { synergy: 'blaster', synergyLevel: 2 }
            ]}
            renderItem={({ item }) => <SynergyListItem item={item} />}
          />
        </View>
      </Card>
    )
  }

  onPressRecordMatchButton = () => {
    this.props.navigation.navigate('SelectUnitsScreen')
  }

  render () {
    const { isLoading, myMatchRecord } = this.state
    if (isLoading) return null
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>私の戦績</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>順位</Text>
          <Text style={{ flex: 1 }}>ユニット</Text>
          <Text style={{ flex: 1 }}>シナジー</Text>
        </View>
        <FlatList data={myMatchRecord} renderItem={this.matchRecordListItem} />
        <SaveMatchRecordButton
          onPressRecordMatchButton={this.onPressRecordMatchButton}
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
    alignItems: 'center',
    paddingHorizontal: '10%'
  },
  titleText: {
    fontSize: 20
  },
  cardContainer: {
    flexDirection: 'row',
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
  },
  recordMatchButton: {
    // width: width
  }
})
