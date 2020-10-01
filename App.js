
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pets from "./Pets"

export default function App() {
  return (
    <View style={styles.container}>
      <Pets />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
