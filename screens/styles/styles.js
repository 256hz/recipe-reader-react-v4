import React, {StyleSheet, Platform} from 'react-native'
import { hidden } from 'ansi-colors';

export default StyleSheet.create({
    titleText: {
        fontSize: 36,
        textAlign: 'center',
        marginTop: 175,
        color: '#e6df44',
        backgroundColor: "#7caa2d",
        ...Platform.select({
            ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            },
            android: {
            elevation: 20,
            },
        }),
    },

    resultsTitleText: {
        fontSize: 36,
        textAlign: 'center',
        marginTop: 25,
        color: '#e6df44',
        backgroundColor: "#7caa2d",
    },

    recipeCard: {
        padding: 5,
        margin: 5,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },

    searchInput: {
        height: 40, 
        backgroundColor: 'white'
    },

    container: {
        flex: 1,
        backgroundColor: '#e6df44',
    },

    contentContainer: {
        paddingTop: 30,
    },

    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },

    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },

    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },

    homeScreenFilename: {
        marginVertical: 7,
    },

    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },

    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },

    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },

    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -3 },        
            shadowOpacity: 0.1,
            shadowRadius: 3,
            },
            android: {
            elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },

    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },

    navigationFilename: {
        marginTop: 5,
    },

    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },

    helpLink: {
        paddingVertical: 15,
    },

    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },

});