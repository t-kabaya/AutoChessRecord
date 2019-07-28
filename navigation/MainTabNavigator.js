import React from 'react'
import { Platform, Text } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'
import TabBar from '../components/TabBar'

import HomeScreen from '../screens/HomeScreen'
import SelectUnitsScreen from '../screens/SelectUnitsScreen'
import OpDeckScreen from '../screens/OpDeckScreen'
import SettingsScreen from '../screens/SettingsScreen'
import OpSynergyAndUnitsScreen from '../screens/OpSynergyAndUnitsScreen'
import OpUnitsScreen from '../screens/OpUnitsScreen'
import MyPageScreen from '../screens/MyPageScreen'
import { primaryColor } from '../constants/Colors'
import i18n, { en } from '../constants/I18n'

export const HomeStack = createStackNavigator(
  {
    OpDeckScreen,
    OpSynergyAndUnitsScreen,
    SelectUnitsScreen: {
      screen: SelectUnitsScreen,
      // スワイプダウンで、モーダルが閉じるのを防ぐ。記述量が多くダサい
      navigationOptions: {
        gesturesEnabled: false,
        headerMode: 'none'
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export const OpUnitsStack = createStackNavigator(
  {
    OpUnitsScreen,
    OpSynergyAndUnitsScreen,
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

export const MyPageStack = createStackNavigator(
  {
    MyPageScreen,
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

// tabBarをtopに配置するためだけに、createMaterialTopTabNavigatorを使用
export default createMaterialTopTabNavigator(
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
    // tabBarComponent: props => (
    //   <Text
    //     style={{
    //       backgroundColor: 'green',
    //       height: 100,
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     aa
    //   </Text>
    // ),
    tabBarComponent: TabBar,
    // initialRouteName: 'MyPageStack',
    // initialRouteName: 'OpUnitsStack',
    initialRouteName: 'HomeStack',
    animationEnabled: false
    // タブをタップでタブ毎のstackをリセット
    // resetOnBlur: true,
    // tabBarOptions: {
    //   style: {
    //     backgroundColor: primaryColor,
    //     pressOpacity: 1,
    //     height: 50
    //   }
    // }
  }
)
