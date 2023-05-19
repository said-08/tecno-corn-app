import { View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import compost from '../assets/compost.jpg'
import CustomInput from '../components/auth/CustomInput'
import CustomButton from '../components/CustomButton'
import { useFonts } from 'expo-font'

const Login = () => {
  const {height} = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    Quicksand: require('../assets/fonts/Quicksand-Bold.ttf')
  });

  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const onLogInPress = () => {
    console.warn('sfjaiaosdoa')
  }

  const onForgotPassPress = () => {
    console.warn('cottra olvidada')
  }

  return (
    <ImageBackground style={styles.image} source={compost} resizeMode={"cover"}>
      <View style={styles.root}>
        <Image
          source={logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text
          style={{
            fontFamily: "Quicksand",
            color: "white",
            fontSize: 30,
            marginBottom: 50,
          }}
        >
          TecnoCorn
        </Text>
        <CustomInput
          placeholder={"Username or email"}
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder={"Password"}
          value={password}
          setValue={setpassword}
          security={true}
        />
        <CustomButton text={"Log In"} onPress={onLogInPress} />
        <CustomButton
          text={"Forgot Password"}
          onPress={onForgotPassPress}
          type="TERTIARY"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },  
  logo:{
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    marginTop: 50,
  },
  image:{
    flex: 1,
    justifyContent: 'center'
  }
}) 

export default Login