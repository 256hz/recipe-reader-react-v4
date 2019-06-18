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
import Loading from '../components/Loading'
import styles from './styles/styles.js'

const api = 'https://recipe-reader-rails.herokuapp.com/api/v1/'
const ingredUrl = 'https://spoonacular.com/cdn/ingredients_250x250/'

export default class ShowRecipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      steps: {},
      step: {},
      stepIndex: 0,
      sentences: "",
      sentenceIndex: 0,
      isLoading: true,
      modalVisible: true,
    }
  }

  componentDidMount() {
    let id = this.props.navigation.state.params.id
    // let id = 224260
    console.log({id})
    this.getSteps(id)
  }

  componentWillUnmount() {
    this.setState({modalVisible: false})
    return true
  }

  getSteps = (id) => {
    fetch(api + 'recipes/' + id + '/steps')
      .then( res => res.json() )
      .then( json => {
        let sentences = json[0].text.split(".").filter(s => s != "")
        this.setState({
          steps: json,
          step: json[0],
          sentences: sentences,
          sentence: sentences[0],
          isLoading: false
        })
      })
      .catch( console.log )
  }
 
  submitBack = () => {
    this.props.navigation.navigate('Search')
  }

  getSentences = (step) => {
    return this.state.steps[step].text.split(".").filter(s => s != "")
  }

  sentenceNext = () => {
    if (this.state.sentenceIndex < this.state.sentences.length - 1) {
      this.setState({sentenceIndex: this.state.sentenceIndex + 1})
    } else if (this.state.sentenceIndex === this.state.sentences.length - 1 && this.state.stepIndex < this.state.steps.length - 1) {
      let sentences = this.getSentences(this.state.stepIndex + 1)
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
      let sentences = this.getSentences(this.state.stepIndex - 1)
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

          <ButtonModal 
            sentencePrev={this.sentencePrev} 
            sentenceNext={this.sentenceNext} 
            submitBack={this.submitBack}
          />

          <ScrollView style={{margin: 5}}>
            <View style={styles.ingredList}>
              {this.state.step.ingredients.map( i, index => { 
                return( 
                  <View style={styles.ingredContainer} key={i.image_url+index}> 
                    <Image source={{uri: ingredUrl + i.image_url}} style={styles.ingredImg} />
                    <Text style={styles.ingredText}>{i.us_amount} {i.us_unit} {i.name}</Text>
                  </View>
                )
              })}
            </View>
          </ScrollView>

          <View style={{height:"auto"}}>
            <View style={{...styles.ingredList}}>
              <Text style={styles.stepText}>{sentence}{sentence.slice(-1) === "." ? null : "."}</Text>
            </View>
            
          </View>

        </View>
      )
    }
  }
}
// <Button onPress={this.sentencePrev} title={'<'} color={"#DDD"} />
// <Button onPress={this.sentenceNext} title={'>'} color={"#DDD"} />



// <Text>Ready in {potato[recipe]['readyInMinutes']} min</Text>