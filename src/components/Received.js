import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const Received = ({ image, message }) =>{
    return(
        <View style={styles.container} >
            <Image source={{uri:image}} styles={styles.img} />
            <View>
                <Text styles={styles.message} >{message}</Text>
                <Text style={styles.duration} >12:13 Am</Text>
            </View>
        </View>
    )
};

export default Received;

const styles = StyleSheet.create({
    duration:{
        color:'#b6b6b6',
        fontSize:11,
        marginHorizontal:15,
        marginTop:5,
        fontWeight:'bold',
    },
    container:{
        flexDirection:'row',
        marginTop:20,
        width:250
    },
    img:{
        width:40,
        height:40,
        borderRadius:20
    },
    message:{
        fontSize:13,
        marginHorizontal:15,
        fontWeight:'bold'
    }
})