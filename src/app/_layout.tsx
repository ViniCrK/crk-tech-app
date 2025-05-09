import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

export default function Root() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1, backgroundColor: "#001044" }}>
          <Slot />
        </SafeAreaView>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
