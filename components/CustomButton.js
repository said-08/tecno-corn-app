import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type = 'PRIMARY' }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '70%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40
  },
  container_PRIMARY:{
    backgroundColor: '#91C788',
  },
  container_TERTIARY: {
    
  },
  text:{
    fontWeight: 'bold',
    color: 'white'
  },
  text_TERTIARY:{
    color: 'white'
  }
})

export default CustomButton