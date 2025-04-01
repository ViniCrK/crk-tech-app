import { Stack } from "expo-router";

export default function ServicosLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#212020" },
          headerTintColor: "#FFFFFF",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ title: "Detalhes do Serviço" }} />
        <Stack.Screen
          name="solicitar"
          options={{ title: "Solicitar Serviço" }}
        />
      </Stack>
    </>
  );
}
