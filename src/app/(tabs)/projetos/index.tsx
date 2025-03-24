import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";
import { ProjetosData } from "@/data/ProjetosData";

export default function Projetos() {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{ paddingHorizontal: 30, paddingBottom: 30 }}>
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
          />
        </View>

        <View style={styles.chamadaContainer}>
          <Image
            source={require("@/assets/images/pc-2.jpg")}
            style={{ height: 320, width: 300 }}
          />
          <Text style={styles.chamadaTitulo}>
            Vamos transformar sua experiência com tecnologia?
          </Text>

          <Text style={styles.chamadaDesc}>
            Se você quer ter um computador otimizado, seguro e funcionando no
            seu máximo desempenho, entre em contato agora!
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "auto",
    backgroundColor: "#D9D9D9",
    paddingTop: 50,
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
  chamadaContainer: {
    paddingVertical: 50,
    alignItems: "center",
    backgroundColor: "#212020",
  },
  chamadaTitulo: {
    width: 300,
    paddingVertical: 20,
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  chamadaDesc: {
    width: 300,
    paddingBottom: 100,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "black",
    textAlign: "left",
  },
});
