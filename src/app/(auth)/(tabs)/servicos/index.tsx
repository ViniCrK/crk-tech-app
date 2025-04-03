import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import ListaServicos from "./components/ListaServicos";

export default function Servicos() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>NOSSOS SERVIÇOS</Text>

      <ListaServicos />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 40,
    backgroundColor: "#001044",
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
