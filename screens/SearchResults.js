import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
// import potato from '../assets/search-results-potato.json'
import styles from './styles/styles.js'

const api = 'https://recipe-reader-rails.herokuapp.com/api/v1/'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      response: {},
    }
    let query = this.props.navigation.state.params.text.toLowerCase()
    this.search(query)
  }

  search = (query) => {
    fetch(api + 'spoon/' + query)
      .then( res => res.json() )
      .then( json => {
        console.log("search: ",{json})
        this.setState({response: json})
      })
  }
  
  submitBack = () => {
    this.props.navigation.navigate('Search')
  }

  showRecipe = (id) => {
    this.props.navigation.navigate('Show', {id: id})
  }

  render() {
    // const { navigation } = this.props
    let query = this.props.navigation.state.params.text.toLowerCase()
    let potato = this.state.response
    // const response = search(query)
    return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.resultsTitleText}>Results for {query}: </Text>
          </View>
          <ScrollView>
            {Object.keys(potato).map( (title, index) => {
              let id = potato[title]['id']
              return <TouchableOpacity style={styles.recipeCard} onPress={_ => this.showRecipe(id)} key={title + index}>
                <Text>{title}</Text>
                <Image style={{width : 312, height: 231}} source={{uri: potato[title]['image_url']}} />
              </TouchableOpacity>
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


// <Text>Ready in {potato[recipe]['readyInMinutes']} min</Text>