import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { Link, useFocusEffect } from "expo-router";
import { ProjetosData } from "@/data/ProjetosData";

export default function Projetos() {
  useFocusEffect(() => {
    ToastAndroid.show(
      "Clique em um projeto para ver mais detalhes",
      ToastAndroid.CENTER
    );
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>NOSSOS PROJETOS</Text>

        <FlatList
          data={ProjetosData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.projetosContainer}>
              <Link href={`/projetos/${item.id}`}>
                <Image source={item.imagem} style={styles.imagemProjeto} />
              </Link>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
    paddingBottom: 80,
    backgroundColor: "#D9D9D9",
  },
  titulo: {
    maxWidth: 105,
    paddingBottom: 10,
    color: "#212020",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  projetosContainer: {
    flex: 1,
    aspectRatio: 1,
    margin: 6,
    backgroundColor: "#ddd",
  },
  imagemProjeto: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});
