import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TextContext from '../contexts/TextContext';
import ComponentTwo from '../components/ComponentTwo';

const Task38 = () => {
    const [sharedText, setSharedText] = useState('');

    const contextValue = {
        sharedText,
        setSharedText,
    };

    return (
        <TextContext.Provider value={contextValue}>
            <View style={styles.container}>
                <Text style={styles.headerText}>Context API for State Sharing</Text>
                <Text style={styles.subHeaderText}>
                    Change text in any input, and all `&quot`Shared Text`&quot` fields will update.
                </Text>

                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <ComponentTwo instanceNumber={1} />
                    <ComponentTwo instanceNumber={2} />
                    <ComponentTwo instanceNumber={3} />
                    <ComponentTwo instanceNumber={4} />
                </ScrollView>
            </View>
        </TextContext.Provider>
    );
};

const colors = {
  background:       '#e0f2f7',
  textDark:         '#006064',
  textSecondary:    '#4db6ac',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
  },
  headerText: {
    color: colors.textDark,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  subHeaderText: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});

export default Task38;
