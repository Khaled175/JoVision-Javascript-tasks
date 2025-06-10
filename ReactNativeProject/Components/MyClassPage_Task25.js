import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClassPage_Task25 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayText: "No text received from parent yet",
        };
    }

    updateText = (newText) => {
        this.setState({ displayText: newText });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.label}>Text received from Parent:</Text>
                <Text style = {styles.text}>{this.state.displayText}</Text>
                <Text style = {styles.componentNote}>
                    (This is the child class component, updated imperatively)
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#e0ffe0', 
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
        color: '#2e7d32',
        marginBottom: 10,
        textAlign: 'center',
    },
    componentNote: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});

export default MyClassPage_Task25;