import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setText } from '../redux/actions';

const ComponentOne = () => {
    const currentText = useSelector(state => state.text);

    const dispatch = useDispatch();

    const handleTextChange = (newText) => {
        dispatch(setText(newText));
    };

    return(
        <View style = {styles.container}>
            <Text style = {styles.label}>Text input (Redux State)</Text>
            <TextInput
                style           = {styles.input}
                placeholder     = "Type something here.."
                value           = {currentText}
                onChangeText    = {handleTextChange}
                autoCapitalize  = "none"
            />
            <Text style = {styles.display}>Current Redux Text: `&quot`{currentText || 'Empty'}`&quot`</Text>
        </View>
    );
};

const colors = {
    background: '#e0f7fa',    // Light blue
    border: '#80deea',        // Teal
    textPrimary: '#006064',   // Dark teal
    textSecondary: '#263238', // Dark gray
    inputBackground: '#ffffff',
    shadow: '#000',
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.background,
        borderColor: colors.border,
        borderRadius: 10,
        borderWidth: 1,
        elevation: 4,
        marginBottom: 20,
        padding: 20,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        width: '95%',
    },
    display: {
        color: colors.textPrimary,
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    input: {
        backgroundColor: colors.inputBackground,
        borderColor: colors.textSecondary,
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 18,
        height: 50,
        marginBottom: 15,
        paddingHorizontal: 15,
        width: '90%',
    },
    label: {
        color: colors.textSecondary,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ComponentOne;
