import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: 1, name: 'Pop', color: 'lightblue' },
  { id: 2, name: 'Rock', color: 'lightgreen' },
  { id: 3, name: 'Hip-Hop', color: 'green' },
  { id: 4, name: 'Jazz', color: 'purple' },
  { id: 5, name: 'Classical', color: 'pink' },
  { id: 6, name: 'Electronic', color: 'darkblue' },
  { id: 7, name: 'Country', color: 'red' },
  { id: 8, name: 'Reggae', color: 'blue' },
  { id: 9, name: 'Country', color: 'orange' },
  { id: 10, name: 'Reggae', color: 'gray' },
  { id: 11, name: 'Country', color: 'skyblue' },
  { id: 12, name: 'Reggae', color: 'indigo' }
  
];

export default function SearchPage() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Search</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <Text style={styles.browseText}>Browse All</Text>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.colorContainer}>
        {categories.map((category) => (
          <View key={category.id} style={[styles.colorDiv, { backgroundColor: category.color }]}>
            <Text style={styles.divText}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  baseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    position: 'absolute',
    top: 20,
    right: 260,
  },
  searchContainer: {
    position: 'absolute',
    top: 70,
    width: '96%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
  browseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 26,
    position: 'absolute',
    top: 140,
    right: 230,
  },
  scrollView: {
    width: '100%',
    marginTop: 200, 
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingBottom: 100, // Add padding to bottom for scroll
  },
  colorDiv: {
    width: '45%',
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomIcons: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    marginHorizontal: 20,
  },
});
