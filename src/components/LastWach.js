import React from 'react';
import {View,Text,StyleSheet} from 'react-native';


const LastWacht = ({ checkedOn }) =>{
    return(
        <View style={styles.container} >
            <Text style={styles.text} >{checkedOn}</Text>
        </View>
    )
}
export default LastWacht;


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        elevation:3,
        paddingVertical:2,
        paddingHorizontal:15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:100,
        alignSelf:'center',
        marginTop:25
    },
    text:{
        color:'#f20045',
        fontSize:12,
        fontWeight:'bold'
    }
})