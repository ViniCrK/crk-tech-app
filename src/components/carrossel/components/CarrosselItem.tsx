import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ImagensInicioProps } from "@/data/InicioData";
import { router } from "expo-router";

type Props = {
  item: ImagensInicioProps;
  index: number;
  alturaImagem: number;
  larguraImagem: number;
};

function CarrosselItem({ item, index, alturaImagem, larguraImagem }: Props) {
  return (
    <View style={styles.itensContainer}>
      <Image
        source={item.imagem}
        style={{ height: alturaImagem, width: larguraImagem }}
      />
      <Text>{item.titulo}</Text>
      <TouchableOpacity onPress={() => router.push(`/projetos/${index}`)}>
        <Text style={styles.botao}>Ver Projeto</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CarrosselItem;

const styles = StyleSheet.create({
  itensContainer: {
    alignItems: "center",
    gap: 20,
  },
  botao: {
    alignSelf: "center",
    textAlign: "center",
    padding: 10,
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#212020",
    borderRadius: 10,
  },
});
