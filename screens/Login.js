import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import compost from "../assets/compost.jpg";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import * as SplashScreen from "expo-splash-screen";
// import { ScrollView } from 'react-native-gesture-handler'
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import SocialMediaButtons from "../components/SocialMediaButtons";

const Login = () => {
  const { height } = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    Quicksand: require("../assets/fonts/Quicksand-Bold.ttf"),
  });

  const navigation = useNavigation();

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync(); //Este useEffect que el splashScreen se quite
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const onLogInPress = () => {
    console.warn("sfjaiaosdoa");
    navigation.navigate("HomeStack");
  };

  const onForgotPassPress = () => {
    navigation.navigate("ForgotPassword");
  };

  const onRegisterPress = () => {
    navigation.navigate("Register");
  }

  if (!fontsLoaded) return null;

  return (
    <View style={styles.root} onLayout={onLayout}>
      <Image style={[styles.image, StyleSheet.absoluteFill]} source={compost} />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: "#52734D",
          position: "absolute",
          // borderRadius: "50%",
        }}
      ></View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView intensity={100} style={{borderRadius: 10}}>
          <View style={styles.login}>
            <Image
              source={logo}
              style={[styles.logo, { height: height * 0.3 }]}
              resizeMode="contain"
            />

            {/* <Text
              style={{
                fontFamily: "Quicksand",
                color: "white",
                fontSize: 30,
                marginBottom: 20,
                letterSpacing: 7,
              }}
            >
              TecnoCorn
            </Text> */}
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

            <Text style={styles.texty} onPress={onRegisterPress}>Don't have an account? create one</Text>

            <SocialMediaButtons/>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    width: 340,
    height: 550,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  logo: {
    width: "50%",
    maxWidth: 300,
    maxHeight: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  button: {
    width: 100,
    marginHorizontal: 5,
  },
  parentView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texty: {
    fontSize: 10,
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 25,
    textAlign: 'center',
  }
});

export default Login;
