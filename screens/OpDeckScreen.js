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
import i18n from '../constants/I18n'
import SaveMatchButton from '../components/SaveMatchButton'

const { height, width } = Dimensions.get('window')

const OpDeckFlatListHeader = ({ item }) => <Text>{i18n.t('top3WinRate')}</Text>

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
    <Text style={styles.synergyListItemText}>
      {item.synergy} {item.synergyLevel}
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
        <View style={styles.matchRecordListItemLeftPart}>
          <Text>TOP3率</Text>
          <Text style={{ fontSize: 20, paddingTop: 5 }}>50%</Text>
        </View>
        {/* <Text>使用率</Text> */}
        {/* <Text>{JSON.stringify(item.units)}位</Text> */}
        <View style={styles.matchRecordListItemCenterPart}>
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
        <View style={styles.matchRecordListItemRightPart}>
          <FlatList
            // data={item.synergy}
            data={item.synergy}
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
        <FlatList
          ListHeaderComponent={<OpDeckFlatListHeader />}
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
        <SaveMatchButton />
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
    alignItems: 'flex-start'
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
  },
  synergyListItemText: {
    fontSize: 20
  }
})
