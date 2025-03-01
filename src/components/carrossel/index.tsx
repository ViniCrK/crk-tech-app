import { FlatList, StyleSheet, View } from "react-native";

import CarrosselItem from "./components/CarrosselItem";

type CarrosselProps = {
  data: any[];
  alturaImagem: number;
  larguraImagem: number;
};

function Carrossel({ data, alturaImagem, larguraImagem }: CarrosselProps) {
  return (
    <View>
      <FlatList
        data={data}
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
