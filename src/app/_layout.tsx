// import { ScrollView, StyleSheet, View } from "react-native";

// import Header from "../components/header";
// import Footer from "../components/footer";
// import { Slot } from "expo-router";
// import { StatusBar } from "expo-status-bar";

// function AppLayout() {
//   return (
//     <ScrollView style={{ flex: 1 }}>
//       <StatusBar style="inverted" />
//       <Header />

//       <View style={styles.wrapper}>
//         <Slot />
//       </View>

//       <Footer />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   wrapper: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 20,
//   },
// });

// export default AppLayout;

import { Image, Pressable, StyleSheet } from "react-native";
import { Slot, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AppLayout() {
  const navigation = useNavigation();
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return (
    <>
      <StatusBar style="inverted" />

      <Pressable onPress={toggleMenu} style={styles.menu}>
        <Image
          source={require("@/assets/images/pc-2.jpg")}
          style={{ width: 30, height: 30 }}
        />
      </Pressable>

      <Header />

      <Slot />

      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    left: 32,
    top: 50,
    zIndex: 1,
  },
});
