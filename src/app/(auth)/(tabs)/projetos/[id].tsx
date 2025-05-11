import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import ProjetoNaoEncontrado from "./components/ProjetoNaoEncontrado";
import { useEffect, useState } from "react";
import { IProjeto } from "@/models/Projeto";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";

export default function DetalheProjeto() {
  const [projeto, setProjeto] = useState<IProjeto | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const { id } = useLocalSearchParams();

  const buscarProjeto = async () => {
    if (!id || typeof id !== "string") return;

    const docRef = doc(db, "projetos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProjeto({ id: docSnap.id, ...docSnap.data() } as IProjeto);
    }
  };

  const excluirProjeto = async (id: string) => {
    try {
      const docRef = doc(db, "projetos", id);
      await deleteDoc(docRef);
    } catch (erro) {
      Alert.alert("Erro ao excluir projeto.", `${erro}`);
    }

    Alert.alert("Projeto excluído com sucesso!");

    return router.push("/projetos");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        if (usuario.email === "vinicius260803@gmail.com") {
          setIsAdmin(true);
        }
      }
    });

    buscarProjeto();

    return unsubscribe;
  }, []);

  if (!projeto) {
    return <ProjetoNaoEncontrado />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.projetoContainer}>
        <Image
          source={require("@/assets/images/projeto-3.jpg")}
          style={styles.projetoImagem}
        />

        <Text style={styles.projetoTitulo}>{projeto.titulo}</Text>

        <View style={styles.especificacoesContainer}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Especificações:
          </Text>

          <Text>Processador: {projeto.especificacoes.processador}</Text>
          <Text>Placa Mãe: {projeto.especificacoes.placaMae}</Text>
          <Text>Memória RAM: {projeto.especificacoes.memoriaRAM}</Text>
          <Text>Placa de Vídeo: {projeto.especificacoes.placaDeVideo}</Text>
          <Text>Placa de Vídeo: {projeto.especificacoes.armazenamento}</Text>
          <Text>Fonte: {projeto.especificacoes.fonte}</Text>
          <Text>
            Air Cooler:{" "}
            {!projeto.especificacoes.airCooler
              ? "Não possui"
              : projeto.especificacoes.airCooler}
          </Text>
          <Text>
            Water Cooler:{" "}
            {!projeto.especificacoes.waterCooler
              ? "Não possui"
              : projeto.especificacoes.waterCooler}
          </Text>
          <Text>Gabinete: {projeto.especificacoes.gabinete}</Text>
        </View>

        <View style={styles.descricaoContainer}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Descrição:</Text>
          <Text>{projeto.descricao}</Text>
        </View>

        {isAdmin && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Link
              href={{
                pathname: "projetos/editar",
                params: { id: projeto.id },
              }}
              asChild
            >
              <TouchableOpacity>
                <Text style={styles.botaoEditar}>Editar Projeto</Text>
              </TouchableOpacity>
            </Link>

            <TouchableOpacity onPress={() => excluirProjeto(projeto.id)}>
              <Text style={styles.botaoExcluir}>Excluir Projeto</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "auto",
    paddingTop: 30,
    backgroundColor: "#FFFFFF",
  },
  projetoContainer: {
    paddingHorizontal: 30,
    paddingBottom: 120,
    gap: 20,
  },
  projetoImagem: {
    width: 300,
    height: 300,
    borderRadius: 10,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },
  projetoTitulo: {
    color: "#212020",
    fontSize: 36,
    fontWeight: "bold",
  },
  especificacoesContainer: {
    gap: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#001044",
  },
  descricaoContainer: {
    gap: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#FFFFFF",
  },
  botaoEditar: {
    alignSelf: "center",
    textAlign: "center",
    width: 160,
    marginTop: 10,
    padding: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    backgroundColor: "#3B82F6",
    borderRadius: 10,
  },
  botaoExcluir: {
    alignSelf: "center",
    textAlign: "center",
    width: 160,
    marginTop: 10,
    padding: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    backgroundColor: "red",
    borderRadius: 10,
  },
});
