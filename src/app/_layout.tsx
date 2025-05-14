import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "@/context/AuthContext";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import Toast from "react-native-toast-message";

export default function Root() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <StatusBar style="light" />
        <SafeAreaView style={{ flex: 1, backgroundColor: "#001044" }}>
          <Slot />
          <Toast />
        </SafeAreaView>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
