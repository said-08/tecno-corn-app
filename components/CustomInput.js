import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, security, icon}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={`Enter your ${placeholder}`} 
        style={styles.input}
        secureTextEntry={security}
        mode="flat"
      >
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  
  input: {
    height: 50,
    backgroundColor: 'transparent',
    width: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    paddingHorizontal: 10,
    marginVertical: 5,
    color: 'white',
  }
})

export default CustomInput