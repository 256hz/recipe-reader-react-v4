import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Loading from '../components/Loading'
import styles from '../styles/styles'

const api = 'https://recipe-reader-rails.herokuapp.com/api/v1/'
const ingredUrl = 'https://spoonacular.com/cdn/ingredients_250x250/'
const equipUrl = 'https://spoonacular.com/cdn/equipment_250x250/'

export default class ShowRecipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipeTitle: '',
      ingredients: [],
      equipment: [],
      // id: 224260,
      id: this.props.navigation.state.params.id,
      query: this.props.navigation.state.params.query,
      results: this.props.navigation.state.params.results,
      imageUrl: this.props.navigation.state.params.imageUrl,
      isLoading: true,
    }
  }

  async componentDidMount() {
    console.log('id:', this.state.id)
    let data = await Promise
      .resolve( this.getRecipeData(this.state.id) )
      .then( _ => this.load() )
  }

  load = () => {
    setTimeout(_ => {
      this.setState({isLoading: false})
    }, 100)
  }

  submitBack = () => {
    // console.log('going back from ingreds, query:', this.state.query)
    this.props.navigation.navigate('Results', {
      results: this.state.results,
      savedQuery: this.state.query
    })
  }

  submitRead = () => {
    this.props.navigation.navigate('Show', {id: this.state.id, imageUrl: this.state.imageUrl})
  }

  getRecipeData = async(id) => {
    await fetch(api + 'recipes/' + id)
    .then( res => res.json() )
    .then( json => {
      // console.log('json[equipments]:', json['equipments'])
      let title = json['title'].split(' ').map( w => w.slice(0,1).toUpperCase() + w.slice(1)).join(' ')
      this.setState({
        recipeTitle: title,
        equipment: json['equipments'],
      })
    })
    .then( _ => fetch(api + 'recipes/' + id + '/ingredients') )
    .then( res => res.json() )
    .then( json => {
      this.setState({ ingredients: json })
    })
    .catch( console.log )
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    } else {
      // console.log('ingredients: got to render()')
      return(
        <View style={styles.container}>
          
          <ScrollView style={{margin: 5, height:'82%'}}>
            <Text style={styles.resultsTitleText}>{this.state.recipeTitle + '\n'}Ingredients</Text>
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

            <Text style={styles.resultsTitleText}>You'll need:</Text>
            <View style={styles.ingredList}>
              {this.state.equipment.map( (i, index) => { 
                return( 
                  <View style={styles.ingredContainer} key={i.image_url+index}> 
                    <Image source={{uri: equipUrl + i.image_url}} style={styles.ingredImg} />
                    <Text style={styles.ingredText}>{i.name}</Text>
                  </View>
                )
              })}
            </View>
          </ScrollView>

          <View style={styles.buttonBottom}>
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