import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import potato from '../assets/search-results-potato.json'
import styles from './styles/styles.js'
// import { ScrollView } from 'react-native-gesture-handler';

const api = 'https://recipe-reader-rails.herokuapp.com/api/v1/'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  search = () => {
    fetch(api + 'spoon/' + query)
      .then( res => res.json() )
      .then( json => {return json})
  }
  
  submitBack = () => {
    this.props.navigation.navigate('Search')
  }

  render() {
    // const { navigation } = this.props
    let query = this.props.navigation.state.params.text.toLowerCase()
    // const response = search(query)
    return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.resultsTitleText}>Results for {query}: </Text>
          </View>
          <ScrollView>
            {Object.keys(potato).map( (recipe, index) => {
              return <View style={styles.recipeCard} key={recipe + index}>
                <Text>{recipe}</Text>
                <Text>{potato[recipe]['id']}</Text>
                <Image style={{width : 312, height: 231}} source={{uri: potato[recipe]['image_url']}} />
                <Text>Ready in {potato[recipe]['readyInMinutes']} min</Text>
              </View>
            })}
          </ScrollView>
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


