import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import Toast from "react-native-toast-message";

import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebase-config";
import { IProjeto } from "@/models/Projeto";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default function Projetos() {
  const imagens = [
    require("@/assets/images/projeto-1.jpg"),
    require("@/assets/images/projeto-2.jpg"),
    require("@/assets/images/pc-2.jpg"),
    require("@/assets/images/projeto-3.jpg"),
    require("@/assets/images/projeto-4.jpg"),
    require("@/assets/images/projeto-5.jpg"),
    require("@/assets/images/projeto-6.jpg"),
    require("@/assets/images/projeto-7.jpg"),
    require("@/assets/images/projeto-9.jpg"),
  ];

  const [projetos, setProjetos] = useState<IProjeto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const buscarProjetos = async () => {
    try {
      const projetosRef = collection(db, "projetos");
      const q = query(projetosRef, orderBy("titulo"));

      const querySnapshot = await getDocs(q);
      const dados: IProjeto[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IProjeto[];

      setProjetos(dados);
    } catch (erro) {
      Alert.alert("Erro ao buscar os projetos no Firestore:", `${erro}`);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarProjetos();

    Toast.show({
      type: "info",
      text1: "Toque em um projeto para mais informações",
      text1Style: { fontSize: 14 },
      position: "bottom",
      visibilityTime: 2000,
      autoHide: true,
      bottomOffset: 100,
    });

    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        if (usuario.email === "vinicius260803@gmail.com") {
          setIsAdmin(true);
        }
      }
    });

    return unsubscribe;
  }, []);

  if (carregando) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000000" />
        <Text style={{ fontSize: 32, color: "#000000" }}>
          Carregando serviços...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>NOSSOS PROJETOS</Text>

      {isAdmin && (
        <Link href="/projetos/cadastrar" asChild>
          <TouchableOpacity style={styles.botaoAdd}>
            <Text style={styles.textoBotaoAdd}>+</Text>
          </TouchableOpacity>
        </Link>
      )}

      <FlatList
        data={projetos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item, index }) => (
          <View style={styles.projetosContainer}>
            <Link
              href={{
                pathname: "/projetos/[id]",
                params: { id: item.id },
              }}
              asChild
            >
              <TouchableOpacity>
                <Image source={imagens[index]} style={styles.imagemProjeto} />
              </TouchableOpacity>
            </Link>
          </View>
        )}
        style={{ gap: 20, paddingVertical: 10 }}
        showsVerticalScrollIndicator={false}
      />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 80,
    backgroundColor: "#FFFFFF",
  },
  titulo: {
    maxWidth: 105,
    paddingBottom: 20,
    color: "#212020",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  projetosContainer: {
    flex: 1,
    aspectRatio: 1,
    marginRight: 6,
    backgroundColor: "#FFF",
  },
  imagemProjeto: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  botaoAdd: {
    position: "absolute",
    top: 30,
    right: 40,
    backgroundColor: "#001044",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoAdd: {
    color: "#FFF",
    fontSize: 36,
    lineHeight: 46,
  },
});
