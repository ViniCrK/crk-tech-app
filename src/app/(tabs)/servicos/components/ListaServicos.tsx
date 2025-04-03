import { CardServicosData, CardServicosType } from "@/data/ServicosData";
import { Link } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  item: CardServicosType;
  index: number;
};

function CardServico({ item, index }: Props) {
  return (
    <View style={styles.itensContainer}>
      <Image source={item.icone} style={styles.icone} />

      <Text style={styles.titulo}>{item.titulo}</Text>

      <Text style={styles.descricao}>{item.descricao}</Text>

      <Link
        href={{
          pathname: "servicos/[id]",
          params: { id: item.id },
        }}
        asChild
      >
        <TouchableOpacity>
          <Text style={styles.botao}>Contratar serviço</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

export default function ListaServicos() {
  return (
    <View style={{ paddingBottom: 140 }}>
      <FlatList
        data={CardServicosData}
        renderItem={({ item, index }) => (
          <View>
            <CardServico item={item} index={index} />
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
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "baseline",
  },
  descricao: {
    fontSize: 16,
    fontWeight: "regular",
  },
  botao: {
    alignSelf: "flex-end",
    padding: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    borderRadius: 10,
    backgroundColor: "#2547A0",
  },
});
