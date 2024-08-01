import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import Entypo from '@expo/vector-icons/Entypo';

const songs = [
  {
    id: 1,
    title: 'Sudeera Dilshan',
    artist: 'Artist',
    image: require('../../assets/images/dilu.jpeg')
  },
  {
    id: 2,
    title: 'Dinesh Tharanga',
    artist: 'Artist',
    image: require('../../assets/images/piyath.jpeg')
  },
  {
    id: 3,
    title: 'Piyath Rajapakshe',
    artist: 'Artist',
    image: require('../../assets/images/dilu.jpeg')
  },
  {
    id: 4,
    title: 'Ridma Weerawardena',
    artist: 'Artist',
    image: require('../../assets/images/dilu.jpeg')
  },
  {
    id: 5,
    title: 'Dhyan Hewage',
    artist: 'Artist',
    image: require('../../assets/images/dilu.jpeg')
  },
  {
    id: 6,
    title: 'Mihiran',
    artist: 'Artist',
    image: require('../../assets/images/dilu.jpeg')
  }

]

export default function ArtistPage() {
  return (

    <View style={styles.container}>
      <LinearGradient colors={['#040306', '#131624']} style={styles.gradient}>

        <View style={styles.header}>
          <Text style={styles.baseText}>Your Library</Text>
          <View style={styles.icons}>
            <Ionicons name="search" color="white" size={40} />
            <Entypo name="plus" size={40} color="white" />
          </View>
        </View>

        <View style={styles.secton}>
          <Pressable style={styles.sectonB}>
            <Text style={styles.sectonT}>Paylists</Text>
          </Pressable>

          <Pressable style={styles.sectonB}>
            <Text style={styles.sectonT}>Artists</Text>
          </Pressable>
        </View>

        <ScrollView>
          {songs.map((song, index) => (
            <View key={song.id} style={styles.popularContainer}>
              <Text style={styles.rankText}>{index + 1}</Text>
              <Image
                style={styles.popularImage}
                source={song.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.songArtist}>{song.artist}</Text>
              </View>
            </View>
          ))}

          <View style={styles.popularContainer}>
            <View style={styles.plus}>
              <Entypo name="plus" size={40} color="gray" />
            </View>
            <Text style={styles.songArtist}> Add Artists</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    flex: 1,

  },
  header: {
    marginVertical: 50,
    flexDirection: 'row'
  },
  baseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    marginTop: 20,
    marginLeft: 20,
  },
  popularContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  rankText: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },
  popularImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 10
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  songTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  songArtist: {
    color: 'gray',
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 150,
    gap: 20
  },
  plus: {
    backgroundColor: "#282828",
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 50,
    marginHorizontal: 20
  },
  secton: {
    marginHorizontal: 12,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sectonB: {
    backgroundColor: "#282828",
    padding: 15,
    borderRadius: 25,
    paddingHorizontal:30
  },
  sectonT: { 
    fontSize: 16, 
    color: "white" }
})
