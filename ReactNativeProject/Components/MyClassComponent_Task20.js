import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassComponent_Task20 extends Component {
    componentDidMount() {
    console.log('MyClassComponent_Task20: Loaded (Mounted)!');
  }

    componentWillUnmount() {
    console.log('MyClassComponent_Task20: Unloaded (Unmounted)!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from MyClassComponent_Task20!</Text>
        <Text style={styles.text}>(Check your console for lifecycle logs)</Text>
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
    textAlign: 'center',
  },
});

export default MyClassComponent_Task20;