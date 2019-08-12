import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  SafeAreaView,
  Alert
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons'
import Toast from 'react-native-root-toast'
import Layout from '../../constants/Layout'
import Colors, { baseBackgroundColor } from '../../constants/Colors'
import unitData, { unitImagePathArray } from '../../constants/UnitData'
import { Badge, Button, Text, Container } from 'native-base'
import { saveMatchRecordToFireStore } from './FireStore'
import {
  primaryColor,
  darkPrimaryColor,
  secondaryColor
} from '../../constants/Colors'
import I18n from '../../constants/I18n'
import {
  showSaveSuccessToast,
  showInvalidRankToast
} from '../Common/Component/OnPressSaveToast'
import RaceSelectButton from './RaceSelectButton.component'
import JobSelectButtons from './JobSelectButtons.component'

const SelectedUnitListItem = ({ item, onPressUnitListItem }) => {
  let levelStar = []
  for (i = 0; i < item.level; i++) {
    levelStar.push(<Ionicons name='md-star' size={13} color='orange' />)
  }
  return (
    <TouchableWithoutFeedback onPress={() => onPressUnitListItem(item)}>
      <View style={S.selectedUnitListItemContainer}>
        <View style={S.selectedUnitListItemStarContainer}>{levelStar}</View>
        <Image
          resizeMode='contain'
          style={S.selectedUnitListItemImage}
          source={unitImagePathArray[item.unitId - 1]}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

// unitの重複は考えない

export default class SelectUnitsScreen extends React.Component {
  state = {
    unitState: unitData.map(data => ({ ...data, level: 0 })),
    ranking: null
  }

  onPressUnitListItem = item => {
    const unitState = this.state.unitState.map(unit => {
      if (unit.unitId === item.unitId) {
        return { ...unit, level: (unit.level + 1) % 4 }
      } else {
        return unit
      }
    })
    this.setState({ unitState })
  }

  unitListItem = ({ item }) => {
    let levelStar = []
    for (i = 0; i < item.level; i++) {
      levelStar.push(<Ionicons name='md-star' size={18} color='orange' />)
    }
    return (
      <TouchableWithoutFeedback onPress={() => this.onPressUnitListItem(item)}>
        <View style={S.unitListItemContainer}>
          <View style={S.selectedUnitListItemStarContainer}>{levelStar}</View>
          <Image
            resizeMode='contain'
            style={S.unitListItemImage}
            source={unitImagePathArray[item.unitId - 1]}
          />
          <Text numberOfLines={2}>{I18n.t(item.unitName)}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  rankingItem = ({ item }) => {
    const isSelected = item === this.state.ranking
    return (
      <Button
        onPress={() => this.onPressRankingItem(item)}
        style={S.rankingButton(isSelected)}
      >
        <Text style={S.rankingButtonText}>{item}位</Text>
      </Button>
    )
  }

  onPressRankingItem = item => {
    this.setState({ ranking: item })
  }

  onPressDecision = unitState => {
    // 無効な、rankの時はreturn
    if (!this.state.ranking) {
      showInvalidRankToast()

      return
    }

    saveMatchRecordToFireStore(unitState, this.state.ranking)
    showSaveSuccessToast()
    // stateをリセット
    this.setState({
      unitState: unitData.map(data => ({ ...data, level: 0 })),
      ranking: null
    })
  }

  onPressGoBackButton = () => this.props.navigation.goBack()

  render () {
    const { unitState } = this.state
    const selectedUnits = unitState.filter(unit => !(unit.level === 0))
    return (
      <SafeAreaView>
        <View style={S.topButtonContainer}>
          <Button style={S.goBackButton} onPress={this.onPressGoBackButton}>
            <Text style={S.doneSelectButtonText}>
              {I18n.t('backButtonText')}
            </Text>
          </Button>
          <Button
            style={S.decisionButton}
            onPress={() => this.onPressDecision(unitState)}
          >
            <Text style={S.doneSelectButtonText}>
              {I18n.t('saveButtonText')}
            </Text>
          </Button>
        </View>

        <View style={S.raceSelectButtonsContainer}>
          <RaceSelectButton />
        </View>

        <View style={S.jobSelectButtonsContainer}>
          <JobSelectButtons />
        </View>

        <View style={S.unitsListContainer}>
          <FlatList
            style={S.unitListContainer}
            numColumns={7}
            data={unitState}
            renderItem={this.unitListItem}
            keyExtractor={item => item.unitId}
          />
        </View>
        <View style={S.selectedUnitsContainer}>
          <Text style={S.text}>{selectedUnits.length}</Text>
          <FlatList
            inverted
            horizontal
            data={selectedUnits}
            renderItem={({ item }) => (
              <SelectedUnitListItem
                item={item}
                onPressUnitListItem={this.onPressUnitListItem}
              />
            )}
            keyExtractor={item => item.unitId}
          />
        </View>

        <View style={S.rankingContainer}>
          {/* <Text style={S.text}>順位</Text> */}
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={S.rankingContentContainer}
            numColumns={8}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={this.rankingItem}
            keyExtractor={item => item}
          />
        </View>
        {/* </View> */}
      </SafeAreaView>
    )
  }
}

// styleの
const HEADER_HEIGHT = 15
const SIDE_BAR_WIDTH = 15

const S = StyleSheet.create({
  topButtonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: hp(HEADER_HEIGHT),
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  unitListItemContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp('12.5%'),
    height: wp('15%')
  },
  unitListContainer: {
    height: (Layout.height * 4) / 5
  },
  unitListItemImage: {
    width: Layout.width / 10,
    height: Layout.width / 10
  },
  doneSelectButtonText: {
    color: 'white',
    fontSize: 20
  },
  text: {
    alignSelf: 'center',
    paddingTop: 5,
    fontSize: 18
  },
  rankingContentContainer: {
    alignItems: 'center'
  },
  rankingButton: isSelected => ({
    width: (Layout.width * 1) / 10,
    height: 35,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isSelected ? primaryColor : 'gray'
  }),
  rankingButtonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20
  },
  goBackButton: {
    backgroundColor: primaryColor,
    width: 80,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  decisionButton: {
    backgroundColor: primaryColor,
    width: 80,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedUnitListItemImage: {
    width: 50,
    height: 50
  },
  selectedUnitListItemContainer: {
    height: wp('8%'),
    width: wp('8%')
  },
  selectedUnitListItemBadgeText: {
    fontSize: 8
  },
  selectedUnitListItemStarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  raceSelectButtonsContainer: {
    position: 'absolute',
    top: hp(HEADER_HEIGHT),
    left: 0
  },
  jobSelectButtonsContainer: {
    position: 'absolute',
    top: hp(HEADER_HEIGHT),
    left: wp(SIDE_BAR_WIDTH)
  },
  unitsListContainer: {
    position: 'absolute',
    top: hp('30%'),
    left: wp(SIDE_BAR_WIDTH)
  },
  selectedUnitsContainer: {
    position: 'absolute',
    top: hp('80%'),
    left: wp(SIDE_BAR_WIDTH),
    flexDirection: 'row',
    alignItems: 'center'
  },
  rankingContainer: {
    position: 'absolute',
    top: hp('90%'),
    left: wp(SIDE_BAR_WIDTH)
  }
})
