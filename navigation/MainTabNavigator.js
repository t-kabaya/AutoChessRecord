import React from 'react'
import { Platform, Text } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'
import TabBar from '../components/TabBar'

import SelectUnitsScreen from '../screens/SelectUnits/Screen'
import OpDeckScreen from '../screens/OpDeck/Screen'
import SettingsScreen from '../screens/SettingsScreen'
import OpUnitsScreen from '../screens/OpUnits/Screen'
import MyPageScreen from '../screens/MyPage/Screen'
import { primaryColor } from '../constants/Colors'
import i18n, { en } from '../constants/I18n'

export const HomeStack = createStackNavigator(
  {
    OpDeckScreen
  },
  {
    headerMode: 'none'
  }
)

export const OpUnitsStack = createStackNavigator(
  {
    OpUnitsScreen
  },
  {
    headerMode: 'none'
  }
)

export const MyPageStack = createStackNavigator(
  {
    MyPageScreen
  },
  {
    headerMode: 'none'
  }
)

// tabBarをtopに配置するためだけに、createMaterialTopTabNavigatorを使用
const TabNavigator = createMaterialTopTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: i18n.t('deckText')
      }
    },
    OpUnitsStack: {
      screen: OpUnitsStack,
      navigationOptions: {
        tabBarLabel: i18n.t('unitText')
      }
    },
    MyPageStack: {
      screen: MyPageStack,
      navigationOptions: {
        tabBarLabel: i18n.t('myPageTabTitle')
      }
    }
  },
  {
    // 仕方なくカスタムタブバーを作る
    tabBarComponent: TabBar,
    // initialRouteName: 'MyPageStack',
    // initialRouteName: 'OpUnitsStack',
    initialRouteName: 'HomeStack',
    animationEnabled: false
  }
)

const MainNavigator = createStackNavigator(
  {
    TabNavigator,
    SelectUnitsScreen: {
      screen: SelectUnitsScreen,
      // スワイプダウンで、モーダルが閉じるのを防ぐ。記述量が多くダサい
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default MainNavigator
