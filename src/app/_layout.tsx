import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Início" }} />
      <Stack.Screen name="projetos" options={{ headerTitle: "Projetos" }} />
    </Stack>
  );
}
