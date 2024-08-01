import { View, Text, StyleSheet, Pressable, ScrollView, Image} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function premiumP() {
  return (
    <View style={style.container}>
      <ScrollView>
        <LinearGradient colors={['#040306', '#131624']} style={style.gradient}>

        <Image source={require('../../assets/images/premium.png')} style={style.logo}/>

          <Text style={style.mainT}><FontAwesome name="spotify" size={30} style={style.icon} /> premium</Text>
          <Text style={style.header}>
            Listen without limits. Try 1
            month of Premium Individual
            for free with Spotify.
          </Text>

          <View style={style.content}>
            <Pressable style={style.button1}>
              <Text style={style.sing}> Try free for 1 month</Text>
            </Pressable>
            <Text style={style.paragraph}>
              Free for 1 month, then LKR 749 per month after. Offer only available if
              you haven't tried Premium before and you subscribe via Spotify. Offers
              via Google Play may differ. Terms apply.
            </Text>
          </View>

          <View style={style.content}>
            <Text style={style.header}>Why Join Premium?</Text>
            <Text style={style.listItem}><Octicons name="git-pull-request-closed" size={24} color="white" style={style.icon} />      Ad-free music listening</Text>

            <Text style={style.listItem}><MaterialIcons name="downloading" size={24} color="white" style={style.icon} />       Download to listen offline</Text>

            <Text style={style.listItem}><Entypo name="shuffle" size={24} color="white" style={style.icon} />      Play songs in any order</Text>

            <Text style={style.listItem}><Ionicons name="headset-outline" size={24} color="white" style={style.icon} />      High Audio quality</Text>

            <Text style={style.listItem}><FontAwesome name="users" size={24} color="white" style={style.icon} />       Listen with friends in real time</Text>

            <Text style={style.listItem}><Fontisto name="play-list" size={24} color="white" style={style.icon} />      Organize listening queue</Text>
          </View>

          <View style={style.plan}>
            <Text style={style.planHeader}>Free for 1 month</Text>

            <Text style={style.mainT}><FontAwesome name="spotify" size={30} style={style.icon} /> premium</Text>

            <Text style={style.planName}>Individual</Text>
            <Text style={style.planDetail}>Free for 1 month</Text>
            <Text style={style.planDetail}>LKR 749 / month after</Text>

            <Pressable style={style.button1}>
              <Text style={style.sing}>Try free for 1 month</Text>
            </Pressable>
            <Pressable style={style.button2}>
              <Text style={style.singO}>One-time payment</Text>
            </Pressable>

          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto'
  },
  gradient: {
    flex: 1
  },
  content: {
    marginVertical: 20,
    marginHorizontal:20
  },
  mainT: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 20,
  },
  icon: {
    color: "white",
    marginVertical: 20,
    marginHorizontal: 15,
    margin:20
  },
  button1: {
    backgroundColor: "#FAF9F6",
    fontFamily: "Roboto",
    fontWeight: "bold",
    width: 300,
    alignItems: "center",
    marginBottom: 7,
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
    marginHorizontal:50
  },
  button2: {
    fontFamily: "Roboto",
    width: 300,
    borderRadius: 25,
    alignItems: "center",
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginVertical: 7,
    color: 'white',
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
    marginTop: 10,
    marginHorizontal:50
  },
  singO: {
    fontFamily: "Roboto",
    fontSize: 15,
    color:"white"
  },
  sing: {
    fontFamily: "Roboto",
    fontSize: 15
  },
  paragraph: {
    color: "white",
    marginVertical: 10,
    fontSize: 18,
   
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
    paddingHorizontal: 15
  },
  listItem: {
    color: "white",
    fontSize: 18,
    marginVertical: 5,
    padding:10
  },
  plan: {
    padding: 20,
    backgroundColor: '#282828',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
  },
  planHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  planDetail: {
    fontSize: 16,
    marginBottom: 5,
    display: 'flex',
    alignItems: 'center',
    color:'white'
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"#ffb0b0"
  },
  logo:{
    width:"auto",
    marginVertical:50
  }
});
