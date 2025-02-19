import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Barra lateral</Text>

      <Text style={{ color: "white" }}>Carrinho</Text>

      <Link href={"/sobre"}>
        <Text style={{ color: "white" }}>Sobre</Text>
      </Link>

      <Link href={"/"}>
        <Text style={{ color: "white" }}>CRK Tech</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 100,
    backgroundColor: "#2547A0",
  },
});

export default Header;
