import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "@/config/firebase-config";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Perfil() {
  const usuario = auth.currentUser;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Perfil</Text>

      <View style={styles.card}>
        {/* <Image source={{ uri: usuario?.photoURL }} style={styles.avatar} /> */}

        <Text style={styles.nome}>{usuario?.displayName}</Text>
        <Text style={styles.info}>{usuario?.email}</Text>
        <Text style={styles.info}>{usuario?.phoneNumber}</Text>

        <View style={styles.dado}>
          <AntDesign name="user" size={20} color="#0F172A" />
          <Text style={styles.dadoTexto}>{usuario?.displayName}</Text>
        </View>

        <View style={styles.dado}>
          <MaterialIcons name="email" size={20} color="#0F172A" />
          <Text style={styles.dadoTexto}>{usuario?.email}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.sairBotao}
        onPress={() => router.push("/login")}
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
  nome: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 4,
  },
  dado: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "flex-start",
  },
  dadoTexto: {
    marginLeft: 8,
    color: "#374151",
    fontSize: 16,
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
