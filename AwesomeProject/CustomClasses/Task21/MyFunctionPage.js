import React, { useEffect } from 'react';
import { View, Text ,StyleSheet } from 'react-native';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage loaded');
    return () => {
      console.log('MyFunctionPage unloaded');
    };
  }, []);

  return (
    <View style = {style.containers}>
      <Text>This is MyFunctionPage</Text>
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