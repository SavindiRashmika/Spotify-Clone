import { View, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

export default function LoadP() {
  return (
    <View style={load.container}>
      <LinearGradient colors={['#040306', '#131624']} style={load.gradient}>
        <FontAwesome name="spotify" style={load.mainI}/>
      </LinearGradient>
    </View>
  )
}

const load = StyleSheet.create({
    container: {
        flex: 1
      },
      gradient: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
      },
      mainI:{
        color: "#1DB954",
        fontSize: 200,
        margin:100
      }
  })