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
        // console.log("search: ",{json})
        this.setState({response: json})
      })
      .catch( console.log )
  }
  
  submitBack = () => {
    this.props.navigation.navigate('Search')
  }

  showIngredients = (id) => {
    this.props.navigation.navigate('Ingredients', {id: id})
  }

  render() {
    const query = this.props.navigation.state.params.text.toLowerCase()
    const response = this.state.response 

    return (
      <View
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.resultsTitleText}>Results for {query.trim()}:</Text>
          </View>
          <ScrollView>
            {Object.keys(response).map( (title, index) => {
              let id = response[title]['id']
              return(
                <TouchableOpacity style={styles.recipeCard} onPress={_ => this.showIngredients(id)} key={title + index}>
                  <Text style={{fontFamily: 'Body', fontSize: 18}}>{title}</Text>
                  <Image style={{width : 312, height: 231}} source={{uri: response[title]['image_url']}} />
                </TouchableOpacity>
              )
            })}
          </ScrollView>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={this.submitBack}
              title={"Back"}
              style={styles.buttonNav}
              accessibilityLabel="Back"
            >
              <Text style={styles.buttonText}>BACK</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}


// <Text>Ready in {response[recipe]['readyInMinutes']} min</Text>