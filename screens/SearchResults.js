import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import styles from './styles/styles.js'

const api = 'https://aqueous-peak-96773.herokuapp.com/api/v1/'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)  
  }

  search = () => {
    // let query = props.navigation.state.params.text
    fetch(api + 'spoon')
      .then( res => res.json() )
  }
  
  submitBack = () => {
    this.props.navigation.navigate('Search')
  }

  render() {
    const { navigation } = this.props
    const response = fetch(api+'spoon/burger')
      .then( res => res.json() )
      .then( console.log )
    let text = navigation.getParam('text', 'nothing')
    return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.titleText}>Searching for {response['hi']} </Text>
          </View>
          <View>
            <Button
              onPress={this.submitBack}
              title={"Back"}
              color={"#7caa2d"}
              width={10}
              accessibilityLabel="Back"
            />
          </View>
      </View>
    );
  }
}

