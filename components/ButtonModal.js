import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native'; 
import styles from '../screens/styles/styles'

export default class ButtonModal extends React.Component {
  render() {
    return(
      <Modal transparent={true} animationType={'none'} visible={true}>
      <View style={styles.buttonModal}>
        <TouchableOpacity style={{...styles.buttonFwdBack, alignSelf: "flex-start"}} onPress={this.props.sentencePrev}>
          <Text style={{textAlign: 'center'}}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.buttonFwdBack, alignSelf: "flex-end"}} onPress={this.props.sentenceNext}>
          <Text style={{textAlign: 'center'}}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      </Modal>
    )
  }
}