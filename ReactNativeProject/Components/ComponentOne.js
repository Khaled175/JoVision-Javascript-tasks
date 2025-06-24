import {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import TextContext from '../contexts/TextContext';

class ComponentOne extends Component {
    static contextType = TextContext;

    render() {
        const {sharedText} = this.context;

        return (
            <View style={styles.componentOneContainer}>
                <Text style={styles.componentOneText}>
                    Shared Text: {sharedText || 'Type above!'}
                </Text>
            </View>
        );
    }
}

const colors = {
    background: '#e3f2fd',
    border: '#90caf9',
    text: '#1565c0',
};

const styles = StyleSheet.create({
    componentOneContainer: {
        alignItems: 'center',
        backgroundColor: colors.background,
        borderColor: colors.border,
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: 'center',
        marginVertical: 5,
        minHeight: 50,
        padding: 10,
    },
    componentOneText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
});

export default ComponentOne;
