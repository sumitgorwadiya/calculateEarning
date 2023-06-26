import {StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
