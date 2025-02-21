import Carrossel from "@/components/carrossel";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function Home() {
  return (
    <>
      <ScrollView style={styles.container}>
        {/* <View style={styles.headerContainer}>
          <Text style={{ color: "white" }}>Barra lateral</Text>

          <Text style={{ color: "white" }}>Carrinho</Text>

          <Link href={"/sobre"}>
            <Text style={{ color: "white" }}>Sobre</Text>
          </Link>

          <Link href={"/"}>
            <Text style={{ color: "white" }}>CRK Tech</Text>
          </Link>
        </View> */}

        <View style={{ paddingHorizontal: 30, paddingBottom: 30 }}>
          <Text style={styles.titulo}>
            ASSISTÊNCIA TÉCNICA ESPECIALIZADA EM MONTAGEM DE COMPUTADORES
          </Text>

          <Carrossel />
        </View>

        <View style={styles.avaliacoesContainer}>
          <Text style={styles.avaliacoesTitulo}>
            O QUE DIZEM NOSSOS CLIENTES
          </Text>

          <Text style={styles.avaliacoesDesc}>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            viverra tempus fringilla. Maecenas interdum accumsan malesuada.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam
            rutrum mattis nisi, eget fringilla sem porttitor quis.“
          </Text>

          <Text style={styles.avaliacoesNome}>
            João Gabriel - Cliente da CRK Tech
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    backgroundColor: "#2547A0",
  },
  container: {
    maxWidth: "auto",
  },
  titulo: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  avaliacoesContainer: {
    alignItems: "center",
    backgroundColor: "#212020",
  },
  avaliacoesTitulo: {
    width: 340,
    paddingVertical: 20,
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  avaliacoesDesc: {
    width: 280,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "black",
    textAlign: "center",
  },
  avaliacoesNome: {
    paddingVertical: 20,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
