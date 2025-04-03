import { AuthProvider } from "@/context/AuthContext";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Root() {
  return (
    <AuthProvider>
      <StatusBar backgroundColor="#001044" style="light" />
      <Slot />
    </AuthProvider>
  );
}
