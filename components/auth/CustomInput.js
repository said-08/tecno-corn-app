import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, security, icon}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={`Enter your ${placeholder}`} 
        style={styles.input}
        secureTextEntry={security}
      >
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 50
  }
})

export default CustomInput