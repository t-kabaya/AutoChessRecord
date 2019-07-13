import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { BackGround } from '../constants/Colors'

// import View from '../utils/cView'

const mockData = [
  {
    synergy: '海兵',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  },
  {
    synergy: '海兵',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  },
  {
    synergy: '海兵',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  },
  {
    synergy: '海兵',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  },
  {
    synergy: '海兵',
    myAverageRankOfSynergy: 2.3,
    allUserAverageRankOfSynergy: 3.5,
    totalPlayCount: 10
  }
]

const MyPageScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.comingSoonText}>よく使うシナジー</Text>
      <FlatList
        data={mockData}
        contentContainerStyle={styles.synergyTableWrapper}
        renderItem={({ item }) => (
          <View style={styles.synergyTableListItem}>
            <View style={styles.synergyTableListItemSynergyWrapper}>
              <Text>{item.synergy}</Text>
            </View>
            <View style={styles.myAverageRankWrapper}>
              <Text>{item.myAverageRankOfSynergy}</Text>
            </View>
            <View style={styles.allUserAverageRankOfSynergy}>
              <Text>{item.allUserAverageRankOfSynergy}</Text>
            </View>
            <View style={styles.totalPlayCountWrapper}>
              <Text>{item.totalPlayCount}</Text>
            </View>
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.synergyTableListItem}>
            <View style={styles.synergyTableListItemSynergyWrapper}>
              <Text>シナジー</Text>
            </View>
            <View style={styles.myAverageRankWrapper}>
              <Text>あなたの平均（位）</Text>
            </View>
            <View style={styles.allUserAverageRankOfSynergy}>
              <Text>全体の平均順位（位）</Text>
            </View>
            <View style={styles.totalPlayCountWrapper}>
              <Text>使用数（回）</Text>
            </View>
          </View>
        }
      />
    </View>
  )
}

const baseStyles = StyleSheet.create({
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('20%'),
    borderLeftWidth: 1,
    borderTopWidth: 1
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackGround
  },
  synergyTableWrapper: {
    borderBottomWidth: 1,
    borderRightWidth: 1
  },
  baseText: {
    fontSize: 20
  },
  comingSoonText: {
    fontSize: 25
  },
  synergyTableListItem: {
    flexDirection: 'row',
    height: 40
  },
  synergyTableListItemSynergyWrapper: {
    ...baseStyles.cell
  },
  myAverageRankWrapper: {
    ...baseStyles.cell
  },
  allUserAverageRankOfSynergy: {
    ...baseStyles.cell
  },
  totalPlayCountWrapper: {
    ...baseStyles.cell
  },
  listHeaderWrapper: {
    flexDirection: 'row'
  }
})

export default MyPageScreen
