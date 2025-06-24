import React, { useCallback, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';


function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const Task37 = () => {
    const [refreshing, setRefreshing]           = useState(false);
    const [textComponents, setTextComponents]   = useState([]);

    const generateTextComponents = useCallback(() => {
        const newTextComponents = [];
        for (let i = 0; i < 100; i++) {
            const sentenceLength = Math.floor(Math.random() * 5) + 3;
            let sentence = '';
            for (let j = 0; j < sentenceLength; j++) {
                sentence += generateRandomWord(Math.floor(Math.random() * 6) + 4);
                if (j < sentenceLength - 1) {
                    sentence += ' ';
                }
            }

            newTextComponents.push(
            <Text key = {i} style = {styles.itemText}>
            {`item ${i + 1}: ${sentence}.`}
            </Text>);
        }
        setTextComponents(newTextComponents);
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        generateTextComponents();
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, [generateTextComponents]);

    React.useEffect(() => {
        generateTextComponents();
    }, [generateTextComponents]);

    return (
        <View style = {styles.container}>
            <Text style = {styles.headerText}>Pull-to-Refresh List</Text>

            <ScrollView
                contentContainerStyle = {styles.scrollViewContent}
                refreshControl={
                    <RefreshControl refreshing = {refreshing} onRefresh={onRefresh} />
                }
            >
                {textComponents}
            </ScrollView>

            <Text style = {styles.footerText}>Pull down to refresh the list!</Text>
        </View>
    );
};

const colors = {
  background: '#e8f5e9',
  textDark: '#2e7d32',
  textLight: '#4caf50',
  itemBackground: '#ffffff',
  itemBorder: '#c8e6c9',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50,
  },
  footerText: {
    color: colors.textLight,
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  headerText: {
    color: colors.textDark,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemText: {
    backgroundColor: colors.itemBackground,
    borderColor: colors.itemBorder,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.textDark,
    fontSize: 16,
    marginVertical: 4,
    padding: 10,
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
});

export default Task37;
