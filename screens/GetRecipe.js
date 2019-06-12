import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Button,
    Text,
    TextInput,
    View,
} from 'react-native';
import styles from './styles/styles.js'

export default class GetRecipe extends React.Component {
    constructor(props) {
        super(props)
        this.state={ text: ''}
    }

    submitSearch = (text) => {
        (this.state.text === '')
            ? alert ('Please enter a food to start')
            : this.props.navigation.navigate('Results', {text: this.state.text})
    }

    render() {
        return (
            <View
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
                <View>
                    <Text style={styles.titleText}>Recipe Reader V0.2</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={ text => this.setState({text})}
                        placeholder={'What would you like to make?'}
                        value={this.state.text}
                    />
                    <Button
                        onPress={_ => this.submitSearch(this.state.text)}
                        title={"Search"}
                        color={"#7caa2d"}
                        width={10}
                        accessibilityLabel="Search for a Recipe"
                    />
                </View>
            </View>
        );
    }
}