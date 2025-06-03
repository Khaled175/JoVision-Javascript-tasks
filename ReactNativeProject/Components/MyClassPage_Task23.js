import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class MyClassPage_Task23 extends Component {
  constructor(props) 
  {
    super(props);

    this.state = {
      inputText: props.initialText || '',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.initialText !== prevState.inputText && nextProps.initialText !== undefined) {
      return { inputText: nextProps.initialText };
    }
    return null;
  }

  handleTextChange = (text) => {
    this.setState({ inputText: text });
    this.props.onTextChange(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Edit text here:</Text>
        <TextInput
          style = {styles.textInput}
          onChangeText = {this.handleTextChange}
          value = {this.state.inputText}
          placeholder = "Type something.."
        />
        <Text style={styles.componentText}>
          (This is the child class component)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffe0b2', // (for class component)
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

export default MyClassPage_Task23;