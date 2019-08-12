import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { primaryColor } from '../../constants/Colors'

const mockRace = [
  { race: 'すべて' },
  { race: 'ガーディアン' },
  { race: 'ブラスター' },
  { race: 'サポーター' },
  { race: 'ロングショット' },
  { race: 'シェージェブレーカー' },
  { race: 'スペシャリスト' },
  { race: 'アサシン' },
  { race: 'サモナー' },
  { race: 'ヴァンガード' }
]

const SelectRaceButtons = props => {
  RaceButtons = ({ item, index }) => (
    <TouchableWithoutFeedback>
      <View style={S.raceButtonContainer(false, index)}>
        <Text style={S.raceButtonText}>{item.race}</Text>
        <Text>{index}</Text>
      </View>
    </TouchableWithoutFeedback>
  )

  return (
    <View style={S.container}>
      <FlatList
        data={mockRace}
        renderItem={RaceButtons}
        contentContainerStyle={S.raceButtonWrapper}
      />
      <View style={S.lastLineOfList(true)} />
      {/* {[1,2,3,4].map( x => <Text></Text>)} */}
    </View>
  )
}

const S = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    width: wp('15%'),
    height: hp('100%')
  },
  raceButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  raceButtonContainer: (isActive, index) => ({
    width: wp('13%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    // flatListの頭だけ、bordertopWidthを加える。
    borderTopWidth: index === 0 ? 2 : 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: primaryColor,
    backgroundColor: '#F1EBF7'
  }),
  raceButtonText: {
    color: primaryColor
  },
  lastLineOfList: isActive => ({
    borderTopWidth: 2,
    borderColor: primaryColor
  })
})

export default SelectRaceButtons
