import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient"
import { FontAwesome } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';

export default function LodingPage() {
  return (
    <View style={loading.container}>
      <LinearGradient colors={['#040306', '#131624']} style={loading.gradient}>
        <View style={loading.content}>

           <FontAwesome name="spotify" style={loading.mainI}/>
           <Text style={loading.mainT}>Millions of songs.</Text>
           <Text style={loading.mainT}>Free on Spotify.</Text>

          <View style={loading.content1}>
            <Pressable style={loading.button1}>
              <Text style={loading.sing}> Sing up free</Text>
            </Pressable>
            <Pressable style={loading.button2}>
              <FontAwesome name="google" size={24} color="#EA4335" style={{ marginLeft: 15 }}/>
              <Text style={loading.icon}> Continue with Google</Text>
            </Pressable>
            <Pressable style={loading.button2}>
              <FontAwesome5 name="facebook" size={24} color="#3b5998" style={{ marginLeft: 15 }}/>
              <Text style={loading.icon}> Continue with Facebook</Text>
            </Pressable>
            <Pressable style={loading.button3}>
              <Text style={loading.log}> Log in</Text>
            </Pressable>
           </View>

        </View>
      </LinearGradient>
    </View>
  )
}

const loading = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily:'Roboto'
      },
      gradient: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
      },
      content:{
        alignItems:'center',
      },
      mainT:{
        color:"white",
        fontWeight:"bold",
        fontSize:40
      },
      mainI:{
        color: "white",
        fontSize: 90,
        margin:100
      },
      button1:{
        backgroundColor:"#1DB954",
        fontFamily:"Roboto",
        fontWeight:"bold",
        width:350,
        borderRadius:25,
        alignItems:"center",
        marginBottom:7,
        padding:13
      },
      button2:{
        fontFamily:"Roboto" ,
        width:350,
        borderRadius:25,
        alignItems:"center",
        padding:4,
        borderColor:'#C0C0C0',
        borderWidth: 1,
        flexDirection: 'row',
        marginVertical:7,
        color:'white',
        fontWeight:"bold",
        fontSize:20,
      },
      button3:{
        fontFamily:"Roboto" ,
        width:300,
        borderRadius:25,
        alignItems:"center",
        padding:10,
        color:'white',
        fontWeight:"bold",
        fontSize:14
      },
      icon:{
        marginLeft:30,
        color: "white",
        fontFamily:"Roboto" ,
        fontWeight:"bold",
        fontSize:18,
        padding:10
      },
      log:{
        color: "white",
        fontFamily:"Roboto" ,
        fontWeight:"bold",
        fontSize:18
      },
      content1:{
        marginTop: 100
      },
      sing:{
        fontFamily:"Roboto" ,
        fontWeight:"bold",
        fontSize:18
      }
  })