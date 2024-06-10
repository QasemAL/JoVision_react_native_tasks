import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MyFunctionPage from '../CustomClasses/Task24/MyFunctionPage';

const Task24 = () => {
  const textRef = useRef();

  const handleTextChange = (newText) => {
    if (textRef.current) {
      textRef.current.updateText(newText);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
       style={{ borderWidth: 1 }}
        placeholder="Enter text"
        onChangeText={handleTextChange}
      />
      <MyFunctionPage ref={textRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task24;