import { Image, StyleSheet, Text, View } from "react-native";

import { ImagemCarrosselType } from "@/data/CarrosselData";

type Props = {
  item: ImagemCarrosselType;
  index: number;
};

function CarrosselItem({ item, index }: Props) {
  return (
    <View style={styles.itensContainer}>
      <Image source={item.imagem} style={styles.imagem} />
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
  imagem: {
    width: 350,
    height: 250,
  },
});
