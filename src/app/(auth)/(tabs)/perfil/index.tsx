import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, db } from "@/config/firebase-config";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IUsuario } from "@/models/Usuario";
import exibirAlerta from "@/utils/AlertaToast";

export default function Perfil() {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);
  const [carregando, setCarregando] = useState(true);
  const usuarioAutenticado = auth.currentUser;

  const buscarUsuario = async () => {
    try {
      if (!usuarioAutenticado?.uid) return;

      const docRef = doc(db, "usuarios", usuarioAutenticado?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUsuario(docSnap.data() as IUsuario);
      }
    } catch (erro) {
      exibirAlerta("error", "bottom", "Erro ao buscar usuário.");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarUsuario();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Perfil</Text>

      <View style={styles.card}>
        {/* <Image source={{ uri: usuario?.photoURL }} style={styles.avatar} /> */}

        {carregando ? (
          <ActivityIndicator size="large" color="gray" />
        ) : (
          <View style={styles.dadoContainer}>
            <View style={styles.dado}>
              <AntDesign name="user" size={28} color="#0F172A" />
              <Text style={styles.dadoTexto}>{usuario?.nome}</Text>
            </View>

            <View style={styles.dado}>
              <AntDesign name="mail" size={28} color="#0F172A" />
              <Text style={styles.dadoTexto}>{usuario?.email}</Text>
            </View>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.sairBotao}
        onPress={() => router.replace("/login")}
      >
        <AntDesign name="logout" size={20} color="#fff" />
        <Text style={styles.sairTexto}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001044",
    padding: 24,
    justifyContent: "flex-start",
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    marginBottom: 16,
  },
  dadoContainer: {
    alignSelf: "flex-start",
    gap: 10,
  },
  dado: {
    flexDirection: "row",
    alignItems: "center",
  },
  dadoTexto: {
    marginLeft: 8,
    color: "#374151",
    fontSize: 18,
  },
  sairBotao: {
    marginTop: 30,
    backgroundColor: "red",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  sairTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 8,
  },
});
