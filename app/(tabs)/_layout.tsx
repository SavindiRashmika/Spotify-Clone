import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'white', // Color of the active tab
      tabBarInactiveTintColor: 'gray', // Color of the inactive tabs
      tabBarLabelStyle: { fontSize: 10 }, // Customize label font size
      tabBarStyle: { backgroundColor: '#131624' }
    }}>
      <Tabs.Screen name="HomePage" options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" color={color} size={size} />
        ),
        tabBarLabel: "Home",
        headerShown: false,
      }}
      />
      <Tabs.Screen
        name="SearchPage"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          tabBarLabel: "Search",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="ArtistPage"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="my-library-music" size={24} color={color} />
          ),
          tabBarLabel: "Your Library",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="PremiumP"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="spotify" size={24} color={color} />
          ),
          tabBarLabel: "Premium",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
