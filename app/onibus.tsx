import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OnibusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalhes do Ônibus</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
