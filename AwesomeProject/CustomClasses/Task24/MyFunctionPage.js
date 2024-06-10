import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('');

  useImperativeHandle(ref, () => ({
    updateText: (newText) => setText(newText),
  }));

  return (
    <View style={styles.container}>
      <Text>This is MyFunctionPage</Text>
      <Text>{text}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyFunctionPage;