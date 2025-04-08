import { useAuth } from "@/context/AuthContext";
import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil() {
  const { sair } = useAuth();

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Image
        source={require("@/assets/images/vinicius.jpg")}
        style={{ height: 100, width: 100, borderRadius: 50 }}
      />

      <Text>Nome do usuário</Text>
      <Text>Email do usuário</Text>

      <TouchableOpacity
        style={{
          marginTop: 10,
          padding: 10,
          borderRadius: 5,
          backgroundColor: "red",
        }}
        onPress={sair}
      >
        <Text style={{ color: "#ffffff", fontSize: 16 }}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
