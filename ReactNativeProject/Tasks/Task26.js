import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

const Task26 = () => {
  const [ipAddress, setIpAddress] = useState('N/A');
  const [isLoadingNonBlocking, setIsLoadingNonBlocking] = useState(false);
  const [isLoadingBlocking, setIsLoadingBlocking] = useState(false);
  const [blockingMessage, setBlockingMessage] = useState('');

  /**
  * Fetch the user's IP address non-blockingly using async/await.
  * The UI remains responsive during this request.
  */

  const fetchNonBlockingIP = async () => {
    setIsLoadingNonBlocking(true);
    setIpAddress('Fetching non-blocking IP..');
    try {
      const response  = await fetch('https://api.ipify.org/');
      const text      = await response.text();
      setIpAddress(`Non-blocking IP: ${text}`);
    } catch (error) {
      console.error('Error fetching non-blocking IP:', error);
      setIpAddress('Error fetching non-blocking IP');
    } finally {
      setIsLoadingNonBlocking(false);
    }
  };

  /**
  * Simulate a "blocking" UI request using .then() syntax.
  * It will disable all relevant UI interactions (buttons)
  * and show a message until the operation completes.
  * The underlying fetch call is still non-blocking.
  */

  const fetchBlockingIP = () => {
    setIsLoadingBlocking(true);
    setBlockingMessage('UI interaction locked: Fetching IP..');
    setIpAddress('Attempting to fetch IP..');

    fetch('https://api.ipify.org/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        setIpAddress(`Blocking IP: ${text}`);
      })
      .catch(error => {
        console.error('Error fetching blocking IP:', error);
        setIpAddress(`Error fetching blocking IP: ${error.message}`);
      })
      .finally(() => {
        setBlockingMessage('');
        setIsLoadingBlocking(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.ipText}>{ipAddress}</Text>

      <View style={styles.buttonWrapper}>
        <Button
          title={isLoadingNonBlocking ? "Loading.." : "Get Non-Blocking IP"}
          onPress={fetchNonBlockingIP}
          disabled={isLoadingNonBlocking || isLoadingBlocking}
          color={isLoadingNonBlocking ? "#ccc" : "#007bff"}
        />
        {isLoadingNonBlocking && <ActivityIndicator style={styles.activityIndicator} size="small" color="#007bff" />}
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title={isLoadingBlocking ? "Blocking.." : "Get Blocking IP (Simulated)"}
          onPress={fetchBlockingIP}
          disabled={isLoadingNonBlocking || isLoadingBlocking}
          color={isLoadingBlocking ? "#ccc" : "#dc3545"}
        />
        {isLoadingBlocking && <ActivityIndicator style={styles.activityIndicator} size="small" color="#dc3545" />}
      </View>

      {blockingMessage ? (
        <Text style={styles.blockingMessage}>{blockingMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  ipText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  activityIndicator: {
    marginLeft: 10,
  },
  blockingMessage: {
    marginTop: 20,
    fontSize: 18,
    color: '#dc3545',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Task26;