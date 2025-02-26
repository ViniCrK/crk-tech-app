import Carrossel from "@/components/carrossel";
import { Link } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{ paddingHorizontal: 30, paddingBottom: 30 }}>
          <Text style={styles.titulo}>
            ASSISTÊNCIA TÉCNICA ESPECIALIZADA EM MONTAGEM DE COMPUTADORES
          </Text>

          <Carrossel alturaImagem={300} larguraImagem={350} />

          <TouchableOpacity style={{ paddingTop: 20 }}>
            <Link href={"/projetos"}>
              <Text
                style={{
                  paddingTop: 20,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                Veja nossos projetos
              </Text>
            </Link>
          </TouchableOpacity>
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
  container: {
    flex: 1,
    maxWidth: "auto",
    backgroundColor: "#2547A0",
    paddingTop: 30,
  },
  titulo: {
    paddingBottom: 10,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  avaliacoesContainer: {
    alignItems: "center",
    backgroundColor: "#212020",
    paddingVertical: 30,
  },
  avaliacoesTitulo: {
    width: 340,
    paddingBottom: 20,
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
