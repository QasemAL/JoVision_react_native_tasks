import React, { Component } from 'react';
import {View , Text , Button} from 'react-native';
import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';
// This where everything will be rendered to the screen

export default class App extends Component {
 

    render() {
        return (
    
      /*<View style = {{alignItems : 'center',flex :1,justifyContent : 'center' }}>
        <Task16></Task16>
        </View>*/
     
        <View style = {{alignItems : 'center',flex :1,justifyContent : 'center' }}>
        <Task17></Task17>
        </View>
     
      );
    }


    
  
}


