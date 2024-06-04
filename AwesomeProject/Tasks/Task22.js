import React, { useState } from 'react';
import { View, Button ,StyleSheet ,Text } from 'react-native';
import MyFunctionPage from '../CustomClasses/Task22/MyFunctionPage';


const Task22 = () => {
  const [showMyFunctionPage, setShowMyFunctionPage] = useState(false);

  const [text,setText] = useState('');

  const toggleMyFunctionPage = () => {
    setShowMyFunctionPage(!showMyFunctionPage);
  };

  const handleTextChange = (newText) =>{
    setText(newText);
  }

  return (
    <View style = {style.containers}>
      <Button title="Show" onPress={toggleMyFunctionPage} />
      {showMyFunctionPage && <MyFunctionPage onTextChange={handleTextChange}  />}
      <Text>text from myfunctionpage = {text}</Text>
    </View>
  );
};

const style = StyleSheet.create({
    containers: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Task22;