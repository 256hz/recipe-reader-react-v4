import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import RecipeSearch   from '../screens/RecipeSearch.js';
import SearchResults  from '../screens/SearchResults.js';
import ShowIngredients     from '../screens/ShowIngredients.js';
import ShowRecipe     from '../screens/ShowRecipe.js';

// class AuthLoadingScreen extends React.Component {
//   constructor() {
//     super();
//     this._bootstrapAsync();
//   }
//   // Fetch the token from storage then navigate to our appropriate place
//   _bootstrapAsync = async () => {
//     const userToken = await AsyncStorage.getItem('userToken');

//     // This will switch to the App screen or Auth screen and this loading
//     // screen will be unmounted and thrown away.
//     this.props.navigation.navigate(userToken ? 'App' : 'Auth');
//   };
//   // Render any loading content that you like here
//   render() {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator />
//         <StatusBar barStyle="default" />
//       </View>
//     );
//   }
// }
 
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Search:       RecipeSearch,
    Results:      SearchResults,
    Ingredients:  ShowIngredients,
    Show:         ShowRecipe,
  },
  {
    initialRouteName: 'Search'
  })
);


