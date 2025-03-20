import { Stack } from "expo-router";

export default function ProjetosLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#D9D9D9" },
          headerTintColor: "#212020",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ title: "Detalhes do Projeto" }} />
      </Stack>
    </>
  );
}
