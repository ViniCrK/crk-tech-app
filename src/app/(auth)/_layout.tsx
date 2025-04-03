import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
