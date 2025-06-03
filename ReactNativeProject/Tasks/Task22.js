import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import MyFunctionPage_Task22 from '../components/MyFunctionPage_Task22';

const Task22 = () => {
  const [showMyFunctionComponent, setShowMyFunctionComponent] = useState(false);
  const [parentText, setParentText] = useState("");

  const toggleMyFunctionComponent = () => {
    setShowMyFunctionComponent(!showMyFunctionComponent);
  };

  const handleChildTextChange = (newText) => {
    setParentText(newText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.parentText}>
        Text from Parent: {parentText}
      </Text>

      <Button
        title={showMyFunctionComponent ? "Hide" : "Show"}
        onPress={toggleMyFunctionComponent}
      />

      {showMyFunctionComponent && (
        <MyFunctionPage_Task22
          onTextChange = {handleChildTextChange}
          initialText = {parentText}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  parentText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff', // for parent text
    textAlign: 'center',
  },
});

export default Task22;