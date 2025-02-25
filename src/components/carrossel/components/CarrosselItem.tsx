import { Image, StyleSheet, Text, View } from "react-native";

import { ImagemCarrosselType } from "@/data/CarrosselData";

type Props = {
  item: ImagemCarrosselType;
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
    </View>
  );
}

export default CarrosselItem;

const styles = StyleSheet.create({
  itensContainer: {
    alignItems: "center",
    gap: 20,
  },
});
