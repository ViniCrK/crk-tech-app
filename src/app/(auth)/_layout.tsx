import { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import { auth } from "@/config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthLayout() {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });

    return unsubscribe;
  }, []);

  if (user === null) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
