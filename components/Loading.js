import React from 'react'
import { View, Modal, Image } from 'react-native'
import styles from '../screens/styles/styles';
const titleScreen = require('../assets/images/splash.png')

export default class Loading extends React.Component {
  constructor(){
    super()
    this.state={visible: true}
    // setTimeout(_ => {}, 500)
  }
  
  componentWillUnmount() {
    this.setState({visible: false})
    return true
  }
  
  render() {
    return(
      <Modal transparent={true} visible={this.state.visible}>
        <View style={styles.container}>
          <View style={styles.loading}>
            <Image source={titleScreen} style={{width: '100%', height: '100%', resizeMode: 'cover'}}/>
          </View>
        </View>
      </Modal>
    )
  }
}