import { Stack } from "expo-router";

export default function ServicosLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#001044" },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: "Detalhes do Serviço" }} />
      <Stack.Screen name="solicitar" options={{ title: "Solicitar Serviço" }} />
      <Stack.Screen name="cadastrar" options={{ title: "Cadastrar Serviço" }} />
    </Stack>
  );
}
