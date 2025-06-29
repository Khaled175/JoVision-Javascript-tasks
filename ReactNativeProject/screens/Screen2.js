import { View, Text, StyleSheet } from 'react-native';

const Screen2 = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.screenText}>Screen 2</Text>
        </View>
    );
};

const colors = {
    container: '#E8F5E9',
    text: '#388E3C',
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

export default Screen2;
