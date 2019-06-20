import React from 'react';
import { Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/styles'

const logo = require('../assets/images/logo-title.png')
const titleScreen = require('../assets/images/splash.png')
const logoPot = require('../assets/images/logo-pot.png')

export default class RecipeSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state={ 
            text: '', 
            isLoading: true,
        }
    }

    async componentWillMount() {
        await this.load()
    }

    load = () => {
        setTimeout(_ => {
        this.setState({isLoading: false})
        }, 500)
    }
    
    submitSearch = () => {
        (this.state.text === '')
            ? alert ('Please enter a food to start')
            : this.props.navigation.navigate('Results', {text: this.state.text})
    }

    render() {
        return (
            <View>
                <View style={{height:80}} />
                <View style={{height:120}}>
                    <Image style={{...styles.logo, height: 125}} source={logo} resizeMethod="resize"/>
                </View>
                <View style={{height:50}} />
                <View style={{textAlign: "center", alignItems: "center"}}>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={ text => this.setState({text})}
                        placeholder={'What would you like to make?'}
                        value={this.state.text}
                    />
                    <View style={{height:10}} />
                    <TouchableOpacity
                        onPress={_ => this.submitSearch(this.state.text)}
                        style={styles.buttonNav}
                        title={"Search"}
                        accessibilityLabel="Search for a Recipe"
                    >
                        <Text style={styles.buttonText}>SEARCH</Text>
                    </TouchableOpacity>
                    <View style={{height:40}} />                    
                    <Image source={logoPot} style={{height:'54%', resizeMode:'contain'}} resizeMethod="resize"/>
                </View>
            </View>
        );
    }
}

// <TouchableOpacity
// onPress={_ => this.submitSearch(this.state.text)}
// style={{...styles.buttonNav, width: 125, backgroundColor: '#a6af24'}}
// title={"Search"}
// accessibilityLabel="Search for a Recipe"
// >
//  <Text style={{...styles.buttonText, color: "#eee"}}>PASTE URL</Text>
// </TouchableOpacity>