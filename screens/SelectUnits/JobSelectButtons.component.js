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
import { jobEnum } from '../../constants/synergyData'
import I18n from '../../constants/I18n'

// const mockJob = [
//   { job: 'すべて' },
//   { job: 'ガーディアン' },
//   { job: 'ブラスター' },
//   { job: 'サポーター' },
//   { job: 'ロングショット' },
//   { job: 'シェージェブレーカー' },
//   { job: 'スペシャリスト' },
//   { job: 'アサシン' },
//   { job: 'サモナー' },
//   { job: 'ヴァンガード' }
// ]

const mockJob = [
  { job: 'all' },
  ...Object.keys(jobEnum).map(job => ({
    job: I18n.t(job)
  }))
]

const jobs = ['all', ...Object.keys(jobEnum)]

const SelectJobButtons = P => {
  JobButtons = ({ item, index }) => (
    <TouchableWithoutFeedback onPress={() => P.onPressSelectJobButton(index)}>
      <View
        style={S.jobButtonContainer(index === P.selectedJobButtonsIndex, index)}
      >
        <Text style={S.raceButtonText(index == P.selectedJobButtonsIndex)}>
          {item}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )

  return (
    <FlatList
      data={jobs}
      renderItem={JobButtons}
      contentContainerStyle={S.raceButtonWrapper}
      numColumns={5}
      extraData={P.selectedJobButtonsIndex}
      scrollEnabled={false}
    />
  )
}

const RADIUS = 8

const S = StyleSheet.create({
  raceButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  jobButtonContainer: (isSelected, index) => ({
    width: wp('16%'),
    height: hp('9%'),
    justifyContent: 'center',
    alignItems: 'center',
    // listItemが、上端の時だけ、フチに線を与える。
    borderTopWidth: index < 5 ? 2 : 0,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    // listItemが、左端の時だけ、フチに線を与える。
    borderLeftWidth: index === 0 || index === 5 ? 2 : 0,
    borderColor: 'rgba(0, 0, 0)',
    backgroundColor: isSelected ? primaryColor : 'white',
    // 四隅を、丸める。
    borderTopLeftRadius: index == 0 ? RADIUS : 0,
    borderTopRightRadius: index == 4 ? RADIUS : 0,
    borderBottomLeftRadius: index == 5 ? RADIUS : 0,
    borderBottomRightRadius: index === 9 ? RADIUS : 0
  }),
  raceButtonText: isSelected => ({
    color: isSelected ? 'white' : 'black',
    fontSize: wp('2.2%'),
    letterSpacing: wp('0.15%')
  })
})

export default SelectJobButtons
