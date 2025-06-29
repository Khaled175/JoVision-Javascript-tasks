import { View, Text, StyleSheet } from 'react-native';

const Screen1 = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.screenText}>Screen 1</Text>
        </View>
    );
};

const colors = {
    container: '#FFEBEE',
    text: '#D32F2F',
};

const styles = StyleSheet.create({
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

export default Screen1;
