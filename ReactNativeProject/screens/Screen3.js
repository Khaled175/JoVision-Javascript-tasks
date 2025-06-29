import { View, Text, StyleSheet } from 'react-native';

const Screen3 = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.screenText}>Screen 3</Text>
        </View>
    );
};

const colors = {
    container: '#E3F2FD',
    text: '#1976D2',
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

export default Screen3;
