import { Stack } from "expo-router";

export default function ProjetosLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#001044" },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: "Detalhes do Projeto" }} />
      <Stack.Screen name="cadastrar" options={{ title: "Cadastrar Projeto" }} />
      <Stack.Screen name="editar" options={{ title: "Editar Projeto" }} />
    </Stack>
  );
}
