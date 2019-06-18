import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Loading from '../components/Loading'
import styles from './styles/styles.js'

const api = 'https://recipe-reader-rails.herokuapp.com/api/v1/'
const ingredUrl = 'https://spoonacular.com/cdn/ingredients_250x250/'

export default class ShowRecipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeTitle: '',
      ingredients: [],
      id: 0,
      isLoading: true,
    }
  }

  componentDidMount() {
    // this.setState({id: this.props.navigation.state.params.id})
    let id = 224260
    console.log(this.state.id)
    this.getIngredients(this.state.id)
  }

  submitBack = () => {
    this.props.navigation.navigate('Search')
  }

  submitRead = () => {
    this.props.navigation.navigate('Show', {id: this.state.id})
  }

  getIngredients = (id) => {
    fetch(api + 'recipes/' + id + '/ingredients')
      .then( res => res.json() )
      .then( json => {
        this.setState({ingredients: json})
      })
      .catch( console.log )

    fetch(api + 'recipes/' + id)
      .then( res => res.json() )
      .then( json => {
        let title = json['title'].split(' ').map( w => w.slice(0,1).toUpperCase() + w.slice(1)).join(' ')
        this.setState({recipeTitle: title})
      })
      .then(_ => this.setState({isLoading: false}) )
      .catch( console.log )
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    } else {
      return(
        <View style={styles.container}>
          <ScrollView style={{margin: 5}}>
            <Text style={styles.recipeTitleText}>{this.state.recipeTitle}:{'\n'}Ingredients</Text>
            <View style={styles.ingredList}>
              {this.state.ingredients.map( (i, index) => { 
                return( 
                  <View style={styles.ingredContainer} key={i.image_url+index}> 
                    <Image source={{uri: ingredUrl + i.image_url}} style={styles.ingredImg} />
                    <Text style={styles.ingredText}>{i.orig_string}</Text>
                  </View>
                )
              })}
            </View>
          </ScrollView>
          <View style={{alignContent: 'center'}}>
            <TouchableOpacity
              onPress={this.submitBack}
              style={styles.buttonNav}
              accessibilityLabel="Back"
              title={"Back"}
            >
              <Text style={styles.buttonText}>BACK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.submitRead}
              style={styles.buttonNav}
              accessibilityLabel="Read"
              title={"Read"}
            >
              <Text style={styles.buttonText}>READ</Text>
            </TouchableOpacity>
          </View>

        </View>
      )
    }
  }
}