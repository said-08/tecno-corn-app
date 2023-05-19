import { View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import logo from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import compost from '../assets/compost.jpg'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useFonts } from 'expo-font'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as SplashScreen from 'expo-splash-screen';
import { ScrollView } from 'react-native-gesture-handler'
import { BlurView } from 'expo-blur'

const Login = () => {
  const {height} = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    Quicksand: require('../assets/fonts/Quicksand-Bold.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); //Este useEffect que el splashScreen se quite
    }
    prepare();
  }, [])

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  

  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const onLogInPress = () => {
    console.warn('sfjaiaosdoa')
  }

  const onForgotPassPress = () => {
    console.warn('cottra olvidada')
  }

  if(!fontsLoaded) return null

  return (
    <View style={styles.root} onLayout={onLayout}>
        <Image style={[styles.image, StyleSheet.absoluteFill]} source={compost}/>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BlurView intensity={100}>
            <View style={styles.login}>
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

        <View style={styles.parentView}>
          <FontAwesome.Button
            style={styles.button}
            name="facebook"
            backgroundColor="#3b5998"
          >Facebook</FontAwesome.Button>

          <MaterialCommunityIcons.Button
            style={styles.button}
            name="gmail"
            size={24}
            color="white"
            backgroundColor="#F13B36"
          >Gmail</MaterialCommunityIcons.Button>
        </View>
            </View>
          </BlurView>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  login:{
    width: 340,
    height: 550,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  }, 
  logo:{
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  button: {
    width: 100,
    marginHorizontal: 5
  },
  parentView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}) 

export default Login