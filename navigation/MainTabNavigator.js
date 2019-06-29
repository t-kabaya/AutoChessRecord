import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import SelectUnitsScreen from '../screens/SelectUnitsScreen'
import OpDeckScreen from '../screens/OpDeckScreen'
import SettingsScreen from '../screens/SettingsScreen'
import OpSynergyAndUnitsScreen from '../screens/OpSynergyAndUnitsScreen'
import OpUnitsScreen from '../screens/OpUnitsScreen'
import MyPageScreen from '../screens/MyPageScreen'
import { primaryColor } from '../constants/Colors'

export const HomeStack = createStackNavigator(
  {
    OpDeckScreen,
    OpSynergyAndUnitsScreen,
    SelectUnitsScreen
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
    SelectUnitsScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export const MyPageStack = createStackNavigator(
  {
    MyPageScreen,
    SelectUnitsScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

// const LinksStack = createStackNavigator({
//   Links: MyMatchRecordScreen
// })

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   )
// }

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen
// })

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
//     />
//   )
// }

export default createMaterialTopTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'デッキ'
      }
    },
    OpUnitsStack: {
      screen: OpUnitsStack,
      navigationOptions: {
        tabBarLabel: 'ユニット'
      }
    }
    // MyPageStack: {
    //   screen: MyPageStack,
    //   navigationOptions: {
    //     tabBarLabel: 'マイページ'
    //   }
    // }
  },
  {
    initialRouteName: 'OpUnitsStack',
    animationEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: primaryColor,
        pressOpacity: 1
      }
    }
  }
)
