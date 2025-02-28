import Carrossel from "@/components/carrossel";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <View style={{ paddingHorizontal: 30, paddingBottom: 30 }}>
          <Text style={styles.titulo}>
            ASSISTÊNCIA TÉCNICA ESPECIALIZADA EM MONTAGEM DE COMPUTADORES
          </Text>

          <Carrossel alturaImagem={300} larguraImagem={350} />

          <View style={{ paddingTop: 20 }}>
            <Button
              onPress={() => router.push("/projetos")}
              title="Veja nossos projetos"
              color={"#212020"}
            />
            <Button
              onPress={() => router.push("/servicos")}
              title="Contrate nossos serviços"
              color={"#212020"}
            />
            <Button
              onPress={() => router.push("/sobre")}
              title="Sobre nós"
              color={"#212020"}
            />
          </View>
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
