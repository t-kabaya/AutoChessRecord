import React from 'react'
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Button, Text, Card, Container } from 'native-base'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { getMyMatchRecord } from '../fireStore/MatchRecordORM'
import unitData, { unitImagePathArray } from '../constants/UnitData'
import * as Localization from 'expo-localization'

const { height, width } = Dimensions.get('window')

const UnitImageListItem = ({ item }) => {
  return (
    <View style={styles.unitImageListItem}>
      <Image
        style={styles.unitImage}
        source={unitImagePathArray[item.unitId - 1]}
      />
    </View>
  )
}

const SynergyListItem = ({ item }) => (
  <View style={styles.synergyListItem}>
    {/* <Image
      style={styles.unitImage}
      source={unitImagePathArray[item.unitId - 1]}
    /> */}
    <Text>
      {item.synergy}
      {item.synergyLevel}
    </Text>
  </View>
)

export default class OpDeckScreen extends React.Component {
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
        <View style={{ margin: 3 }}>
          <Text>TOP3率</Text>
          <Text style={{ fontSize: 20, paddingTop: 5 }}>50%</Text>
        </View>
        {/* <Text>使用率</Text> */}
        {/* <Text>{JSON.stringify(item.units)}位</Text> */}
        <View style={{ flexDirection: 'column' }}>
          {/* <FlatList
            // horizontal
            // numColumns={2}
            contentContainerStyle={{ flexDirection: 'column' }}
            data={item.units}
            renderItem={({ item }) => <UnitImageListItem item={item} />}
          /> */}
          <View style={{ flexDirection: 'row' }}>
            {item.units.slice(0, 5).map(item => (
              <UnitImageListItem item={item} />
            ))}
          </View>
          <View style={{ flexDirection: 'row' }}>
            {item.units.slice(5, 10).map(item => (
              <UnitImageListItem item={item} />
            ))}
          </View>
        </View>
        <View>
          <FlatList
            // data={item.synergy}
            data={[
              { synergy: 'メカ', synergyLevel: 2 },
              { synergy: 'ブラスター', synergyLevel: 3 }
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
      <Container style={styles.container}>
        <Text style={styles.titleText}>勝率の高いデッキ</Text>

        {/* <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1 }}>勝率</Text>
          <Text style={{ flex: 1 }}>ユニット</Text>
          <Text style={{ flex: 1 }}>シナジー</Text>
        </View> */}
        <FlatList
          // numColumns={2}
          data={myMatchRecord}
          renderItem={this.matchRecordListItem}
          listKey={(item, index) => index.toString()}
        />

        <Button
          block
          onPress={this.onPressRecordMatchButton}
          style={styles.recordMatchButton}
        >
          <Text>戦績を記録</Text>
        </Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#eaecef',
    alignItems: 'center',
    paddingHorizontal: '5%'
  },
  titleText: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('80%'),
    borderWidth: 1,
    margin: 3,
    padding: 3,
    paddingVertical: 15
  },
  unitImageListItem: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  unitImage: {
    height: 60,
    width: 60,
    margin: 5
  },
  starContainer: {
    flexDirection: 'row'
  },
  recordMatchButton: {
    // width: width
  },
  synergyListItem: {
    flexDirection: 'column'
  }
})
