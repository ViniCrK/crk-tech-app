import { Image, StyleSheet, Text, View } from "react-native";

function Footer() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.footerTitulo}>Fale conosco</Text>

        <View style={styles.redesContainer}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image
              source={require("@/assets/images/pc-2.jpg")}
              style={styles.icone}
            />
            <Text style={styles.texto}>@crk.tech</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image
              source={require("@/assets/images/pc-2.jpg")}
              style={styles.icone}
            />
            <Text style={styles.texto}>crktech71022@gmail.com</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: "#2547A0",
    alignItems: "center",
  },
  footerTitulo: {
    width: 340,
    paddingVertical: 20,
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  redesContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 10,
    width: 340,
  },
  icone: {
    width: 25,
    height: 25,
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Footer;
