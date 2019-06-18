import React from 'react'
import { View, Modal, Image } from 'react-native'
import styles from '../screens/styles/styles';
const titleScreen = require('../assets/images/splash.png')

export default class Loading extends React.Component {
  render() {
    return(
      <Modal transparent={true}>
        <View style={styles.container}>
          <View style={styles.loading}>
            <Image source={titleScreen} style={{width: '100%', height: '100%', resizeMode: 'cover'}}/>
          </View>
        </View>
      </Modal>
    )
  }
}