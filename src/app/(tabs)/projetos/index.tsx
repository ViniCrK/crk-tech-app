import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import { Link } from "expo-router";
import Toast from "react-native-toast-message";

import { ProjetosData } from "@/data/ProjetosData";

export default function Projetos() {
  useEffect(() => {
    Toast.show({
      type: "info",
      text1: "Toque em um projeto para mais informações",
      position: "top",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 100,
    });
  }, []);

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
              <Link
                href={{
                  pathname: "/projetos/[id]",
                  params: { id: item.id },
                }}
                asChild
              >
                <TouchableOpacity>
                  <Image source={item.imagem} style={styles.imagemProjeto} />
                </TouchableOpacity>
              </Link>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Toast />
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
