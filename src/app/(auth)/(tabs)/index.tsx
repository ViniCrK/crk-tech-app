import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { ImagensInicio } from "@/data/InicioData";

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 30 }}>
        <Text style={styles.titulo}>
          ASSISTÊNCIA TÉCNICA ESPECIALIZADA EM MONTAGEM DE COMPUTADORES
        </Text>

        {ImagensInicio.map((item, index) => (
          <View
            key={index}
            style={{ paddingVertical: 20, alignItems: "center", gap: 20 }}
          >
            <Image source={item.imagem} style={{ height: 300, width: 350 }} />
            <Text
              style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "bold" }}
            >
              {item.titulo}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.avaliacoesContainer}>
        <Text style={styles.avaliacoesTitulo}>O QUE DIZEM NOSSOS CLIENTES</Text>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    maxWidth: "auto",
    backgroundColor: "#001044",
  },
  titulo: {
    paddingBottom: 10,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
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
    paddingTop: 20,
    paddingBottom: 120,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
