import React, { useState } from 'react';
import { View, Button ,StyleSheet } from 'react-native';
import MyFunctionPage from '../CustomClasses/Task21/MyFunctionPage';


const Task21 = () => {
  const [showMyFunctionPage, setShowMyFunctionPage] = useState(false);

  const toggleMyFunctionPage = () => {
    setShowMyFunctionPage(!showMyFunctionPage);
  };

  return (
    <View style = {style.containers}>
      <Button title="Show" onPress={toggleMyFunctionPage} />
      {showMyFunctionPage && <MyFunctionPage />}
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

export default Task21;