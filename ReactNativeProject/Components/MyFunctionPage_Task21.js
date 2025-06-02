import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage_Task21 = () => {
  useEffect(() => {
    console.log('MyFunctionPage_Task21: Loaded (Mounted)!');

    return () => {
      console.log('MyFunctionPage_Task21: Unloaded (Unmounted)!');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from MyFunctionPage_Task21!</Text>
      <Text style={styles.text}>(Check your console for functional component lifecycle logs)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#d0e0ff', // Different color from class component
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default MyFunctionPage_Task21;