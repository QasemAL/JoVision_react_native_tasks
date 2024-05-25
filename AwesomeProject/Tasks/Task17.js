import React, { Component, useState } from 'react';
import {View , Text , Button} from 'react-native';



const Task17 = () =>{


const [ShowName, SetShowName] = useState(false);

const toggleName = () =>{
    SetShowName(!ShowName);
}

return(
<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Button title={ShowName ? 'Show':'Hide'} onPress={toggleName}> </Button>
 
 {ShowName && <Text>Qasem Qudah</Text>}

</View>
);


}


export default Task17;