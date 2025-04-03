import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ProjetosData } from "@/data/ProjetosData";
import ProjetoNaoEncontrado from "./components/ProjetoNaoEncontrado";

export default function DetalheProjeto() {
  const { id } = useLocalSearchParams();
  const projeto = ProjetosData.find((projeto) => projeto.id === id);

  if (!projeto) {
    return <ProjetoNaoEncontrado />;
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.projetoContainer}>
          <Image source={projeto.imagem} style={styles.projetoImagem} />

          <Text style={styles.projetoTitulo}>{projeto.titulo}</Text>

          {projeto.especificacoes.map((componente, index) => (
            <View key={index} style={styles.especificacoesContainer}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Especificações:
              </Text>

              <Text>Processador: {componente.processador}</Text>
              <Text>Placa Mãe: {componente.placaMae}</Text>
              <Text>Memória RAM: {componente.RAM}</Text>
              <Text>Placa de Vídeo: {componente.placaDeVideo}</Text>
              {componente.armazenamento.length > 0 && (
                <Text>
                  Armazenamento:{" "}
                  {componente.armazenamento
                    .map(
                      (armazenamento) =>
                        `${armazenamento.tipo} - ${armazenamento.capacidade}`
                    )
                    .join(", ")}
                </Text>
              )}
              <Text>Fonte: {componente.fonte}</Text>
              <Text>
                Air Cooler:{" "}
                {!componente.airCooler ? "Não possui" : componente.airCooler}
              </Text>
              <Text>
                Water Cooler:{" "}
                {!componente.waterCooler
                  ? "Não possui"
                  : componente.waterCooler}
              </Text>
              <Text>Gabinete: {componente.gabinete}</Text>
            </View>
          ))}

          <View style={styles.descricaoContainer}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Descrição:</Text>
            <Text>{projeto.descricao}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "auto",
    paddingTop: 30,
    backgroundColor: "#FFFFFF",
  },
  projetoContainer: {
    paddingHorizontal: 30,
    paddingBottom: 120,
    gap: 20,
  },
  projetoImagem: {
    width: 300,
    height: 300,
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },
  projetoTitulo: {
    color: "#212020",
    fontSize: 36,
    fontWeight: "bold",
  },
  especificacoesContainer: {
    gap: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#001044",
  },
  descricaoContainer: {
    gap: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
  },
});
