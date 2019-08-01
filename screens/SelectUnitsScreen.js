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
import Layout from '../constants/Layout'
import Colors, { baseBackgroundColor } from '../constants/Colors'
import unitData, { unitImagePathArray } from '../constants/UnitData'
import { Badge, Button, Text, Toast, Container } from 'native-base'
import { saveMatchRecordToFireStore } from '../fireStore/MatchRecordORM'
import {
  primaryColor,
  darkPrimaryColor,
  secondaryColor
} from '../constants/Colors'
import I18n from '../constants/I18n'

const SelectedUnitListItem = ({ item, onPressUnitListItem }) => {
  let levelStar = []
  for (i = 0; i < item.level; i++) {
    levelStar.push(<Ionicons name='md-star' size={13} color='orange' />)
  }
  return (
    <TouchableWithoutFeedback onPress={() => onPressUnitListItem(item)}>
      <View style={styles.selectedUnitListItemContainer}>
        <View style={styles.selectedUnitListItemStarContainer}>
          {levelStar}
        </View>
        <Image
          resizeMode='contain'
          style={styles.selectedUnitListItemImage}
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
        <View style={styles.unitListItemContainer}>
          <View style={styles.selectedUnitListItemStarContainer}>
            {levelStar}
          </View>
          <Image
            resizeMode='contain'
            style={styles.unitListItemImage}
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
        style={styles.rankingButton(isSelected)}
      >
        <Text style={styles.rankingButtonText}>{item}位</Text>
      </Button>
    )
  }

  onPressRankingItem = item => {
    this.setState({ ranking: item })
  }

  onPressDecision = unitState => {
    saveMatchRecordToFireStore(unitState, this.state.ranking)
    Toast.show({
      text: '保存しました',
      // buttonText: 'Okay',
      duration: 2000,
      position: 'top',
      style: {
        backgroundColor: secondaryColor,
        alignItems: 'center',
        width: 150
      }
    })
    // stateをリセット
    this.setState({
      unitState: unitData.map(data => ({ ...data, level: 0 })),
      ranking: null
    })
  }

  onPressGoBackButton = () => {
    this.props.navigation.goBack()
  }

  render () {
    const { unitState } = this.state
    const selectedUnits = unitState.filter(unit => !(unit.level === 0))
    console.log(selectedUnits)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topButtonContainer}>
            <Button
              style={styles.goBackButton}
              onPress={this.onPressGoBackButton}
            >
              <Text style={styles.doneSelectButtonText}>
                {I18n.t('backButtonText')}
              </Text>
            </Button>
            <Button
              style={styles.decisionButton}
              onPress={() => this.onPressDecision(unitState)}
            >
              <Text style={styles.doneSelectButtonText}>
                {I18n.t('saveButtonText')}
              </Text>
            </Button>
          </View>

          <View style={{ flex: 3 }}>
            <FlatList
              style={styles.unitListContainer}
              numColumns={7}
              data={unitState}
              renderItem={this.unitListItem}
              keyExtractor={item => item.unitId}
            />
          </View>
          <View style={styles.selectedUnitsContainer}>
            <Text style={styles.text}>{selectedUnits.length}</Text>
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

          <View style={styles.rankingContainer}>
            {/* <Text style={styles.text}>順位</Text> */}
            <FlatList
              scrollEnabled={false}
              contentContainerStyle={styles.rankingContentContainer}
              numColumns={8}
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              renderItem={this.rankingItem}
              keyExtractor={item => item}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('90%'),
    marginHorizontal: wp('5%')
    // backgroundColor: baseBackgroundColor
  },
  topButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
    // borderWidth: 5
    // borderColor: primaryColor
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
  rankingContainer: {
    flex: 0.8,
    flexDirection: 'row'
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
  selectedUnitsContainer: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'center'
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
  }
})
