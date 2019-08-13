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
    />
  )
}

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
    borderColor: isSelected ? primaryColor : 'black',
    backgroundColor: isSelected ? '#F1EBF7' : 'white'
  }),
  raceButtonText: isSelected => ({
    color: isSelected ? primaryColor : 'black'
  })
})

export default SelectJobButtons
