import { CardServicosData, CardServicosType } from "@/data/ServicosData";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type Props = {
  item: CardServicosType;
  index: number;
};

function ListaItem({ item, index }: Props) {
  return (
    <View style={styles.itensContainer}>
      <Image source={item.icone} style={styles.icone} />
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  );
}

export default function ListaServicos() {
  return (
    <View>
      <FlatList
        data={CardServicosData}
        renderItem={({ item, index }) => (
          <View>
            <ListaItem item={item} index={index} />
          </View>
        )}
        contentContainerStyle={styles.listaContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listaContainer: {
    gap: 20,
    paddingVertical: 20,
  },
  itensContainer: {
    height: "auto",
    width: 320,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  icone: {
    alignSelf: "flex-start",
    height: 45,
    width: 45,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "baseline",
  },
  descricao: {
    fontSize: 16,
    fontWeight: "regular",
  },
});
