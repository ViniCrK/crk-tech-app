import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
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
          <Image source={projeto.imagem} style={{ height: 320, width: 300 }} />

          <Text style={{ fontSize: 36, fontWeight: "bold" }}>
            {projeto.titulo}
          </Text>

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

          <Text>{projeto.descricao}</Text>

          <TouchableOpacity
            onPress={() => {
              router.push(`/servicos/5`);
            }}
          >
            <Text style={styles.botao}>Contratar consultoria</Text>
          </TouchableOpacity>
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
  especificacoesContainer: {
    gap: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#D9D9D9",
  },
  botao: {
    alignSelf: "flex-end",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    borderRadius: 10,
    backgroundColor: "#2547A0",
  },
});
