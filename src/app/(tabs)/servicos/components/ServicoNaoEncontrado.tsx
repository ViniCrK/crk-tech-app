import { TouchableOpacity, Text, View } from "react-native";
import { router } from "expo-router";

export default function ServicoNaoEncontrado() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
      }}
    >
      <Text style={{ fontSize: 28 }}>Serviço Não Encontrado!</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={{ color: "#2547A0", fontSize: 18, marginTop: 10 }}>
          Voltar para a página de serviços
        </Text>
      </TouchableOpacity>
    </View>
  );
}
