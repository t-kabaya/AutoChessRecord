import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation
} from 'react-native'

const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

const S = StyleSheet.create({
  container: { flexDirection: 'row', height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})

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
    animationStyle: {}
  }

  componentDidMount = () => {
    // 初期アニメーションをセット
    LayoutAnimation.spring()
    this.setState({ animationStyle: this.inactivieAnimationStyle })
  }

  inactivieAnimationStyle = {
    height: 50,
    backgroundColor: 'green'
  }

  activeAnimationStyle = {
    height: 20,
    backgroundColor: 'blue'
  }

  componentDidUpdate (prevProps) {
    const isTabSelectionChanged =
      prevProps.tabProps.navigation.state.index !==
      this.props.tabProps.navigation.state.index
    if (isTabSelectionChanged) {
      // alert(this.props.props.navigation.state.index)
      isTabItemSelected =
        this.props.tabProps.navigation.state.index == this.props.routeIndex
      if (isTabItemSelected) {
        // LayoutAnimation.spring()
        this.setState({ animationStyle: this.activeAnimationStyle })
      } else {
        this.setState({ animationStyle: this.inactivieAnimationStyle })
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
        style={[
          S.tabButton,
          { backgroundColor: isActiveRoute ? 'red' : 'white' }
        ]}
        onPress={() => onTabPress({ route })}
        onLongPress={() => onTabLongPress({ route })}
        accessibilityLabel={getAccessibilityLabel({ route })}
      >
        <View style={this.state.animationStyle}>
          <Text>{getLabelText({ route })}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default TabBar
