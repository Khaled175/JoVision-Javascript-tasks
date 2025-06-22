import { View, Text, StyleSheet } from 'react-native';
import useCurrentTime from '../hooks/useCurrentTime';

const TimeDisplay = () => {
    const currentTime = useCurrentTime();

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <View style = {styles.container}>
            <Text style = {styles.timeLabel}>Current Time:</Text>
            <Text style = {styles.timeText}>{formattedTime}</Text>
            <Text style = {styles.dateLabel}>Current Date:</Text>
            <Text style = {styles.dateText}>{formattedDate}</Text>
            <Text style = {styles.noteText}>(Updated by custom hook)</Text>
        </View>
    );
};

const colors = {
    background: '#e0f7fa',
    textPrimary: '#004d40',
    textSecondary: '#263238',
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.background,
        borderRadius: 15,
        elevation: 5,
        marginVertical: 20,
        padding: 20,
        shadowColor: colors.textSecondary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    dateLabel: {
        color: colors.textSecondary,
        fontSize: 18,
        marginBottom: 5,
    },
    dateText: {
        color: colors.textPrimary,
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
    },
    noteText: {
        color: colors.textLight,
        fontSize: 12,
        fontStyle: 'italic',
    },
    timeLabel: {
        color: colors.textSecondary,
        fontSize: 18,
        marginBottom: 5,
    },
    timeText: {
        color: colors.textPrimary,
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default TimeDisplay;
