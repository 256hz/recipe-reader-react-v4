import {StyleSheet, Platform} from 'react-native'

const green = "#4fb177"
const blue = "#498ab8"
const yellow = "rgb(248,200,8)"
// const yellow = "#f8d621"
const red = "#b40009"
const lightGrey = '#fefefe'

export default StyleSheet.create({

    buttonBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        marginVertical: '2%',
        // marginHorizontal: '1%',
        height: '8%',
    },

    buttonFwdBack: {
        margin: 5,
        width: 50, 
        height: 50, 
        backgroundColor: green,
        color: "white",
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
        backgroundColor: green,
        margin: 7,
        width: 100, 
        justifyContent: "center",
        textAlign: "center",
        height: 50,
        borderRadius: 25,
    },

    buttonText: {
        fontSize: 30,
        color: 'white',
        textAlign: "center",
        fontFamily: "Title",
    },

    container: {
        flex: 1,
        backgroundColor: yellow,
    },

    contentContainer: {
        paddingTop: 30,
    },

    ingredContainer: {
        flex: -1,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 120,
        margin: 5,
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
        // marginTop: 30, 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: "hidden",
        backgroundColor: 'white',
    },

    ingredText: {
        fontSize: 18,
        fontFamily: 'Body',
        textAlign: 'center',
    },

    logo: {
        width: '100%',
        height: 'auto',
        resizeMode: 'contain'
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
        color: lightGrey,
        backgroundColor: red,
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
        color: lightGrey,
        backgroundColor: green,
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
        justifyContent: 'flex-start',
    },

    titleText: {
        fontFamily: "Title",
        fontSize: 60,
        textAlign: 'center',
        marginTop: 35,
        marginBottom: 10,
        color: lightGrey,
        backgroundColor: green,
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