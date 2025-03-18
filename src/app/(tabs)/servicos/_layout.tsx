import { Stack } from "expo-router";

export default function ServicosLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
