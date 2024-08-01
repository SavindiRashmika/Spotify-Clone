import { View, Text, StyleSheet,TextInput, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LoginPage() {
  return (
    <View style={login.container}>
      <LinearGradient colors={['#040306', '#131624']} style={login.gradient}>
        <Pressable style={login.arrow}>
          <FontAwesome6 name="arrow-left-long" size={24} color="white" />
        </Pressable>
        <View>
            <Text style={login.text}>Email or username</Text>
            <TextInput style={login.input}/>
        </View>

        <View>
            <Text style={login.text}>Password</Text>
            <TextInput style={login.input}/>
        </View>
        <Pressable style={login.log} onPress={()=> router.push('/HomePage')}>
           <Text style={login.logT}> Log in</Text>
        </Pressable>
      </LinearGradient>
    </View>
  )
}

const login = StyleSheet.create({
    container: {
        flex: 1
      },
      arrow:{
        margin:20
      },
      gradient: {
        flex: 1
      },
      text:{
        color:"white",
        fontFamily:'Roboto',
        fontWeight:"bold",
        fontSize:25,
        marginLeft:16
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor:"#121212",
        padding: 10,
      },
      log:{
        backgroundColor:"#535353",
        width:100,
        borderRadius:25,
        justifyContent: 'center', 
        alignItems: 'center',
        padding:12,
        marginLeft:120,
        marginTop: 20
      },
      logT:{
        fontFamily:"Roboto",
        fontWeight:"bold",
      }
  })