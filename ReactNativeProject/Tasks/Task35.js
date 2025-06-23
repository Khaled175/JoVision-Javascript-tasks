import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@user_profile_data';

const Task35 = () => {
    const [name, setName]       = useState('');
    const [age, setAge]         = useState('');
    const [country, setCountry] = useState('');
    const [statusMessage, setStatusMessage] = useState('App loaded');
    const [isLoading, setIsLoading]         = useState(true);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                setIsLoading(true);
                const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);

                if(jsonValue !== null) {
                    const storedData        = JSON.parse(jsonValue);
                    const storedTimestamp   = new Date(storedData.timestamp);
                    const currentTime       = new Date();

                    const timeDifference    = currentTime.getTime() - storedTimestamp.getTime();
                    const oneMinuteInMillis = 60 * 1000;

                    if (timeDifference < oneMinuteInMillis && timeDifference >= 0) {
                        setName(storedData.name || '');
                        setAge(storedData.age || '');
                        setCountry(storedData.country || '');
                        setStatusMessage('Previous data loaded (less than 1 minute old).');
                    } else {
                        setStatusMessage('Found old data (more than 1 minute old), not loaded.');
                    }
                } else {
                    setStatusMessage('Found old data (more than 1 minute old), not loaded.');
                }
            } catch(e) {
                console.error('Error loading data from AsyncStorage:', e);
                setStatusMessage('Error loading previous data.');
                Alert.alert('Error', 'Failed to load data from storage.');
            } finally {
                setIsLoading(false);
            }
        };

        loadUserData();
    }, []);

    const handleSubmit = async () => {
        if (!name.trim() || !age.trim() || !country.trim()) {
            Alert.alert('Missing Info', 'Please fill in all fields.');
            return;
        }

        const userData = {
            name:       name.trim(),
            age:        age.trim(),
            country:    country.trim(),
            timestamp:  new Date().toISOString(),
        };

        try {
            const jsonValue = JSON.stringify(userData);
            await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
            setStatusMessage(`Data saved at ${new Date().toLocaleTimeString()}.`);
            Alert.alert('Success', 'Data Saved to local storage!');
        } catch (e) {
            console.error('Error saving data to AsyncStorage:', e);
            setStatusMessage('Error saving data.');
            Alert.alert('Error', 'Failed to save data to storage.');
        }
    };

    return (
        <View style = {styles.container}>
            <Text style = {styles.headerText}>User Profile Data</Text>

            {isLoading ? (
                <View style = {styles.loadingContainer}>
                    <ActivityIndicator size = "large" color = "#0000ff" />
                    <Text style = {styles.loadingText}>Loading data..</Text>
                </View>
            ) : (
                <>
                    <TextInput
                        style = {styles.input}
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="words"
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder="Age"
                        value={age}
                        onChangeText={setAge}
                        autoCapitalize="numeric"
                    />
                    <TextInput
                        style = {styles.input}
                        placeholder="Country"
                        value={country}
                        onChangeText={setCountry}
                        autoCapitalize="words"
                    />

                    <Button title="Submit" onPress={handleSubmit} color="#007bff" />
                </>
            )}

            <Text style = {styles.statusText}>{statusMessage}</Text>
        </View>
    );
};

const colors = {
  background: '#f9f9f9',
  primary: '#007bff',
  textDark: '#333',
  textLight: '#666',
  inputBorder: '#ccc',
  inputBackground: '#fff',
  statusText: '#4CAF50',
  errorText: '#dc3545',
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    color: colors.textDark,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderColor: colors.inputBorder,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 18,
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
    width: '90%',
  },
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    color: colors.textLight,
    fontSize: 18,
    marginTop: 10,
  },
  statusText: {
    color: colors.textLight,
    fontSize: 16,
    marginTop: 30,
    textAlign: 'center',
  },
});

export default Task35;
