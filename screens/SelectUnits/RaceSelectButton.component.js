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

const SelectRaceButtons = P => {
  RaceButtons = ({ item, index }) => (
    <TouchableWithoutFeedback onPress={() => P.onPressSelectRaceButton(index)}>
      <View
        style={S.raceButtonContainer(
          index === P.selectedRaceButtonsIndex,
          index,
          P.raceNameList.length
        )}
      >
        <Text style={S.raceButtonText(index === P.selectedRaceButtonsIndex)}>
          {item}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )

  return (
    <View style={S.container}>
      <FlatList
        data={P.raceNameList}
        renderItem={RaceButtons}
        contentContainerStyle={S.raceButtonWrapper}
        extraData={P}
      />
    </View>
  )
}

const RADIUS = 8

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
  raceButtonContainer: (isSelected, index, listLength) => ({
    width: wp('13%'),
    height: hp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    // flatListの頭だけ、bordertopWidthを加える。
    borderTopWidth: index === 0 ? 2 : 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: isSelected ? primaryColor : 'black',
    backgroundColor: isSelected ? primaryColor : 'transparent',
    borderTopLeftRadius: index === 0 ? RADIUS : 0,
    borderTopRightRadius: index === 0 ? RADIUS : 0,
    borderBottomLeftRadius: index === listLength - 1 ? RADIUS : 0,
    borderBottomRightRadius: index === listLength - 1 ? RADIUS : 0
  }),
  raceButtonText: isSelected => ({
    color: isSelected ? 'white' : 'black',
    fontSize: wp('2.2%'),
    letterSpacing: wp('0.15%')
  })
})

export default SelectRaceButtons
