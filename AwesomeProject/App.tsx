import React, { Component } from 'react';
import {StyleSheet,View , Text , Button} from 'react-native';
import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';
import Task18 from './Tasks/Task18';
// This where everything will be rendered to the screen

export default class App extends Component {
 

    render() {
        return (
    
      <View style = {style.containers}>
        {/*<Task16></Task16>*/}
        {/*<Task17></Task17>*/}
        <Task18 ></Task18>
        </View>
    
     
      );
    }
}

    
const style = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});