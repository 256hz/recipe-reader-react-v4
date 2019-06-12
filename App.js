import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator.js'

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
