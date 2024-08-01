import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
// import data from '../../../data/data.json'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Made for you</Text>
      <View style={styles.iconsContainer}>
        <Ionicons name="notifications" size={24} color="white" style={styles.icon} />
        <Ionicons name="settings" size={24} color="white" style={styles.icon} />
        <Ionicons name="time" size={24} color="white" style={styles.icon} />
      </View>
      
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/dilu.jpeg')}
        />
        <Text style={styles.imageText}>Ed Sheeran, Katy perry{'\n'}Pitbull and more</Text>
        
      </View>

      <View style={styles.imageContainer2}>
        <Image
          style={styles.tinyLogo2}
          source={require('../../assets/images/dilu.jpeg')}
        />
        <Text style={styles.imageText}>Catch the Letest Playlist{'\n'}made jus for you....</Text>
      </View>
      <Text style={styles.baseText2}>Trending now</Text>

      <View style={styles.imageContainer3}>
        <Image
          style={styles.tinyLogo3}
          source={require('../../assets/images/piyath.jpeg')}
        />
        <Text style={styles.imageText}>Believe</Text>
        
      </View>
      <View style={styles.imageContainer4}>
        <Image
          style={styles.tinyLogo3}
          source={require('../../assets/images/dilu.jpeg')}
        />
        <Text style={styles.imageText}>Perfect</Text>
        
      </View>

      <View style={styles.imageContainer5}>
        <Image
          style={styles.tinyLogo3}
          source={require('../../assets/images/piyath.jpeg')}
        />
        <Text style={styles.imageText}>Love me like u</Text>
        
      </View>
      <Text style={styles.baseText3}>Populor Artist</Text>

      
      <View style={styles.imageContainer7}>
        <Image
          style={styles.tinyLogo4}
          source={require('../../assets/images/dilu.jpeg')}
        />   
      </View>
      <View style={styles.imageContainer8}>
        <Image
          style={styles.tinyLogo4}
          source={require('../../assets/images/piyath.jpeg')}
        />
      </View>

      <View style={styles.imageContainer9}>
        <Image
          style={styles.tinyLogo4}
          source={require('../../assets/images/dilu.jpeg')}
        />
      </View>
      {/* <View style={styles.bottomIcons}>
        <Ionicons name="home" size={24} color="white" style={styles.icons} />
        <Ionicons name="search" size={24} color="white" style={styles.icons} />
        <Ionicons name="library" size={24} color="white" style={styles.icons} />
        <Ionicons name="musical-notes" size={24} color="white" style={styles.icons} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  baseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    position: 'absolute',
    top: 20,
    right: 250,
  },
  baseText2:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    position: 'absolute',
    top: 320,
    right: 220,

  },
  baseText3:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    position: 'absolute',
   bottom:180,
   right: 220,

  },
  iconsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 24,
    right: -150,
  },
  icon: {
    marginRight: 10,
  },
  imageContainer: {
    position: 'absolute',
    top: 80,
    right: 20,
    alignItems: 'center', 
  },
  tinyLogo: {
    width: 160,
    height: 160,
  },
  imageContainer2: {
    position: 'absolute',
    top: 80,
    left: 20,
    alignItems: 'center', 
  },
  tinyLogo2: {
    width: 160,
    height: 160,
    
  },
  imageText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10, 
    
  },
  imageContainer3:{
    position: 'absolute',
   bottom:300,
    right: 40,
    alignItems: 'center', 
  },
  imageContainer4:{
    position: 'absolute',
    bottom:300,
    left: 10,
    alignItems: 'center', 
  },
  tinyLogo3:{
    width:100,
    height:100,
    left: 10,
  },
  imageContainer5:{
    position: 'absolute',
    bottom:300,
    left:80,
    alignItems: 'center',
    marginLeft:60
  },
  imageContainer6:{
    position: 'absolute',
     top:560,
    right: 70,
    alignItems: 'center', 
    
    
  },
  imageContainer7:{
    position: 'absolute',
    bottom:50,
    left: -46,
    alignItems: 'center', 
   
  },
  imageContainer8:{
    position: 'absolute',
    bottom:50,
    left:80,
    alignItems: 'center',
  },
  imageContainer9:{
    position: 'absolute',
    bottom:50,
    left:220
  },
  tinyLogo4:{
    width:100,
    height:100,
    borderRadius: 80,
    left:60
  },
  bottomIcons: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icons: {
    marginRight: 20,
  },
});
