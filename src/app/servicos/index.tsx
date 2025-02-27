import { StyleSheet, Text, View } from "react-native";
import ListaServicos from "./components/ListaServicos";

export default function Servicos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>NOSSOS SERVIÇOS</Text>

      <ListaServicos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 40,
    backgroundColor: "#212020",
  },
  titulo: {
    maxWidth: 105,
    paddingBottom: 10,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
});
