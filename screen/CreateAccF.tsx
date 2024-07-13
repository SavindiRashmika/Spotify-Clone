import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome6 } from '@expo/vector-icons'

export default function CreateAccF() {
  return (
    <View style={acc.container}>
      <LinearGradient colors={['#040306', '#131624']} style={acc.gradient}>
        <Pressable style={acc.arrow}>
          <FontAwesome6 name="arrow-left-long" size={24} color="white" />
          <Text style={acc.text2}>Create account</Text>
        </Pressable>
        <View style={acc.content}>
            <Text style={acc.text}>What's your email</Text>
            <TextInput style={acc.input}/>
            <Text style={acc.text1}>This appears on your Spotify profile.</Text>
            <Text style={acc.text1}>By tapping  " Create account ", you agree to this Spotify Use.</Text>
        </View>

        <View>
            <Text style={acc.text3}>Terms of Use</Text>
            <Text style={acc.text1}>To learn more about how Spotify collects,uses,shares and
                protects your personal data,please see the Spotify Privacy policy.
            </Text>
        </View>

        <Pressable style={acc.log}>
           <Text style={acc.logT}> Create account</Text>
        </Pressable>
      </LinearGradient>
    </View>
  )
}

const acc = StyleSheet.create({
    container: {
        flex: 1
      },
      arrow:{
        margin:20,
        flexDirection: 'row'
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
        backgroundColor:"white",
        width:150,
        borderRadius:25,
        justifyContent: 'center', 
        alignItems: 'center',
        padding:12,
        marginLeft:120,
        marginTop: 150
      },
      logT:{
        fontFamily:"Roboto",
        fontWeight:"bold",
      },
      text1:{
        fontFamily:"Roboto",
        fontWeight:"bold",
        color:"white",
        marginLeft:16,
        marginBottom:12,
        fontSize:12
      },
      text2:{
        fontFamily:"Roboto",
        fontWeight:"bold",
        color:"white",
        marginLeft:80,
        marginTop:8
      },
      content:{
        marginTop:25
      },
      text3:{
        fontFamily:"Roboto",
        fontWeight:"bold",
        color:"#1DB954",
        marginLeft:16,
        marginTop:8,
        fontSize:16,
        marginBottom:15
      }
  })