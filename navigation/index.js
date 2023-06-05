import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";
import ConfirmEmail from "../screens/EmailConfirm";
import Home from "../screens/Home";
import HomeStackNavigator from "../navigations/Navigator";

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeStack" component={HomeStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
