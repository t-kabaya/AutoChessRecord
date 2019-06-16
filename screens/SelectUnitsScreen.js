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
import Colors from '../constants/Colors'
import unitData, { unitImagePathArray } from '../constants/UnitData'
import { Badge, Button, Text } from 'native-base'
import { saveMatchRecordToFireStore } from '../fireStore/MatchRecordORM'

const SelectedUnitListItem = ({ item }) => {
  return (
    <TouchableWithoutFeedback onPress={() => this.onPressUnitListItem(item)}>
      <View style={styles.selectedUnitListItemContainer}>
        <Badge>
          <Text style={styles.selectedUnitListItemBadgeText}>
            Lv{item.level}
          </Text>
        </Badge>
        <Ionicons name='md-star' size={32} color='green' />
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
    return (
      <TouchableWithoutFeedback onPress={() => this.onPressUnitListItem(item)}>
        <View style={styles.unitListItemContainer}>
          <View>
            <Text>Lv{item.level}</Text>
          </View>
          <Image
            resizeMode='contain'
            style={styles.unitListItemImage}
            source={unitImagePathArray[item.unitId - 1]}
          />
          <Text>{item.unitName}</Text>
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
    Alert.alert('成功')
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
    debugger
    console.log(selectedUnits)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Button
            style={styles.goBackButton}
            onPress={this.onPressGoBackButton}
          >
            <Text>戻る</Text>
          </Button>
          <Button
            style={styles.decisionButton}
            onPress={() => this.onPressDecision(unitState)}
          >
            <Text style={styles.doneSelectButtonText}>保存</Text>
          </Button>
        </View>
        <View style={{ flex: 3 }}>
          <FlatList
            style={styles.unitListContainer}
            numColumns={7}
            data={unitState}
            renderItem={this.unitListItem}
          />
        </View>
        <View style={styles.selectedUnitsContainer}>
          {/* <Text style={styles.text}>選択済み</Text> */}
          <FlatList
            inverted
            horizontal
            data={selectedUnits}
            renderItem={({ item }) => <SelectedUnitListItem item={item} />}
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* <Text style={styles.text}>順位</Text> */}
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={styles.rankingContainer}
            numColumns={8}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={this.rankingItem}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  unitListItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Layout.width / 8
  },
  unitListContainer: {
    height: (Layout.height * 4) / 5
  },
  unitListItemImage: {
    width: Layout.width / 10,
    height: Layout.width / 10,
    borderWidth: 5,
    borderColor: '#ffe084'
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
    alignItems: 'center'
  },
  rankingButton: isSelected => ({
    width: (Layout.width * 1) / 10,
    height: 35,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isSelected ? 'blue' : 'gray'
  }),
  rankingButtonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20
  },
  selectedUnitsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  goBackButton: {
    width: 80,
    margin: 3
  },
  decisionButton: {
    width: 80,
    margin: 3
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
  }
})
