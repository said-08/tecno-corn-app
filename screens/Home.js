
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import logo from '../assets/logo1.png'
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
} from 'react-native';

const Home = ({ item }) => {
  return (
        <View style={styles.item}>
        <Image
            source={{
            uri: item.uri,
            }}
            style={styles.itemPhoto}
            resizeMode="cover"
        />
        <Text style={styles.itemText}>{item.text}</Text>
        </View>
  );
};

export default () => {
  return (
    <View style={styles.containerhead} >
        <View style={styles.subContainer} >
            <View style={styles.viewContainerTextlogo} >
                <View style={styles.viewText} >
                    <Text style={styles.textHead} >
                        Welcome To
                    </Text>
                    <Text style={styles.textHead} >
                        TECNO-CORN
                    </Text>
                </View>
                <View style={styles.viewLogo} >
                    <Image  source={logo}
                        style={styles.logo} />
                </View>
            </View>
        </View>
        <LinearGradient  colors={["rgba(0,164,109,0.4)", "transparent"]} style={styles.linergradient} >
            <View style={styles.viewInput} >
                <TextInput placeholder='Search' placeholderTextColor="#b1e5d3"  style={styles.styleInput} />
            </View>
        </LinearGradient>

        <View style={styles.container}>
            <StatusBar style="light" />
            <SafeAreaView style={{ flex: 1 }}>
                <SectionList
                contentContainerStyle={{ paddingHorizontal: 10 }}
                stickySectionHeadersEnabled={false}
                sections={SECTIONS}
                renderSectionHeader={({ section }) => (
                    <>
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                        <FlatList
                            data={section.data}
                            horizontal
                            renderItem={({ item }) => {
                                return <Home item={item} />;
                            }}
                        />
                    </>
                )}
                renderItem={({ item, section }) => {
                    return null;
                    //return <Profile item={item} />;
                }}
                />
            </SafeAreaView>
        </View>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Compost',
    data: [
      {
        key: '1',
        text: 'Said Salcedo ',
        uri: 'https://picsum.photos/seed/picsum/200/300',
      },
      {
        key: '2',
        text: 'Alexander Ramírez',
        uri: 'https://picsum.photos/id/300/800',
      },

      {
        key: '3',
        text: 'Juan Cabana',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    title: 'Residuos unicos',
    data: [
      {
        key: '1',
        text: 'Alex',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '2',
        text: 'Mauricio',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },
  {
    title: 'Plasticos',
    data: [
      {
        key: '1',
        text: 'Patricia',
        uri: 'https://picsum.photos/id/1020/200',
      },
      {
        key: '2',
        text: 'Pablo',
        uri: 'https://picsum.photos/id/1024/200',
      },

      {
        key: '3',
        text: 'Pepe Gomez',
        uri: 'https://picsum.photos/id/1027/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1035/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1038/200',
      },
    ],
  },
];

const styles = StyleSheet.create({
    containerhead:{
        backgroundColor:"#FEFFDE",
        flex:1,
    },
    subContainer:{
        backgroundColor:"#00a46c",
        height:"28%",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal:20,
    },
    linergradient:{
        left:0,
        right:0,
        height:90,
        marginTop:-45,
    },
    viewInput:{
        backgroundColor:"#FFF",
        paddingVertical:8,
        paddingHorizontal:30,
        marginHorizontal:20,
        borderRadius:15,
        marginTop:25,
        flexDirection:"row",
        alignItems:"center",
    },
    styleInput:{
        fontWeight:"bold",
        fontSize:18,
        width:260,
    },
    viewContainerTextlogo:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:18,
        with:"100%"
    },
    viewText:{
        width:"60%",
    },
    textHead:{
        fontSize:30,
        marginTop:35,
        color:"#FFF",
        fontWeight:"bold"
    },
    viewLogo:{
        width:'40%',
        alignItems:"flex-end",
    },
    logo:{
        height:60,
        width:60,
    },
    container: {
        flex: 1,
        backgroundColor: '#FEFFDE',
    },
    sectionHeader: {
        fontWeight: '800',
        fontSize: 18,
        color: '#585a61',
        marginTop: 20,
        marginBottom: 5,
    },
    item: {
        margin: 10,
    },
    itemPhoto: {
        width: 200,
        height: 200,
        borderRadius:15,

    },
    itemText: {
        color: '#585a61',
        marginTop: 5,
        fontWeight:"bold"
    },
});