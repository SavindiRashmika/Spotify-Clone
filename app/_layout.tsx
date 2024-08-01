import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(screen)/ArtistChoose" options={{ headerShown: false }} />
      <Stack.Screen name="(screen)/CreateAcc" options={{ headerShown: false }} />
      <Stack.Screen name="(screen)/CreateAccF" options={{ headerShown: false }} />
      <Stack.Screen name="(screen)/LoadP" options={{ headerShown: false }} />
      <Stack.Screen name="(screen)/LodingPage" options={{ headerShown: false }} />
      <Stack.Screen name="(screen)/LoginPage" options={{ headerShown: false }} />
      <Stack.Screen name="(screen)/NotificationP" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
