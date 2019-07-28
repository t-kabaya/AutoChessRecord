import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
  Animated
} from 'react-native'
import { primaryColor, baseBackgroundColor } from '../constants/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

class TabBar extends Component {
  render () {
    const { routes } = this.props.navigation.state
    return (
      <View style={S.container}>
        {routes.map((route, routeIndex) => {
          return (
            <TabBarItem
              tabProps={this.props}
              route={route}
              routeIndex={routeIndex}
            />
          )
        })}
      </View>
    )
  }
}

class TabBarItem extends Component {
  state = {
    // animationStyle: {},
    colorBoxHeight: new Animated.Value(10)
  }

  componentDidMount = () => {
    // 初期アニメーションをセット
    // LayoutAnimation.spring()
    // this.setState({ animationStyle: this.inactivieAnimationStyle })
    // this.startAnimation()
  }

  expandBox = () => {
    Animated.timing(
      // Animate over time
      this.state.colorBoxHeight, // The animated value to drive
      {
        toValue: 50,
        duration: 100
      }
    ).start()
  }

  shrinkBox = () => {
    Animated.timing(
      // Animate over time
      this.state.colorBoxHeight, // The animated value to drive
      {
        toValue: 0,
        duration: 70
      }
    ).start()
  }

  componentDidUpdate (prevProps) {
    const isTabSelectionChanged =
      prevProps.tabProps.navigation.state.index !==
      this.props.tabProps.navigation.state.index
    if (isTabSelectionChanged) {
      this.expandBox()
      // alert(this.props.props.navigation.state.index)
      isTabItemSelected =
        this.props.tabProps.navigation.state.index == this.props.routeIndex
      if (isTabItemSelected) {
        // LayoutAnimation.spring()
        this.expandBox()
      } else {
        this.shrinkBox()
      }
    }
  }

  render () {
    const {
      navigation,
      isRouteActive,
      getAccessibilityLabel,
      getLabelText,
      onTabPress,
      onTabLongPress
    } = this.props.tabProps

    const { route, routeIndex } = this.props

    const isActiveRoute = navigation.state.index === routeIndex
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        key={routeIndex}
        style={[S.tabButton]}
        onPress={() => onTabPress({ route })}
        onLongPress={() => onTabLongPress({ route })}
        accessibilityLabel={getAccessibilityLabel({ route })}
      >
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            height: this.state.colorBoxHeight,
            width: wp('20%'),
            backgroundColor: isActiveRoute ? primaryColor : baseBackgroundColor,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10
          }}
        >
          {/* 要リファクタリング: なぜか、Animated.Viewの中が空だと動かない。仕方なしに空のTextを入れる */}
          <Text />
        </Animated.View>
        <Text
          style={{ color: isActiveRoute ? baseBackgroundColor : primaryColor }}
        >
          {getLabelText({ route })}
        </Text>
      </TouchableOpacity>
    )
  }
}

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    elevation: 2,
    backgroundColor: baseBackgroundColor,
    borderBottomColor: primaryColor,
    borderBottomWidth: 2
  },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})

export default TabBar
