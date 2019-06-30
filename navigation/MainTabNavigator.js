import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SelectUnitsScreen from "../screens/SelectUnitsScreen";
import OpDeckScreen from "../screens/OpDeckScreen";
import SettingsScreen from "../screens/SettingsScreen";
import OpSynergyAndUnitsScreen from "../screens/OpSynergyAndUnitsScreen";
import OpUnitsScreen from "../screens/OpUnitsScreen";
import MyPageScreen from "../screens/MyPageScreen";
import { primaryColor } from "../constants/Colors";
import i18n from "../constants/I18n";

export const HomeStack = createStackNavigator(
  {
    OpDeckScreen,
    OpSynergyAndUnitsScreen,
    SelectUnitsScreen,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

export const OpUnitsStack = createStackNavigator(
  {
    OpUnitsScreen,
    OpSynergyAndUnitsScreen,
    SelectUnitsScreen,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

export const MyPageStack = createStackNavigator(
  {
    MyPageScreen,
    SelectUnitsScreen,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

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
        tabBarLabel: i18n.t("deckText"),
      },
    },
    OpUnitsStack: {
      screen: OpUnitsStack,
      navigationOptions: {
        tabBarLabel: i18n.t("unitText"),
      },
    },
    // MyPageStack: {
    //   screen: MyPageStack,
    //   navigationOptions: {
    //     tabBarLabel: 'マイページ'
    //   }
    // }
  },
  {
    // initialRouteName: 'OpUnitsStack',
    initialRouteName: "HomeStack",
    animationEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: primaryColor,
        pressOpacity: 1,
      },
    },
  }
);
