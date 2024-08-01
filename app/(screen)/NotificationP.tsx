import { View, Text, StyleSheet,Pressable, Image} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

export default function NotificationP() {
  return (
    <View style={notifi.container}>
      <LinearGradient colors={['#040306', '#131624']} style={notifi.gradient}>
        <Image source={require('../../assets/images/text-bubble.png')} style={notifi.image}/>
        <Text style={notifi.mainT}>Trun on Notifications</Text>
        <Text style={notifi.text}>Get updates new music,  special
            offers,events and more.
        </Text>

        <Pressable style={notifi.log}>
          <Text style={notifi.logT}> Trun on notifications</Text>
        </Pressable>
        <Pressable onPress={()=>router.push('/HomePage')}>
          <Text style={notifi.text}> Not now</Text>
        </Pressable>
      </LinearGradient>
    </View>
  )
}

const notifi = StyleSheet.create({
    container: {
        flex: 1
      },
      gradient: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        padding:60
      },
      mainT:{
        color:"white",
        fontSize:25,
        fontWeight:"bold",
        fontFamily:"Roboto",
        marginBottom:30
      },
      text:{
        color:"white",
        fontSize:20,
        fontFamily:"Roboto",
        alignItems:"center",
        marginTop:20
      },
      log:{
        backgroundColor:"white",
        width:200,
        borderRadius:25,
        justifyContent: 'center', 
        alignItems: 'center',
        padding:12,
        marginTop: 100
      },
      logT:{
        fontFamily:"Roboto",
        fontWeight:"bold",
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
      image:{
        width:150, 
        height:110, 
        borderRadius:25, 
        marginBottom:20
      }
  })