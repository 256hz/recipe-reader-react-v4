import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Loading from '../components/Loading'
import styles from '../styles/styles'

const api = 'https://recipe-reader-rails.herokuapp.com/api/v1/'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      query: '',
      response: {},
      isLoading: true,
    }
  }

  async componentWillMount() {
    if (this.props.navigation.state.params.savedQuery) { 
      let state = await Promise
        .resolve( true )
        .then( this.setState({
          response: this.props.navigation.state.params.results,
          query: this.props.navigation.state.params.savedQuery,
        })
      ).then( this.load() )
    } else {
      const query = this.props.navigation.state.params.text.toLowerCase().trim()
      if (query != null) {
        // console.log("componentWillMount:", {query})
        await this.setState({ query: query })
        let search = await Promise
          .resolve( this.search(query) )
          .then( this.load() )
      }
    }
  }

  load = () => {
    setTimeout(_ => {
      this.setState({isLoading: false})
    }, 500)
  }

  search = (query) => {
    fetch(api + 'spoon/' + query)
      .then( res => res.json() )
      .then( json => {
        this.setState({response: json})
      })
      .catch( console.log )
  }
  
  submitBack = () => {
    this.props.navigation.navigate('Search')
  }

  submitShowIngredients = (id, imageUrl) => {
    this.props.navigation.navigate('Ingredients', {
      id: id, 
      results: this.state.response,
      query: this.state.query,
      imageUrl: imageUrl
    })
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    } else {
      const query = this.state.query.slice(0,1).toUpperCase() + this.state.query.slice(1)
      // console.log("render:", {query})
      const response = this.state.response 
      return (
        <View
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
            <View>
              <Text style={styles.resultsTitleText}>Search Results: {query}</Text>
            </View>
            <ScrollView>
              {Object.keys(response).map( (title, index) => {
                let id = response[title]['id']
                return(
                  <TouchableOpacity 
                    style={styles.recipeCard} 
                    onPress={_ => this.submitShowIngredients(id, response[title]['image_url'])} 
                    key={title + index}>

                    <Text style={{fontFamily: 'Body', fontSize: 18, textAlign: 'center'}}>{title}</Text>
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
}

// <Text>Ready in {response[recipe]['readyInMinutes']} min</Text>