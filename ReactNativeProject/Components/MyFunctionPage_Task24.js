import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage_Task24 = forwardRef((props, ref) => {
  const [displayText, setDisplayText] = useState("No text received from parent yet");

  useImperativeHandle(ref, () => ({
    updateText: (newText) => {
      setDisplayText(newText);
    }
  }));

  return (
    <View style={styles.container}>
      <Text style = {styles.label}>Text received from Parent:</Text>
      <Text style = {styles.text}>{displayText}</Text>
      <Text style = {styles.componentNote}>
        (This is from the child functional component)
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff3e0', // Light orange for child comp
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d32f2f', // for received text
    marginBottom: 10,
    textAlign: 'center',
  },
  componentNote: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default MyFunctionPage_Task24;