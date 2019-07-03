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
import {
  getMyMatchRecord,
  getWinRateOfUnits
} from '../fireStore/MatchRecordORM'
import unitData, { unitImagePathArray } from '../constants/UnitData'
import * as Localization from 'expo-localization'
import {
  primaryColor,
  darkPrimaryColor,
  secondaryColor
} from '../constants/Colors'
import SaveMatchRecordButton from '../components/SaveMatchRecordButton'

const { height, width } = Dimensions.get('window')

export default class OpUnitsScreen extends React.Component {
  state = {
    isLoading: true,
    top3WinRateOfUnits: null
  }

  componentDidMount = () => {
    this.setInitialState()
  }

  setInitialState = async () => {
    const top3WinRateOfUnits = await getWinRateOfUnits()
    this.setState({ top3WinRateOfUnits, isLoading: false })
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
        {/* なぜか、34.0002などとなってしまう。workaroundとしてroundを適用 */}
        <Text>{Math.round(item.top3WinRate * 100, 3)}%</Text>
      </View>
    )
  }

  render () {
    const { isLoading, top3WinRateOfUnits } = this.state
    if (isLoading) return null
    return (
      <Container style={styles.container}>
        <View style={{ alignItems: 'center', padding: 5 }}>
          <Text>top3位率</Text>
        </View>
        <FlatList
          numColumns={7}
          data={top3WinRateOfUnits}
          renderItem={this.unitImageListItem}
          // listKey={(item, index) => index.toString()}
        />
        <SaveMatchRecordButton
          onPressRecordMatchButton={this.onPressRecordMatchButton}
        />
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
    alignItems: 'center',
    padding: 5
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
