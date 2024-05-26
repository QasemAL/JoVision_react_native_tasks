import React, { Component, useState } from 'react';
import {StyleSheet,View , Text , Button} from 'react-native';



const Task17 = () =>{


const [ShowName, SetShowName] = useState(false);

const toggleName = () =>{
    SetShowName(!ShowName);
}

return(
<View style = {style.containers}>
<Button title={ShowName ? 'Show':'Hide'} onPress={toggleName}> </Button>
 
 {ShowName && <Text>Qasem Qudah</Text>}

</View>
);


}


const style = StyleSheet.create({
    containers: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Task17;