import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import MyClassPage_Task23 from '../components/MyClassPage_Task23';

const Task23 = () => {
    const [showMyClassComponent, setShowMyClassComponent] = useState(false);
    const [parentText, setParentText] = useState("");

    const toggleMyClassComponent = () => {
        setShowMyClassComponent(!showMyClassComponent);
    };

    const handleChildTextChange = (newText) => {
        setParentText(newText);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.parentText}>
                Text from Parent: {parentText}
            </Text>

            <Button
                title={showMyClassComponent ? "Hide" : "Show"}
                onPress={toggleMyClassComponent}
            />

            {showMyClassComponent && (
                <MyClassPage_Task23
                    onTextChange={handleChildTextChange}
                    initialText={parentText}
                />
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
    parentText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#007bff', // For parent text
        textAlign: 'center',
    },
});

export default Task23;