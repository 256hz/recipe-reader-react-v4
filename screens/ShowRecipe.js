// import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import ButtonModal from '../components/ButtonModal'
import Loading from '../components/Loading'
import styles from './styles/styles.js'

const api = 'https://recipe-reader-rails.herokuapp.com/api/v1/'
const ingredUrl = 'https://spoonacular.com/cdn/ingredients_250x250/'
const equipUrl = 'https://spoonacular.com/cdn/equipment_250x250/'

export default class ShowRecipe extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // id: 224260,
      id: this.props.navigation.state.params.id,
      steps: {},
      step: {},
      stepIndex: 0,
      sentences: "",
      sentenceIndex: 0,
      isLoading: true,
    }
  }

  async componentDidMount() {
    console.log('ShowRecipe compDidMount, id:', this.state.id)
    if (this.state.id !== 0) {
      let show = await Promise
      .resolve( true )
      .then( this.getSteps(this.state.id) )
      .then( this.load() )
    }
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
        let sentences = json[0].text.split(".").filter(s => s != "")
        this.setState({
          steps: json,
          step: json[0],
          sentences: sentences,
          sentence: sentences[0],
        })
        console.log('state set:', this.state)
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
      this.props.navigation.navigate('Ingredients', {id: this.state.id})
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />
    } else {
      let sentence = this.state.sentences[this.state.sentenceIndex]
      // console.log(this.state)
      return( 
        <View style={styles.container}> 

          <ScrollView style={{marginTop: 5, marginHorizontal: 5, height: '60%'}}>
            {this.state.step.ingredients.length > 0
              ? (<View style={styles.ingredList}>
                  {this.state.step.ingredients.map( (i, index) => { 
                    return( 
                      <View style={styles.ingredContainer} key={i.image_url+index}> 
                        <Image source={{uri: ingredUrl + i.image_url}} style={styles.ingredImg} />
                        <Text style={styles.ingredText}>{i.orig_string}</Text>
                      </View>
                    )
                  })}
                </View>)
              : (<View style={styles.ingredList}>
                  {this.state.step.equipment.map( (i, index) => { 
                    return( 
                      <View style={styles.ingredContainer} key={i.image_url+index}> 
                        <Image source={{uri: equipUrl + i.image_url}} style={styles.ingredImg} />
                        <Text style={styles.ingredText}>{i.name}</Text>
                      </View>
                    )
                  })}
                </View>)
            }
            {this.state.stepIndex === this.state.steps.length -1 
              && this.state.sentenceIndex == this.state.sentences.length -1
              && <Text style={styles.stepText}>Enjoy!</Text>
            }
          </ScrollView>

          <ScrollView style={{marginBottom: 5, marginHorizontal: 5, height: '20%'}}>
            <View style={{minHeight:150}}>
              <View>
                <Text style={styles.stepText}>{sentence}{sentence.slice(-1) === ("." || '!' || '?') ? null : "."}</Text>
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