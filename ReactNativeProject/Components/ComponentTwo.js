import { useState, useContext} from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import ComponentOne from './ComponentOne';
import TextContext from '../contexts/TextContext';

const ComponentTwo = ({instanceNumber}) => {
    const { setSharedText } = useContext(TextContext);

    const [localInputText, setLocalInputText] = useState('');

    const handleTextChange = (text) => {
        setLocalInputText(text);
        setSharedText(text);
    };

    return (
        <View style={styles.componentTwoContainer}>
            <Text style={styles.instanceLabel}>Instance {instanceNumber}</Text>
            <TextInput
                style           = {styles.input}
                placeholder     = {`Type here for instance ${instanceNumber}...`}
                value           = {localInputText}
                onChangeText    = {handleTextChange}
                autoCapitalize  = "none"
            />
            <ComponentOne />
        </View>
    );
};

ComponentTwo.propTypes = {
    instanceNumber: PropTypes.number.isRequired,
};

const colors = {
    background:     '#fffde7',
    backgroundInput:'#fff',
    border:         '#ffeb3b',
    borderInput:    '#cddc39',
    label:          '#fbc02d',
    shadow:         '#000',
};

const styles = StyleSheet.create({
    componentTwoContainer: {
        alignItems: 'center',
        backgroundColor: colors.background,
        borderColor: colors.border,
        borderRadius: 10,
        borderWidth: 1,
        elevation: 3,
        marginVertical: 10,
        padding: 15,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        width: '95%',
    },
    input: {
        backgroundColor: colors.backgroundInput,
        borderColor: colors.borderInput,
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 16,
        height: 45,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '90%',
    },
    instanceLabel: {
        color: colors.label,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default ComponentTwo;
