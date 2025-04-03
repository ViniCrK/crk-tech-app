import { CardServicosData } from "@/data/ServicosData";
import { Link, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ServicoNaoEncontrado from "./components/ServicoNaoEncontrado";

export default function DetalheServico() {
  const { id } = useLocalSearchParams();
  const servico = CardServicosData.find((servico) => servico.id === id);

  if (!servico) {
    return <ServicoNaoEncontrado />;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.servicoContainer}>
          <Image source={servico.icone} style={styles.imagem} />

          <Text style={{ fontSize: 36, fontWeight: "bold" }}>
            {servico.titulo}
          </Text>

          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#2547A0" }}>
            R${servico.preco},00
          </Text>

          <Text style={{ fontSize: 18 }}>{servico.descricao}</Text>

          <TouchableOpacity>
            <Link href={"servicos/solicitar"} style={styles.botao}>
              <Text>Adicionar ao Carrinho</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
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
  servicoContainer: {
    paddingHorizontal: 30,
    gap: 20,
  },
  imagem: {
    height: 300,
    width: 350,
    borderRadius: 10,
    borderWidth: 2,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },
  botao: {
    alignSelf: "center",
    textAlign: "center",
    width: 350,
    marginTop: 10,
    padding: 20,
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#2147A0",
    borderRadius: 10,
  },
});
