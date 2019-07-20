import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon, Constants } from 'expo'
import { Root } from 'native-base'
import AppNavigator from './navigation/AppNavigator'
import fireStoreSetup from './fireStore/fireStoreSetup'
import { unitImagePathArray } from './constants/UnitData'
import Sentry from 'sentry-expo'
// sentryがうまく動かない。
// Sentry.enableInExpoDevelopment = true
Sentry.config(Constants.manifest.extra.sentryPublicDsn).install()
// 黄色のアラートを削除
console.disableYellowBox = true

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  render () {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <Root style={styles.container}>
          <StatusBar hidden />
          <AppNavigator />
        </Root>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync(unitImagePathArray),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
