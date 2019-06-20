import * as Speech from 'expo-speech';
import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import KeepScreenOn from 'react-native-keep-screen-on'
import Loading from '../components/Loading'
import styles from '../styles/styles'

const pan = require('../assets/images/pan.png')
const enjoy = {"id":0, "recipe_id":0, "text": "Enjoy!", "step_no": 99, "spoon_ids": [], "equipment_ids": [] }
const api = 'https://recipe-reader-rails.herokuapp.com/api/v1/'
const ingredUrl = 'https://spoonacular.com/cdn/ingredients_250x250/'
const equipUrl = 'https://spoonacular.com/cdn/equipment_250x250/'

export default class ShowRecipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // id: 224260,
      id: this.props.navigation.state.params.id,
      imageUrl: this.props.navigation.state.params.imageUrl,
      steps: {},
      step: {},
      stepIndex: 0,
      sentences: "",
      sentenceIndex: 0,
      isLoading: true,
    }
  }

  async componentDidMount() {
    // console.log('ShowRecipe compDidMount, imageUrl:', this.state.imageUrl)
    if (this.state.id !== 0) {
      let show = await Promise
      .resolve( this.getSteps(this.state.id) )
      .then( this.load() )
    }
    // KeepScreenOn.setKeepScreenOn(true)
  }

  componentWillUnmount() {
    // KeepScreenOn.setKeepScreenOn(false)
  }

  load = () => {
    setTimeout(_ => {
      this.setState({isLoading: false})
    }, 500)
  }

  getSteps = (id) => {
    fetch(api + 'recipes/' + id + '/steps')
      .then( res => res.json() )
      .then( json => {
        json.push(enjoy)  
        let sentences = json[0].text.split(".").filter(s => s != "")
        this.setState({
          steps: json,
          step: json[0],
          sentences: sentences,
          sentence: sentences[0],
        })
        // console.log('state set:', this.state)
      })
      .catch( console.log )
  }
 
  submitBack = () => {
    this.speak('stop')
    this.props.navigation.navigate('Ingredients', {id: this.state.id})
  }

  getSentences = (step) => {
    return this.state.steps[step].text.split(".").filter(s => s != "")
  }

  async speak(action, sentence) {
    switch (action) {
      case 'play':
        if (this.state.sentenceIndex === 0) {
          Speech.speak("¨.", {language: 'en-GB'})
        }
        Speech.speak(sentence, {language: 'en-GB'})
        break;
      case 'check':
        return Speech.isSpeakingAsync()
      case 'stop':
        Speech.stop()
        return
      default:
        return
    }
  }

  sentenceNext = () => {
    this.speak('stop')
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
    this.speak('stop')
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
      this.props.navigation.navigate('Ingredients', {id: this.state.id})
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    } else if (this.state.sentenceIndex === this.state.sentences.length - 1 && this.state.stepIndex === this.state.steps.length - 1) {
      
      // If on final step, show all done screen
      let sentence = "You're all done, enjoy!"
      this.speak('check') 
        ? this.speak('stop').then(this.speak('play', sentence))
        : this.speak('play', sentence)
      return(
        <View style={{...styles.container, alignContent: 'center', alignItems: 'center'}}>
          <View style={{height:90}} />
          <View style={{width:'100%'}}>
            <Text style={styles.titleText}>You're done - enjoy!</Text>
          </View>
          <View style={{height:20}} />
          <View style={styles.recipeCard}>
            <Image style={{width: 312, height: 231}} source={{uri: this.state.imageUrl}} />
          </View>
          <View style={{height:123}} />
          <View style={{...styles.buttonBottom, width: '100%'}}>
            <TouchableOpacity style={{...styles.buttonFwdBack}} onPress={this.sentencePrev}>
              <Text style={{textAlign: 'center', color: 'white'}}>{'<'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonNav} onPress={this.submitBack}>
              <Text style={styles.buttonText}>BACK</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.buttonFwdBack, ...styles.disabled}}>
              <Text style={{textAlign: 'center', color: 'white'}}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      
      // Show recipe steps
      let sentence = this.state.sentences[this.state.sentenceIndex]
      let ingredients = this.state.step.ingredients
      this.speak('check') 
        ? this.speak('stop').then(this.speak('play', sentence))
        : this.speak('play', sentence)
      // console.log({ingredients})
      return( 
        <View style={styles.container}> 

          {ingredients && ingredients.length > 0 
            ? (
                <ScrollView style={{marginTop: 5, marginHorizontal: 5, height: '60%'}}>
                  <View style={{height:25}}/>
                  <View style={styles.ingredList}>
                    {ingredients.map( (i, index) => { 
                      return( 
                        <View style={styles.ingredContainer} key={i.image_url+index}> 
                          <Image source={{uri: ingredUrl + i.image_url}} style={styles.ingredImg} />
                          <Text style={styles.ingredText}>{i.orig_string}</Text>
                        </View>
                      )
                    })}
                  </View>
                </ScrollView>
              )
            : (
                <ScrollView style={{marginTop: 5, marginHorizonal: 5, height: '60%'}}>
                  <View style={{height:100}} />
                  <View style={{...styles.ingredList, backgroundColor:"rgb(248,200,8)"}}>
                    <Image source={pan} style={{height:230, resizeMode:'contain'}} resizeMethod="resize"/>
                  </View>
                </ScrollView>
              )
            }


          <ScrollView style={{marginBottom: 5, marginHorizontal: 15, height: '20%'}}>
            <View style={{minHeight: 150}}>
              <View>
                <View style={{height:10}} />
                <Text style={styles.stepText}>
                  {sentence && sentence}
                  {
                    sentence && (sentence.slice(-1) === "." || sentence.slice(-1) ===  '!' || sentence.slice(-1) ===  '?') ? null : "."
                  }
                </Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.buttonBottom}>
            <TouchableOpacity style={{...styles.buttonFwdBack}} onPress={this.sentencePrev}>
              <Text style={{textAlign: 'center', color: 'white'}}>{'<'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonNav} onPress={this.submitBack}>
              <Text style={styles.buttonText}>BACK</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.buttonFwdBack}} onPress={this.sentenceNext}>
              <Text style={{textAlign: 'center', color: 'white'}}>{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } 
  }
}

// <ButtonModal 
// sentencePrev={this.sentencePrev} 
// sentenceNext={this.sentenceNext} 
// submitBack={this.submitBack}
// />

// <Button onPress={this.sentencePrev} title={'<'} color={"#DDD"} />
// <Button onPress={this.sentenceNext} title={'>'} color={"#DDD"} />



// <Text>Ready in {potato[recipe]['readyInMinutes']} min</Text>