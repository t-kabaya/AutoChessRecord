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
  JobButtons = ({ item }) => (
    <TouchableWithoutFeedback>
      <View style={S.raceButtonContainer}>
        <Text>{item.race}</Text>
      </View>
    </TouchableWithoutFeedback>
  )

  return (
    <View style={S.container}>
      <FlatList
        data={mockRace}
        renderItem={JobButtons}
        contentContainerStyle={S.raceButtonWrapper}
        numColumns={5}
      />
      {/* {[1,2,3,4].map( x => <Text></Text>)} */}
    </View>
  )
}

const S = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: wp('90%'),
    height: hp('10%')
  },
  raceButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  raceButtonContainer: {
    width: wp('16%'),
    height: hp('7%')
  }
})

export default SelectJobButtons
