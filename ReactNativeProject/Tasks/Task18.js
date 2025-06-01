import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Task18 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => 
    {
      setIsLoading(false); 
    },
    5000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <View style={styles.container}>
      {isLoading ? ( 
        <View style={styles.loadingContent}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <Text style={styles.nameText}>Khaled</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#555',
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Task18;