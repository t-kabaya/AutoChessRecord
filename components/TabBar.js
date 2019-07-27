import React, { useState, useEffect, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated
} from 'react-native'
import I18n from '../constants/I18n'

export const useAnimation = () => {
  const [anim, setAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(
      // Animate over time
      anim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000 // Make it take a while
      }
    ).start()
  }, [])

  return anim
}

const usePulse = () => {
  const scale = useRef(new Animated.Value(1)).current

  const pulse = () => {
    Animated.sequence([
      Animated.timing(this.scale, { toValue: 1.2 }),
      Animated.timing(this.scale, { toValue: 0.8 })
    ]).start(() => this.pulse())
  }

  useEffect(() => {
    setTimeout(() => {
      pulse()
    }, 500)
  }, [])

  return pulse
}

// const TabItem = ({ item }) => {
//   const scale = usePulse()
//   return (
//     <TouchableWithoutFeedback>
//       <View style={S.tabItemContainer}>
//         <Animated.View style={{ backgroundColor: 'red' }} />
//         <Text>{I18n.t(item.routeName)}</Text>
//       </View>
//     </TouchableWithoutFeedback>
//   )
// }
const TabItem = () => {
  const anim = useAnimation(0)
  return (
    // Animated square
    <Animated.View
      style={{
        height: anim * 100,
        backgroundColor: 'red'
      }}
    />
  )
}

const TabBar = props => {
  const {
    // renderIcon,
    // getLabelText,
    // activeTintColor,
    // inactiveTintColor,
    // onTabPress,
    // onTabLongPress,
    // getAccessibilityLabel,
    navigation
  } = props

  const { routes } = props.navigation.state

  return (
    <View style={S.container}>
      {routes.map(item => (
        <TabItem item={item} navigation={navigation} />
      ))}
      {/* <Text>{JSON.stringify(props.navigation.state.routes)}</Text> */}
    </View>
  )
}

const S = StyleSheet.create({
  container: { flexDirection: 'row', height: 52, elevation: 2 },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TabBar

// 渡されるpropsの例
const propsExample = {
  props: {
    navigation: {
      state: {
        routes: [
          {
            key: 'HomeStack',
            isTransitioning: false,
            index: 0,
            routes: [
              {
                routeName: 'OpDeckScreen',
                key: 'id-1564208104897-0'
              }
            ],
            routeName: 'HomeStack'
          },
          {
            key: 'OpUnitsStack',
            isTransitioning: false,
            index: 0,
            routes: [
              {
                routeName: 'OpUnitsScreen',
                key: 'id-1564208104897-1'
              }
            ],
            routeName: 'OpUnitsStack'
          },
          {
            key: 'MyPageStack',
            isTransitioning: false,
            index: 0,
            routes: [
              {
                routeName: 'MyPageScreen',
                key: 'id-1564208104897-2'
              }
            ],
            routeName: 'MyPageStack'
          }
        ],
        index: 0,
        isTransitioning: false,
        key: 'Main',
        routeName: 'Main'
      },
      router: {
        childRouters: {
          HomeStack: {
            childRouters: {
              OpDeckScreen: null,
              OpSynergyAndUnitsScreen: null,
              SelectUnitsScreen: null
            }
          },
          OpUnitsStack: {
            childRouters: {
              OpUnitsScreen: null,
              OpSynergyAndUnitsScreen: null,
              SelectUnitsScreen: null
            }
          },
          MyPageStack: {
            childRouters: {
              MyPageScreen: null,
              SelectUnitsScreen: null
            }
          }
        }
      },
      actions: {},
      _childrenNavigation: {
        HomeStack: {
          state: {
            key: 'HomeStack',
            isTransitioning: false,
            index: 0,
            routes: [
              {
                routeName: 'OpDeckScreen',
                key: 'id-1564208104897-0'
              }
            ],
            routeName: 'HomeStack'
          },
          router: {
            childRouters: {
              OpDeckScreen: null,
              OpSynergyAndUnitsScreen: null,
              SelectUnitsScreen: null
            }
          },
          actions: {},
          _childrenNavigation: {
            'id-1564208104897-0': {
              state: {
                routeName: 'OpDeckScreen',
                key: 'id-1564208104897-0'
              },
              actions: {}
            }
          }
        },
        OpUnitsStack: {
          state: {
            key: 'OpUnitsStack',
            isTransitioning: false,
            index: 0,
            routes: [
              {
                routeName: 'OpUnitsScreen',
                key: 'id-1564208104897-1'
              }
            ],
            routeName: 'OpUnitsStack'
          },
          router: {
            childRouters: {
              OpUnitsScreen: null,
              OpSynergyAndUnitsScreen: null,
              SelectUnitsScreen: null
            }
          },
          actions: {}
        },
        MyPageStack: {
          state: {
            key: 'MyPageStack',
            isTransitioning: false,
            index: 0,
            routes: [
              {
                routeName: 'MyPageScreen',
                key: 'id-1564208104897-2'
              }
            ],
            routeName: 'MyPageStack'
          },
          router: {
            childRouters: {
              MyPageScreen: null,
              SelectUnitsScreen: null
            }
          },
          actions: {}
        }
      }
    }
  }
}
