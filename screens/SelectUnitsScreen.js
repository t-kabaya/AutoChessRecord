import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  SafeAreaView
} from 'react-native'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import unitData, { unitImagePathArray } from '../constants/UnitData'
import {Badge, Button} from 'native-base'

// unitの重複は考えない

export default class SelectUnitsScreen extends React.Component {
  state = {
    unitState: unitData.map(data => ({...data, level: 0})),
    ranking: null
  }

  onPressUnitListItem = (item) => {
    const unitId = item.id
    const unitState = this.state.unitState.map(unit => {
      if (unit.id === unitId) {
        return ({...unit, level: (unit.level + 1) % 4})
      } else {
        return unit
      }
    })
    this.setState({unitState})
  }

  unitListItem = ({ item }) => {
    let levelColor
    return (
      <TouchableWithoutFeedback onPress={() => this.onPressUnitListItem(item)}>
        <View style={styles.unitListItemContainer}>
          <View>
            <Text>Lv{item.level}</Text>
          </View>
          <Image resizeMode='contain' style={styles.unitListItemImage} source={unitImagePathArray[item.id - 1]} />
          <Text>{item.unitName}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  rankingItem = ({item}) => {
    const isSelected = (item === this.state.ranking)
    return (
      <Button
        onPress={() => this.onPressRankingItem(item)}
        style={styles.rankingButton(isSelected)}
      >
        <Text style={styles.rankingButtonText}>{item}</Text>
      </Button>
    )
  }

  onPressRankingItem = (item) => {
    this.setState({ranking: item})
  }

  render () {
    const {unitState} = this.state
    const selectedUnits = unitState.filter(unit => !(unit.level === 0))
    console.log(selectedUnits)
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 3}}>
          <Button full>
            <Text style={styles.doneSelectButtonText}>決定</Text>
            </Button>
          <FlatList style={styles.unitListContainer} numColumns={4} data={unitState} renderItem={this.unitListItem} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.text}>選択済み</Text>
          <FlatList inverted horizontal data={selectedUnits} renderItem={this.unitListItem} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.text}>順位</Text>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={styles.rankingContainer}
            numColumns={4}
            data={[1,2,3,4,5,6,7,8]}
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
    width: Layout.width / 4,
  },
  unitListContainer: {
    height: Layout.height * 4 / 5
  },
  unitListItemImage: {
    width: Layout.width / 5,
    height: Layout.width / 5,
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
    fontSize: 18,
  },
  rankingContainer: {
    alignItems: 'center'
  },
  rankingButton:  (isSelected) => ({
    width: Layout.width * 1 / 5,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isSelected ? 'blue' : 'gray'
  }),
  rankingButtonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20
  }
})