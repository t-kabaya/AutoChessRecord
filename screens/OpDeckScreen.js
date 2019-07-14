import React, { useState, useEffect } from 'react'
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
  secondaryColor,
  baseBackgroundColor
} from '../constants/Colors'
import i18n from '../constants/I18n'
import SaveMatchRecordButton from '../components/SaveMatchRecordButton'

const { height, width } = Dimensions.get('window')

const OpDeckFlatListHeader = ({ item }) => (
  <Text style={styles.subTitle}>{i18n.t('top3WinRate')}</Text>
)

const UnitImageListItem = ({ item }) => (
  <View style={styles.unitImageListItem}>
    <Image
      style={styles.unitImage}
      source={unitImagePathArray[item.unitId - 1]}
    />
  </View>
)

const SynergyListItem = ({ item }) => (
  <View style={styles.synergyListItem}>
    {/* <Image
      style={styles.unitImage}
      source={unitImagePathArray[item.unitId - 1]}
    /> */}
    <Text style={styles.synergyListItemText}>
      {i18n.t(item.synergy)} {item.synergyLevel}
    </Text>
  </View>
)

const MatchRecordListItem = item => (
  <Card style={styles.cardContainer}>
    <View style={styles.matchRecordListItemLeftPart}>
      <Text style={{ fontSize: 15 }}>{i18n.t('top3WinRate')}</Text>
      <View style={styles.matchRecordListItemLeftPartRow}>
        <Text style={styles.top3WinRateNumberText}>
          {item.top3WinRateOfDeck}
        </Text>
        <Text style={styles.percentText}>%</Text>
      </View>
    </View>
    <View style={styles.matchRecordListItemCenterPart}>
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
        data={item.synergy}
        renderItem={({ item }) => <SynergyListItem item={item} />}
      />
    </View>
  </Card>
)

/* -------------------- main --------------------- */

const useOpDeckStatus = () => {
  const [isLoading, setIsLoadingAsFalse] = useState(true)
  const [myMatchRecord, setMyMatchRecord] = useState(null)
  useEffect(
    async () => {
      const myMatchRecord = await getMyMatchRecord()
      // isLoadingをfalseに変更
      setIsLoadingAsFalse(false)
      setMyMatchRecord(myMatchRecord)
    },
    // hooksは、renderのたびに呼ばれてしまう。
    //　以下の記述で、一回しか呼ばれないようにする。
    [setMyMatchRecord]
  )

  return { isLoading, myMatchRecord }
}

const onPressRecordMatchButton = props => {
  props.navigation.navigate('SelectUnitsScreen')
}

const OpDeckScreen = props => {
  const { isLoading, myMatchRecord } = useOpDeckStatus()

  if (isLoading) return null
  return (
    <Container style={styles.container}>
      <FlatList
        // ListHeaderComponent={<OpDeckFlatListHeader />}
        data={myMatchRecord}
        renderItem={({ item }) => MatchRecordListItem(item)}
        listKey={(item, index) => index.toString()}
      />
      <SaveMatchRecordButton
        onPressRecordMatchButton={() => onPressRecordMatchButton(props)}
      />
    </Container>
  )
}

export default OpDeckScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    backgroundColor: baseBackgroundColor,
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
    alignItems: 'flex-start',
    padding: wp('0.5%')
  },
  unitImage: {
    height: wp('9%'),
    width: wp('9%')
    // margin: wp('0.5%')
  },
  starContainer: {
    flexDirection: 'row'
  },
  recordMatchButton: {
    // width: width
    backgroundColor: secondaryColor
  },
  synergyListItem: {
    width: wp('15%'),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
    // backgroundColor: 'green'
  },
  // matchRecordListItemの合計で、width 80%になるようにする。
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('90%'),
    borderWidth: 1,
    margin: 3,
    padding: 3,
    paddingVertical: wp('2%')
  },
  matchRecordListItemLeftPart: {
    // margin: 3,
    width: wp('10%'),
    alignItems: 'flex-start'
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
    fontSize: 15
  },
  subTitle: {
    fontSize: 20,
    margin: 2
  },
  percentText: {
    fontSize: 15,
    paddingLeft: wp('1%')
  },
  top3WinRateNumberText: {
    fontSize: 25,
    paddingTop: 5,
    fontWeight: 'bold'
  },
  matchRecordListItemLeftPartRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 10
  }
})
