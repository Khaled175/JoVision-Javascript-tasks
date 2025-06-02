import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import MyClassComponent_Task20 from '../components/MyClassComponent_Task20';

const Task20 = () => {
  const [showMyClassComponent, setShowMyClassComponent] = useState(false);

  const toggleMyClassComponent = () => {
    setShowMyClassComponent(!showMyClassComponent);
  };

  return (
    <View style={styles.container}>
      <Button
        title={showMyClassComponent ? "Hide" : "Show"}
        onPress={toggleMyClassComponent}
      />

      {showMyClassComponent && <MyClassComponent_Task20 />}
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
});

export default Task20;