import React from "react";
import { View, Text ,StyleSheet,TextInput } from "react-native";

class MyClassPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    console.log('MyClassPage loaded');
  }

  componentWillUnmount() {
    console.log('MyClassPage unloaded');
  }

  handleTextChange = (newText) => {
    this.setState({ text: newText });
    this.props.onTextChange(newText);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>This is MyClassPage</Text>
        <TextInput
          style={{ borderWidth: 1 }}
          value={this.state.text}
          onChangeText={this.handleTextChange}
          placeholder="Name"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyClassPage;