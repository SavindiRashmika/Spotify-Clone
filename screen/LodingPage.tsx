import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient"

export default function LodingPage() {
  return (
    <View style={loading.container}>
      <LinearGradient colors={['#040306', '#131624']} style={loading.gradient}>
        <View style={loading.content}>
        </View>
      </LinearGradient>
    </View>
  )
}

const loading = StyleSheet.create({
    container: {
        flex: 1,
      },
      gradient: {
        flex: 1,
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
      },
      content:{
        alignItems:'center'
      }
  })