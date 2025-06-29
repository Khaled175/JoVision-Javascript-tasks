import { Button, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Screen02 = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.screenText}>Screen 2</Text>
            <View style = {styles.buttonContainer}>
                <Button title = "Go to Screen 1" onPress={() => navigation.navigate('Screen1')} color="#D32F2F" />
                <Button title = "Go to Screen 3" onPress={() => navigation.navigate('Screen3')} color="#1976D2" />
                <Button title = "Go to Screen 4" onPress={() => navigation.navigate('Screen4')} color="#F57C00" />
            </View>
        </View>
    );
};

Screen02.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const colors = {
    container: '#E8F5E9',
    text: '#388E3C',
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        gap: 10,
        width: '60%',
    },
    container: {
        alignItems: 'center',
        backgroundColor: colors.container,
        flex: 1,
        justifyContent: 'center',
    },
    screenText: {
        color: colors.text,
        fontSize: 48,
        fontWeight: 'bold',
    },
});

export default Screen02;
