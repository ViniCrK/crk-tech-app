import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import Toast from "react-native-toast-message";

export default function Root() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "#001044" }}>
      <StatusBar style="light" />
      <Slot />
      <Toast />
    </SafeAreaProvider>
  );
}
