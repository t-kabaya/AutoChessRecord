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

const SelectJobButtons = props => {
  JobButtons = ({ item, index }) => (
    <TouchableWithoutFeedback>
      <View style={S.jobButtonContainer(true, index)}>
        <Text style={S.raceButtonText(true)}>{item.race}</Text>
      </View>
    </TouchableWithoutFeedback>
  )

  return (
    // <View style={S.container}>
    <FlatList
      data={mockRace}
      renderItem={JobButtons}
      contentContainerStyle={S.raceButtonWrapper}
      numColumns={5}
    />
    // </View>
  )
}

const S = StyleSheet.create({
  raceButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  jobButtonContainer: (isActive, index) => ({
    width: wp('16%'),
    height: hp('9%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    // listItemが、上端の時だけ、フチに線を与える。
    borderTopWidth: index < 5 ? 2 : 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    // listItemが、左端の時だけ、フチに線を与える。
    borderLeftWidth: index === 0 || index === 5 ? 2 : 0,
    borderColor: primaryColor,
    backgroundColor: '#F1EBF7'
  }),
  raceButtonText: isSelected => ({
    color: isSelected ? primaryColor : 'black'
  })
})

export default SelectJobButtons
