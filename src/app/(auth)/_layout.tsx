import { Redirect, Stack } from "expo-router";
import { auth } from "@/config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthLayout() {
  onAuthStateChanged(auth, (usuario) => {
    if (usuario == null) {
      return <Redirect href="/login" />;
    }
  });

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
