import { View, Text, StyleSheet } from 'react-native';

const Screen4 = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.screenText}>Screen 4</Text>
        </View>
    );
};

const colors = {
    container: '#FFF3E0',
    text: '#F57C00',
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

export default Screen4;
