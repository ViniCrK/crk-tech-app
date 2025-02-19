import { View } from "react-native";

import Header from "../components/header";
import Footer from "../components/footer";
import { Slot } from "expo-router";

function AppLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <Slot />

      <Footer />
    </View>
  );
}

export default AppLayout;
