import { FlatList, StyleSheet, View } from "react-native";

import { CarrosselImagens } from "@/data/CarrosselData";
import CarrosselItem from "./components/CarrosselItem";

type ConfigImageProps = {
  alturaImagem: number;
  larguraImagem: number;
};

function Carrossel({ alturaImagem, larguraImagem }: ConfigImageProps) {
  return (
    <View>
      <FlatList
        data={CarrosselImagens}
        renderItem={({ item, index }) => (
          <CarrosselItem
            item={item}
            index={index}
            alturaImagem={alturaImagem}
            larguraImagem={larguraImagem}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
}

export default Carrossel;

const styles = StyleSheet.create({});
