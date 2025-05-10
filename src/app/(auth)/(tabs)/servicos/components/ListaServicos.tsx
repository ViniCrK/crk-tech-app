import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import { db } from "@/config/firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { IServico } from "@/models/Servico";
import CardServico from "./CardServico";

export default function ListaServicos() {
  const imagens = [
    require("@/assets/icones/computador.png"),
    require("@/assets/icones/limpeza-computador.png"),
    require("@/assets/icones/limpeza-notebook.png"),
    require("@/assets/icones/upgrade.png"),
    require("@/assets/icones/consultoria.png"),
  ];

  const [servicos, setServicos] = useState<IServico[]>([]);
  const [carregando, setCarregando] = useState(true);

  const buscarServicos = async () => {
    try {
      const servicosRef = collection(db, "servicos");
      const q = query(servicosRef, orderBy("preco", "desc"));

      const querySnapshot = await getDocs(q);
      const dados: IServico[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IServico[];

      setServicos(dados);
    } catch (erro) {
      Alert.alert("Erro ao buscar os serviços no Firestore:", `${erro}`);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarServicos();
  }, []);

  if (carregando) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{ fontSize: 32, color: "#fff" }}>
          Carregando serviços...
        </Text>
      </View>
    );
  }

  return (
    <View style={{ paddingBottom: 140 }}>
      {!servicos && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#fff" animating={true} />
          <Text style={{ fontSize: 48 }}>Carregando serviços...</Text>
        </View>
      )}
      <FlatList
        data={servicos}
        renderItem={({ item, index }) => (
          <View>
            <CardServico servico={item} imagem={imagens[index]} />
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
});
