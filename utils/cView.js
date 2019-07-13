import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

let id = 0

const Cview = props => {
  id = id + 1
  return (
    <View style={[props.style, styles.container(id)]}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  container: id => ({
    // backgroundColor: `rgba(${id * 10}, ${id * 100}, ${id * 100}, 1)`
    backgroundColor: `rgb(${Math.round(Math.random() * 255)},${Math.round(
      Math.random() * 255
    )},
      ${Math.round(Math.random() * 255)})`
  })
})

export default (__DEV__ ? Cview : View)
