import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './navigation';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
})

export default App;
