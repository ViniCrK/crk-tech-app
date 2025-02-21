import { FlatList, StyleSheet, View } from "react-native";

import { CarrosselImagens } from "@/data/CarrosselData";
import CarrosselItem from "./components/CarrosselItem";

function Carrossel() {
  return (
    <View>
      <FlatList
        data={CarrosselImagens}
        renderItem={({ item, index }) => (
          <CarrosselItem item={item} index={index} />
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
