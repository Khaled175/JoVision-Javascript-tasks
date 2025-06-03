import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MyFunctionPage_Task22 = ({ onTextChange, initialText }) => {
  const [inputText, setInputText] = useState(initialText || '');

  const handleTextChange = (text) => {
    setInputText(text);
    onTextChange(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit text here:</Text>
      <TextInput
        style = {styles.textInput}
        onChangeText = {handleTextChange}
        value = {inputText}
        placeholder = "Type something.."
      />
      <Text style={styles.componentText}>
        (This is the child functional component)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e0f7fa', //(for child component)
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%', // 80% of parent
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  componentText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default MyFunctionPage_Task22;