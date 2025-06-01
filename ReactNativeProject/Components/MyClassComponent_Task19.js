import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassComponent_Task19 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from MyClassComponent_Task19!</Text>
        <Text style={styles.text}>(This is a Class Component for Task 19)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
});

export default MyClassComponent_Task19;