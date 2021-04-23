import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FindBreakfast from './app/breakfasts/screens/FindBreakfast'

export default function App() {
  return (
    <View style={styles.container}>
      <FindBreakfast/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

    alignItems: 'flex-start'
  },
});
