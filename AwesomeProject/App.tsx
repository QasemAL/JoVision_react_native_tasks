import React, { Component } from 'react';
import {StyleSheet,View , Text , Button} from 'react-native';
import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';
import Task18 from './Tasks/Task18';
import Task19 from './Tasks/Task19';
import Task20 from './Tasks/Task20';
import Task21 from './Tasks/Task21';
import Task22 from './Tasks/Task22';
import Task23 from './Tasks/Task23';
// This where everything will be rendered to the screen

export default class App extends Component {
 

    render() {
        return (
    
      <View style = {style.containers}>
        {/*<Task16></Task16>*/}
        {/*<Task17></Task17>*/}
        {/*<Task18></Task18>*/}
        {/*<Task19></Task19>*/}
        {/*<Task20></Task20>*/}
        {/*<Task21></Task21>*/}
        {/*<Task22></Task22>*/}
          <Task23></Task23>
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