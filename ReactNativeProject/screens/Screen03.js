import { Button, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Screen03 = ({ navigation }) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.screenText}>Screen 3</Text>
            <View style = {styles.buttonContainer}>
                <Button title = "Go to Screen 1" onPress={() => navigation.navigate('Screen1')} color="#D32F2F" />
                <Button title = "Go to Screen 2" onPress={() => navigation.navigate('Screen2')} color="#388E3C" />
                <Button title = "Go to Screen 4" onPress={() => navigation.navigate('Screen4')} color="#F57C00" />
            </View>
        </View>
    );
};

Screen03.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const colors = {
    container: '#E3F2FD',
    text: '#1976D2',
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

export default Screen03;
