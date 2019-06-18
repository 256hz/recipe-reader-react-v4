import {StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({

    buttonFwdBack: {
        width: 50, 
        height: 50, 
        backgroundColor: 'rgba(255,255,255,0.4)',
        color: "#f8cb03",
        borderRadius: 25,
        overflow: 'hidden',
        justifyContent: 'center',
    },

    buttonModal: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between", 
    },

    buttonNav: {
        backgroundColor: "#4fb177",
        marginVertical: 10,
        width: 100,
        justifyContent: "center",
        textAlign: "center",
        height: 50,
        borderRadius: 25,
    },

    buttonText: {
        fontSize: 30,
        color: '#fff', //'#f6ff74',
        textAlign: "center",
        fontFamily: "Title",
    },

    container: {
        flex: 1,
        backgroundColor: '#f8d621',
    },

    contentContainer: {
        paddingTop: 30,
    },

    ingredContainer: {
        flex: -1,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 120,
        marginVertical: 5,
        justifyContent: 'center',
        textAlign: "center",
        alignItems: 'center',
    },

    ingredImg: {
        minHeight: 80,
        minWidth: 80,
        maxHeight: 120,
        maxWidth: 120,
        height: 100,
        width: 100,
        resizeMode: "contain",
        // borderRadius: 50,
        // overflow: "hidden",
    },

    ingredList: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",
        flexWrap: 'wrap',
        padding: 5,
        // marginVertical: 30,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: '#fff',
    },

    ingredText: {
        fontSize: 18,
        fontFamily: 'Body',
        textAlign: 'center',
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

    recipeCardTitle: {
        backgroundColor: "white",
    },

    recipeTitleText: {
        fontFamily: "Title",
        fontSize: 45,
        textAlign: 'center',
        marginTop: 35,
        marginBottom: 10,
        color: '#fefefe',
        backgroundColor: "rgb(180,0,9)",
        ...Platform.select({
            ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -1.5 },
            shadowOpacity: 0.1,
            shadowRadius: 1.5,
            },
            android: {
            elevation: 10,
            },
        }),
    },

    resultsTitleText: {
        fontSize: 36,
        fontFamily: 'Title',
        textAlign: 'center',
        marginTop: 24,
        color: '#fefefe',
        backgroundColor: "#4fb177",
    },

    searchInput: {
        height: 40, 
        width: '100%',
        backgroundColor: 'white',
        textAlign: "center",
    },

    stepText: {
        fontSize: 24,
        fontFamily: 'Body',
        textAlign: "center",
    },

    titleText: {
        fontFamily: "Title",
        fontSize: 60,
        textAlign: 'center',
        marginTop: 35,
        marginBottom: 10,
        color: '#fefefe',
        backgroundColor: "#4fb177",
        ...Platform.select({
            ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -1.5 },
            shadowOpacity: 0.1,
            shadowRadius: 1.5,
            },
            android: {
            elevation: 10,
            },
        }),
    },







    // These styles are from the expo tabs example.  Leaving for reference

    // welcomeContainer: {
    //     alignItems: 'center',
    //     marginTop: 10,
    //     marginBottom: 20,
    // },

    // welcomeImage: {
    //     width: 100,
    //     height: 80,
    //     resizeMode: 'contain',
    //     marginTop: 3,
    //     marginLeft: -10,
    // },

    // getStartedContainer: {
    //     alignItems: 'center',
    //     marginHorizontal: 50,
    // },

    // homeScreenFilename: {
    //     marginVertical: 7,
    // },

    // codeHighlightText: {
    //     color: 'rgba(96,100,109, 0.8)',
    // },

    // codeHighlightContainer: {
    //     backgroundColor: 'rgba(0,0,0,0.05)',
    //     borderRadius: 3,
    //     paddingHorizontal: 4,
    // },

    // getStartedText: {
    //     fontSize: 17,
    //     color: 'rgba(96,100,109, 1)',
    //     lineHeight: 24,
    //     textAlign: 'center',
    // },

    // tabBarInfoContainer: {
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     ...Platform.select({
    //         ios: {
    //         shadowColor: 'black',
    //         shadowOffset: { width: 0, height: -3 },        
    //         shadowOpacity: 0.1,
    //         shadowRadius: 3,
    //         },
    //         android: {
    //         elevation: 20,
    //         },
    //     }),
    //     alignItems: 'center',
    //     backgroundColor: '#fbfbfb',
    //     paddingVertical: 20,
    // },

    // tabBarInfoText: {
    //     fontSize: 17,
    //     color: 'rgba(96,100,109, 1)',
    //     textAlign: 'center',
    // },

    // navigationFilename: {
    //     marginTop: 5,
    // },

    // helpContainer: {
    //     marginTop: 15,
    //     alignItems: 'center',
    // },

    // helpLink: {
    //     paddingVertical: 15,
    // },

    // helpLinkText: {
    //     fontSize: 14,
    //     color: '#2e78b7',
    // },

});