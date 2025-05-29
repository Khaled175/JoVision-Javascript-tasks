import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const Task16 = () => {
  const [showName, setShowName] = useState(false);

  const toggleName = () => {
    setShowName(!showName);
  };

  return (
    <View style={styles.container}>
      <Button
        title={showName ? 'Hide Name' : 'Show Name'}
        onPress={toggleName}
        accessibilityLabel={showName ? 'Tap to hide your name' : 'Tap to show your name'}
      />
      {showName && <Text>Khaled</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    marginTop: 20,
  },
});

export default Task16;
