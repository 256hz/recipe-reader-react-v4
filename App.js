import React from 'react';
import * as Font from 'expo-font'
import { Platform, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator.js'
import Loading from './components/Loading'
import styles from './screens/styles/styles'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = { loading: true }
  }

  async componentWillMount() {
    await Font.loadAsync({
        'Title' : require('./assets/fonts/UniversLtStd-LightUltraCn.ttf'),
        'Body'  : require('./assets/fonts/UniversLtStd-LightCn.ttf'),
    })
    this.setState({ loading: false })
}

  render() {
    return (
      <View style={styles.container}>
        { this.state.loading
          ? <Loading />
          : <AppNavigator />
        }
      </View>
    );
  }
}