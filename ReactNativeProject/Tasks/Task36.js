import { View, Text, ScrollView, StyleSheet } from 'react-native';

function generateRandomWord(length) {
	let result = '';
	const characters = 'abcdefghijklmnopqrstuvwxyz';
	for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

const Task36 = () => {
    const textComponents = [];
    for (let i = 0; i < 100; i++) {
        const sentenceLength = Math.floor(Math.random() * 5) + 3;
        let sentence = '';
        for (let j = 0; j < sentenceLength; j++) {
            sentence += generateRandomWord(Math.floor(Math.random() * 6) + 4);
            if (j < sentenceLength - 1) {
                sentence += ' ';
            }
        }

        textComponents.push(
        <Text key = {i} style = {styles.itemText}>
        {`item ${i + 1}: ${sentence}.`}
        </Text>);
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.headerText}>Long List of Random Text</Text>

            <ScrollView contentContainerStyle = {styles.scrollViewContent}>
                {textComponents}
            </ScrollView>

            <Text style = {styles.footerText}>Scroll down to see all 100 items!</Text>
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

export default Task36;
