import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ComponentOne from '../components/ComponentOne_40';

const Task40 = () => {
    const [showComponentOne, setShowComponentOne] = useState(true);

    const toggleComponentOne = () => {
        setShowComponentOne(prev => !prev);
    };

    return (
        <Provider store = {store}>
            <View style = {styles.container}>
                <Text style = {styles.headerText}>Redux State Persistence (Class Component)</Text>
                <Text style = {styles.subHeaderText}>
                    The text you type will persist in Redux even when the class component is unmounted.
                </Text>

                {showComponentOne && <ComponentOne />}

                <Button
                    title   = {showComponentOne ? 'Hide Component One' : 'Show Component One'}
                    onPress = {toggleComponentOne}
                    color   = "#841584"
                />

                {/* eslint-disable react/no-unescaped-entities */}
                <Text style={styles.instructionsText}>
                    Type something into the input field.
                    Then, press "Hide Component One".
                    Press "Show Component One`&quot` again, and the text will reappear because it's stored in Redux!
                </Text>
                {/* eslint-enable react/no-unescaped-entities */}
            </View>
        </Provider>
    );
};

const colors = {
    background: '#f0f4f8', // Light blue-gray
    textDark: '#2c3e50',   // Dark blue-gray
    textLight: '#7f8c8d',  // Gray
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
    headerText: {
        color: colors.textDark,
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    instructionsText: {
        color: colors.textLight,
        fontSize: 14,
        marginTop: 30,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    subHeaderText: {
        color: colors.textLight,
        fontSize: 16,
        marginBottom: 20,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
});

export default Task40;
