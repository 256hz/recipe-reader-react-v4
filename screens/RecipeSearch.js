import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Text, TextInput, View,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/styles.js'

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
            <View style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                <View style={{marginTop: 100}}/>
                <View>
                    <Text style={styles.titleText}>RECIPE READER</Text>
                </View>
                <View style={{marginTop: 50}}/>
                <View style={{textAlign: "center", alignItems: "center"}}>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={ text => this.setState({text})}
                        placeholder={'What would you like to make?'}
                        value={this.state.text}
                    />
                    <TouchableOpacity
                        onPress={_ => this.submitSearch(this.state.text)}
                        style={styles.buttonNav}
                        title={"Search"}
                        accessibilityLabel="Search for a Recipe"
                    >
                        <Text style={styles.buttonText}>SEARCH</Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 50}}/>

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