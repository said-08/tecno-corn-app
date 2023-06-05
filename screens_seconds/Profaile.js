import React , {useState, useEffect, useRef} from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    Animated,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/Entypo';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import Profiles from '../src/components/Profiles';
import Messages from '../src/components/Messages';


const Profaile = (props) => {
    const URL = `https://api.github.com/users`;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    
    const pan = useRef(new Animated.ValueXY()).current;
    const list = useRef(new Animated.ValueXY()).current;

    useEffect(function() {
        const getData = async () => {
            const resp = await fetch(URL);
            const data = await resp.json();
            setData(data);
            setLoading(false);
        };
        getData();

        Animated.timing(pan, {
            toValue:{x:-400,y:0},
            delay:1000,
            useNativeDriver:false
        }).start();

        Animated.timing(list, {
            toValue:{x:0,y:-300},
            delay:2000,
            useNativeDriver:false
        }).start();

    }, [])

    console.log(data.login)

    return(
       <LinearGradient
        colors={['#91C788', '#91C788', '#DDFFBC']}
        style={styles.gradient}
       >
           <View style={styles.headerContainer}>
                <Text style={styles.header}>Chat Tecno-corn</Text>
                <Icon name='add' color='#fff' size={30}/>
           </View>
           <ScrollView
                horizontal
                style={styles.proContainer}
                showsHorizontalScrollIndicator={false}
           >
                {loading ? 
                    (
                        <ActivityIndicator size='small' color='#FFF'/>
                    ):(
                        <Animated.View style={[pan.getLayout(),styles.card]}>
                            {
                                data.map((item, index) => (
                                    <Profiles
                                        key={item.id}
                                        username={item.login}
                                        uri={item.avatar_url}
                                    />
                                ))
                            }
                        </Animated.View>
                    )
                }
           </ScrollView>
           <View style={styles.ops}>
                <View style={styles.col}>
                    <Text style={styles.day}>Monday</Text>
                    <Entypo name='dots-three-horizontal' color='#000119' size={30}/>
                </View>
                <ScrollView>
                    {
                        loading ? 
                        (
                            <ActivityIndicator size='large' color='#f20042'/>
                        ):(
                            <Animated.View style={[list.getLayout(), styles.list]}>
                                {
                                    data.map((item, index) => (
                                            <Messages
                                                key={item.id}
                                                username={item.login}
                                                uri={item.avatar_url}
                                                count={Math.floor(Math.random() * 3)}
                                                onPress={()=>{
                                                    props.navigation.navigate('Discussion',{
                                                        itemId:item.id,
                                                        itemName:item.login,
                                                        itemPic:item.avatar_url
                                                    });
                                                }}
                                            />
                                    ))}
                            </Animated.View>
                        )}
                </ScrollView>
           </View>
       </LinearGradient>
    )
}
export default Profaile;

const styles = StyleSheet.create({
    list:{
        marginTop:300,
    },
    card:{
        marginLeft:400,
        width:400,
        flexDirection:'row'
    },
    gradient:{
        height:'100%',
        position:"absolute",
        left:0,
        right:0,
        top:0,
        paddingHorizontal:20,
        paddingTop:30
    },
    headerContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    header:{
        fontWeight:'bold',
        color:'#FFF',
        flex:1,
        fontSize:24
    },
    proContainer:{
        marginRight:-20,
        alignSelf:'center'
    },
    ops:{
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        height:500,
        backgroundColor:'#FEFFDE',
        marginHorizontal:-20
    },
    col:{
        flexDirection:'row',
        marginTop:25,
        marginHorizontal:20,
        alignItems:'center'
    },
    day:{
        fontWeight:'bold',
        color:'#000119',
        flex:1,
        fontSize:20
    }
})