import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState, Component } from "react";
import compost from "../assets/compost.jpg";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { BlurView } from "expo-blur";
import SocialMediaButtons from "../components/SocialMediaButtons";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
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
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");

  const onRegisterPress = () => {
    console.warn("register");
  };

  const onForgotPassPress = () => {
    console.warn("cottra olvidada");
  };

  const onSignInPress = () => {
    navigation.navigate("Login");
  }

  if (!fontsLoaded) return null;

  return (
    <View style={styles.root} onLayout={onLayout}>
      <Image style={[styles.image, StyleSheet.absoluteFill]} source={compost} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView blurType="light"
        blurAmount={90}
        reducedTransparencyFallbackColor="white" style={{ borderRadius: 10 }}>
          <View style={styles.login}>
            <Text style={styles.title}>Create an account</Text>

            <Text
              style={{
                fontFamily: "Quicksand",
                color: "white",
                fontSize: 10,
                marginBottom: 50,
                letterSpacing: 7,
              }}
            >
              TecnoCorn
            </Text>
            <CustomInput
              placeholder={"Username"}
              value={username}
              setValue={setUsername}
            />
            <CustomInput
              placeholder={"Email"}
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              placeholder={"Password"}
              value={password}
              setValue={setpassword}
              security={true}
            />
            <CustomInput
              placeholder={"Password"}
              value={passwordRepeat}
              setValue={setpasswordRepeat}
              security={true}
            />
            <CustomButton text={"Sing Up"} onPress={onRegisterPress} />

            <Text style={styles.text}>
              By registering, you confirm that you accept our{" "}
              <Text style={{ color: "#FF7000" }}>Terms of Use</Text> and{" "}
              <Text style={{ color: "#318BFE" }}>Privay Policy</Text>
            </Text>

            <Text style={styles.texty} onPress={onSignInPress}>Have an account? Sign in</Text>

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
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  button: {
    height: "30%",
    marginHorizontal: "50%",
  },
  parentView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    color: "#051C60",
    margin: 10,
  },
  text: {
    fontSize: 10,
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 25,
    textAlign: 'center',
  },
  texty: {
    fontSize: 10,
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 25,
    textAlign: 'center',
  }
});

export default Register;
