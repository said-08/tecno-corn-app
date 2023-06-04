import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import Details from "../screens_seconds/Details";
import Favourite from '../screens_seconds/Favourite';
import Profaile from '../screens_seconds/Profaile';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const BottomTapNavigator = () =>{
    return(
        <Tab.Navigator  
            screenOptions={{
                style:{ 
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#91C788",
                    elevation:2
                }
            }}  
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../img/homeG.png")}
                            style={{height:25, width:30}}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Favourite'
                component={Favourite}
                options={{
                    headerShown: false,
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../img/corn.png")}
                            style={{height:25, width:30}}
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Profaile'
                component={Profaile}
                options={{
                    headerShown: false,
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../img/person.png")}
                            style={{height:25, width:30}}
                        />
                    )
                }}
            />



        </Tab.Navigator>
    )
};

const Stack = createStackNavigator();
const screenOptionStyle={
    headerShown: false,
}

const HomeStackNavigator = ()=>{
    return(
        <Stack.Navigator >
            <Stack.Screen options={{ headerShown: false }}  name='casa' component={BottomTapNavigator} />
            <Stack.Screen name='Details' component={Details} /> 
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;