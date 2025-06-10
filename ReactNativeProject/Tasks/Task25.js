import React, { useState, useRef } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import MyClassPage_Task25 from '../components/MyClassPage_Task25';

const Task25 = () => {
    const [parentInputText, setParentInputText] = useState("");
    const [showMyClassComponent, setShowMyClassComponent] = useState(false);

    const ref = useRef(null);

    const handleParentTextInputChange = (text) => {
        setParentInputText(text);

        if (showMyClassComponent && ref.current) {
            ref.current.updateText(text);
        }
    };

    const toggleMyClassComponent = () => {
        if (!showMyClassComponent && ref.current) {
            ref.current.updateText(parentInputText);
        }
        setShowMyClassComponent(!showMyClassComponent);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.parentLabel}>Type text for child component:</Text>
            <TextInput
                style           = {styles.parentTextInput}
                onChangeText    = {handleParentTextInputChange}
                value           = {parentInputText}
                placeholder     = "Type here.."
            />

            <Button
                title   = {showMyClassComponent ? "Hide" : "Show"}
                onPress = {toggleMyClassComponent}
            />

            {showMyClassComponent && (
                <MyClassPage_Task25 ref={ref} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    parentLabel: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
        fontWeight: 'bold',
    },
    parentTextInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '90%',
        marginBottom: 20,
        backgroundColor: '#fff',
    },
});

export default Task25;