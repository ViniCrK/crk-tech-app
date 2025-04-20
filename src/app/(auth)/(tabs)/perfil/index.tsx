import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "@/config/firebase-config";
import { router } from "expo-router";

export default function Perfil() {
  const usuario = auth.currentUser;

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {usuario?.photoURL ? (
        <Image
          source={{ uri: usuario.photoURL }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      ) : (
        <Image
          source={require("@/assets/images/ICONE1.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
      )}

      <Text>Nome do usuário: {usuario?.displayName}</Text>
      <Text>Email do usuário: {usuario?.email}</Text>

      <TouchableOpacity
        style={{
          marginTop: 10,
          padding: 10,
          borderRadius: 5,
          backgroundColor: "red",
        }}
        onPress={() => {
          auth.signOut();
          router.replace("/login");
        }}
      >
        <Text style={{ color: "#ffffff", fontSize: 16 }}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
