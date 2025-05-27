import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cabecalho}>
        <Image
          source={require("@/assets/images/CRK TECH LOGO BRANCO.png")}
          style={styles.logo}
        />

        <Text style={styles.titulo}>Bem-vindo(a) à CRK Tech!</Text>

        <Text style={styles.subtitulo}>
          Potencializando seu setup com tecnologia de ponta.
        </Text>
      </View>

      <Text style={styles.chamada}>Conheça nossos:</Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botaoContainer}
          onPress={() => router.push("/projetos")}
        >
          <FontAwesome5 name="project-diagram" size={42} color="#2547A0" />
          <Text style={styles.botaoTitulo}>Projetos</Text>
          <Text style={styles.botaoSubtitulo}>
            Aqui você poderá ver alguns projetos que já passaram pela nossa
            assistência técnica.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoContainer}
          onPress={() => router.push("/servicos")}
        >
          <Octicons name="tools" size={42} color="#2547A0" />
          <Text style={styles.botaoTitulo}>Serviços</Text>
          <Text style={styles.botaoSubtitulo}>
            Conheça os serviços que você pode contratar, como montagem, limpeza,
            upgrades e mais.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#001044",
  },
  cabecalho: {
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 240,
    height: 140,
    resizeMode: "contain",
    marginTop: 32,
    marginBottom: 16,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    color: "#AAAAAA",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
  chamada: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 40,
    marginBottom: 10,
  },
  botoesContainer: {
    flexDirection: "row",
    marginHorizontal: 40,
    justifyContent: "space-between",
  },
  botaoContainer: {
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: 320,
    width: 160,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 20,
    shadowColor: "#1C1C1C",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  botaoTitulo: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  botaoSubtitulo: {
    color: "#555555",
    fontSize: 16,
  },
});
