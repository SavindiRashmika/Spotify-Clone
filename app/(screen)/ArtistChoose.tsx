import { View, Text ,StyleSheet, Image} from 'react-native'
import React, { Component } from 'react'
import { LinearGradient } from 'expo-linear-gradient'


export default function ArtistChoose() {
  
  return (
    <View style={{flex:1}}>
      <LinearGradient colors={['#040306', '#131624']} style={atist.gradient}>
        <View>
          <Text style={atist.mainT}>To get you started</Text>
          <View>
            <Image/>
            <Text></Text>
          </View>
        </View>

        <View>
          <Text style={atist.mainT}>Try something else</Text>
          <View>
            <Image/>
            <Text></Text>
          </View>
        </View>

        <View>
          <Text style={atist.mainT}>Recently played</Text>
          <View>
            <Image/>
            <Text></Text>
          </View>
        </View>

        <View>
          <Text style={atist.mainT}>Recommended for today</Text>
          <View>
            <Image/>
            <Text></Text>
          </View>
        </View>

        <View>
          <Text style={atist.mainT}>Suggested artists</Text>
          <View>
            <Image/>
            <Text></Text>
          </View>
        </View>

        <View>
          <Text style={atist.mainT}>Fresh new music</Text>
          <View>
            <Image/>
            <Text></Text>
          </View>
        </View>

      </LinearGradient>
    </View>
  )
}

const atist = StyleSheet.create({
  gradient: {
    flex: 1
  },
  mainT:{
    color:"white",
    fontFamily:"Roboto",
    fontWeight:'bold',
    fontSize: 24
  }
})