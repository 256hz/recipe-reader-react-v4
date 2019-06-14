import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import ButtonModal from '../components/ButtonModal'
import styles from './styles/styles.js'

const api = 'https://recipe-reader-rails.herokuapp.com/api/v1/'
const ingredUrl = 'https://spoonacular.com/cdn/ingredients_250x250/'

export default class ShowRecipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      steps: {},
      step: {},
      stepIndex: 2,
      sentences: "",
      sentenceIndex: 0,
      isLoading: true,
    }
  }

  componentDidMount() {
    // let id = this.props.navigation.state.params.id
    let id = 11021
    console.log({id})
    this.getRecipe(id)
  }

  getRecipe = (id) => {
    fetch(api + 'recipes/' + id)
      .then( res => res.json() )
      .then( json => {
        // console.log("show:", json)
        this.setState({
          steps: json,
          step: json[0],
          sentences: json[0].text.split(".").filter(s => s != ""),
          sentence: json[0].text.split(".").filter(s => s != "")[0],
          isLoading: false
        })
      })
  }
 
  submitBack = () => {
    this.props.navigation.navigate('Search')
  }

  sentenceNext = () => {
    if (this.state.sentenceIndex < this.state.sentences.length - 1) {
      this.setState({sentenceIndex: this.state.sentenceIndex + 1})
    } else if (this.state.sentenceIndex === this.state.sentences.length - 1 && this.state.stepIndex < this.state.steps.length - 1) {
      let sentences = this.state.steps[this.state.stepIndex + 1].text.split(".").filter(s => s != "")
      this.setState({
        sentences: sentences,
        sentenceIndex: 0,
        step: this.state.steps[this.state.stepIndex + 1],
        stepIndex: this.state.stepIndex + 1,
      })
    } else {
      return
    }
  }

  sentencePrev = () => {
    if (this.state.sentenceIndex > 0) {
      this.setState({sentenceIndex: this.state.sentenceIndex - 1})
    } else if (this.state.sentenceIndex === 0 && this.state.stepIndex > 0) {
      let sentences = this.state.steps[this.state.stepIndex - 1].text.split(".").filter(s => s != "")
      this.setState({
        sentences: sentences,
        sentenceIndex: sentences.length - 1,
        step: this.state.steps[this.state.stepIndex - 1],
        stepIndex: this.state.stepIndex - 1,
      })
    } else {
      return
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Text style={styles.titleText}>Loading...</Text>
    } else {
      let sentence = this.state.sentences[this.state.sentenceIndex]
      return( 
        <View style={styles.container}> 
          <ButtonModal sentencePrev={this.sentencePrev} sentenceNext={this.sentenceNext} />
          <ScrollView style={{margin: 5}}>
            <View style={styles.ingredList}>
              {this.state.step.ingredients.map( i => { 
                return( 
                  <View style={styles.ingredContainer} key={i.image_url}> 
                    <Image source={{uri: ingredUrl + i.image_url}} style={styles.ingredImg} />
                    <Text style={styles.ingredText}>{i.us_amount} {i.us_unit} {i.name}</Text>
                  </View>
                )
              })}
            </View>
            <Text style={styles.stepText}>{sentence + '.'}</Text>
          </ScrollView>

          <View>
            <Button
              onPress={this.submitBack}
              title={"Back"}
              style={styles.navButton}
              accessibilityLabel="Back"
            />
          </View>
        </View>
      )
    }
  }
}
// <Button onPress={this.sentencePrev} title={'<'} color={"#DDD"} />
// <Button onPress={this.sentenceNext} title={'>'} color={"#DDD"} />



// <Text>Ready in {potato[recipe]['readyInMinutes']} min</Text>