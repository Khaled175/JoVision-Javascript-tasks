/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import Task42 from './Tasks/Task42';

function App(): React.JSX.Element {

  return (
    <View style = {{ flex: 1}}>
      <Task42 />
    </View>
  );
}

export default App;
