import React, { useEffect ,useState } from 'react';
import { View, Text ,StyleSheet ,TextInput } from 'react-native';

const MyFunctionPage = ({onTextChange}) => {

  const [text, setText] = useState('');

  useEffect(() => {
    console.log('MyFunctionPage loaded');
    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  const handleTextChange  = (newText) =>{
setText(newText);
onTextChange(newText);
  }

  return (
    <View style = {style.containers}>
      <Text>This is MyFunctionPage</Text>
      <TextInput style ={{borderWidth:1}} value={text} onChangeText={handleTextChange} placeholder="Name"/>
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

export default MyFunctionPage;