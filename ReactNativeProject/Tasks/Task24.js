import React, { useState, useRef } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import MyFunctionPage_Task24 from '../components/MyFunctionPage_Task24';

const Task24 = () => {
    const [parentInputText, setParentInputText] = useState("");
    const [showMyFunctionComponent, setShowMyFunctionComponent] = useState(false);

    const ref = useRef(null);

    const handleParentTextInputChange = (text) => {
        setParentInputText(text);
        
        if (showMyFunctionComponent && ref.current) {
            ref.current.updateText(text);
        }
    };

    const toggleMyFunctionComponent = () => {
        if (!showMyFunctionComponent && ref.current) {
            ref.current.updateText(parentInputText);
        }
        setShowMyFunctionComponent(!showMyFunctionComponent);
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
                title   = {showMyFunctionComponent ? "Hide" : "Show"}
                onPress = {toggleMyFunctionComponent}
            />

            {showMyFunctionComponent && (
                <MyFunctionPage_Task24 ref={ref} />
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

export default Task24;