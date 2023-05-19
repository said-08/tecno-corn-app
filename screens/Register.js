import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

class Register extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      name: ""
    }
  }

  onSingUp(){
    
  }

  render () {
    return (
      <View>
        <TextInput
          placeholder="Name"
          onChangeText={(name) => this.setState({ name })}
        />

        <TextInput
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={entry}
          onChangeText={(pass) => this.setState({ pass })}
        />

        <Button
        onPress={()=>this.onSingUp()}
        title='Sing Up'/>
      </View>
    );
  }
}

export default Register