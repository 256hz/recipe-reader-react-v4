import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Button
} from 'react-native'; 
import styles from '../screens/styles/styles'

export default class ButtonModal extends React.Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  render() {
    return(
      <Modal transparent={true} animationType={'none'} visible={true}>
        <View style={styles.buttonModal}>
          <TouchableOpacity style={{...styles.buttonFwdBack}} onPress={this.props.sentencePrev}>
            <Text style={{textAlign: 'center'}}>{'<'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonFwdBack}} onPress={this.props.sentenceNext}>
            <Text style={{textAlign: 'center'}}>{'>'}</Text>
          </TouchableOpacity>
        </View>
          <Button
              onPress={this.props.submitBack}
              title={"Back"}
              style={styles.buttonNav}
              accessibilityLabel="Back"
            />
      </Modal>
    )
  }
}