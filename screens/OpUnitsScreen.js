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
import {
  primaryColor,
  darkPrimaryColor,
  secondaryColor
} from '../constants/Colors'

const { height, width } = Dimensions.get('window')

export default class OpUnitsScreen extends React.Component {
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

  onPressRecordMatchButton = () => {
    this.props.navigation.navigate('SelectUnitsScreen')
  }

  unitImageListItem = ({ item }) => {
    return (
      <View style={styles.unitImageListItem}>
        <Image
          style={styles.unitImage}
          source={unitImagePathArray[item.unitId - 1]}
        />
        <Text>{item.top3WinRate * 100}%</Text>
      </View>
    )
  }

  render () {
    const { isLoading } = this.state
    if (isLoading) return null
    return (
      <Container style={styles.container}>
        <FlatList
          numColumns={10}
          data={mockData}
          renderItem={this.unitImageListItem}
          // listKey={(item, index) => index.toString()}
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
    // paddingTop: 15,
    backgroundColor: '#eaecef',
    alignItems: 'center',
    paddingHorizontal: '5%'
  },
  screenTitle: {
    backgroundColor: primaryColor,
    justifyContent: 'center',
    width: wp('100%'),
    height: 40
  },
  titleText: {
    marginLeft: wp('10%'),
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white'
  },
  unitImageListItem: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  unitImage: {
    height: wp('9%'),
    width: wp('9%'),
    margin: wp('0.5%')
  },
  starContainer: {
    flexDirection: 'row'
  },
  recordMatchButton: {
    // width: width
    backgroundColor: secondaryColor
  },
  synergyListItem: {
    flexDirection: 'column'
  },
  // matchRecordListItemの合計で、width 80%になるようにする。
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('80%'),
    borderWidth: 1,
    margin: 3,
    padding: 3,
    paddingVertical: 15
  },
  matchRecordListItemLeftPart: {
    // margin: 3,
    width: wp('10%'),
    alignItems: 'center'
    // backgroundColor: 'green'
  },
  matchRecordListItemCenterPart: {
    flexDirection: 'column',
    width: wp('50%')
    // backgroundColor: 'red'
  },
  matchRecordListItemRightPart: {
    width: wp('20%'),
    alignItems: 'center'
    // backgroundColor: 'yellow'
  }
})

const mockData = [
  {
    unitId: 1,
    top3WinRate: 1
  },
  {
    unitId: 2,
    top3WinRate: 1
  },
  {
    unitId: 3,
    top3WinRate: 1
  },
  {
    unitId: 4,
    top3WinRate: 1
  },
  {
    unitId: 5,
    top3WinRate: 0
  },
  {
    unitId: 6,
    top3WinRate: 0
  },
  {
    unitId: 7,
    top3WinRate: 0.9
  },
  {
    unitId: 8,
    top3WinRate: 0.874
  },
  {
    unitId: 9,
    top3WinRate: 0.235
  }
]
