import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import SelectUnitsScreen from '../screens/SelectUnitsScreen'
import MyMatchRecordScreen from '../screens/MyMatchRecordScreen'
import SettingsScreen from '../screens/SettingsScreen'

export const HomeStack = createStackNavigator(
  {
    MyMatchRecordScreen,
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

// export default createBottomTabNavigator({
//   LinksStack,
//   HomeStack
//   // SettingsStack
// })
