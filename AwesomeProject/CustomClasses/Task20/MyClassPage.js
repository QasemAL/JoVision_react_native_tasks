import React from "react";
import { View, Text } from "react-native";

class MyClassPage extends React.Component{


    componentDidMount() {
        console.log('MyClassPage loaded');
      }
    
      componentWillUnmount() {
        console.log('MyClassPage unloaded');
      }

render(){

    return(
       <View>
        
        <Text>in MyClassPage</Text>

        </View>
    );
};

}


export default MyClassPage;