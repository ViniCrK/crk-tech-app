import { Stack } from "expo-router";

export default function ProjetosLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* TODO: Criar rota dinâmica para cada projeto */}
      </Stack>
    </>
  );
}
