import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import MyFunctionPage_Task21 from '../components/MyFunctionPage_Task21';

const Task21 = () => {
  const [showMyFunctionComponent, setShowMyFunctionComponent] = useState(false);

  const toggleMyFunctionComponent = () => {
    setShowMyFunctionComponent(!showMyFunctionComponent);
  };

  return (
    <View style={styles.container}>
      <Button
        title={showMyFunctionComponent ? "Hide" : "Show"}
        onPress={toggleMyFunctionComponent}
      />

      {showMyFunctionComponent && <MyFunctionPage_Task21 />}
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

export default Task21;