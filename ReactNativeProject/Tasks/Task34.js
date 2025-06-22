import { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import TimeDisplay  from '../Components/TimeDisplay';

const Task34 = () => {
    const [showTimeComponent, setShowTimeComponent] = useState(true);

    const toggleTimeComponent = () => {
        setShowTimeComponent(prev => !prev);
    };

    return (
        <View style = {styles.container}>
            <Text style = {styles.mainHeaderText}>Custom Hook for Time & Date:</Text>

            {showTimeComponent && <TimeDisplay />}

            <Button
                title   = {showTimeComponent ? 'Hide Time' : 'Show Time'}
                onPress = {toggleTimeComponent}
                color   = "#841584"
            />

            <Text style = {styles.instructionsText}>
                Use the button to the time component.
                Check your console logs to see
                `&quot`Interval cleared to prevent memory leak.`&quot` when the component hides.
            </Text>
        </View>
    );
};

const colors = {
    background: '#f0f4f8',
    textDark: '#2c3e50',
    textLight: '#7f8c8d',
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        paddingTop: 50,
    },
    instructionsText: {
        color: colors.textLight,
        fontSize: 14,
        marginTop: 30,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    mainHeaderText: {
        color: colors.textDark,
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Task34;
