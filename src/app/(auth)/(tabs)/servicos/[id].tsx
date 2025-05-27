import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { auth, db } from "@/config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { IServico } from "@/models/Servico";
import ServicoNaoEncontrado from "./components/ServicoNaoEncontrado";
import exibirAlerta from "@/utils/AlertaToast";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function DetalheServico() {
  const [servico, setServico] = useState<IServico | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const { id } = useLocalSearchParams();

  const buscarServico = async () => {
    if (!id || typeof id !== "string") return;

    const docRef = doc(db, "servicos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setServico({ id: docSnap.id, ...docSnap.data() } as IServico);
    }
  };

  const excluirServico = async (id: string) => {
    try {
      deleteDoc(doc(db, "servicos", id));
    } catch (erro) {
      exibirAlerta(
        "error",
        "bottom",
        "Erro ao excluir serviço do Firestore: ",
        `${erro}`
      );
    }

    exibirAlerta("success", "bottom", "Serviço deletado com sucesso!");

    return router.push("/servicos");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        if (usuario.email === "vinicius260803@gmail.com") {
          setIsAdmin(true);
        }
      }
    });

    buscarServico();

    return unsubscribe;
  }, []);

  if (!servico) {
    return <ServicoNaoEncontrado />;
  }

  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.container}>
        <View style={styles.servicoContainer}>
          <Image
            source={require("@/assets/icones/computador.png")}
            style={styles.imagem}
          />

          <Text style={styles.titulo}>{servico.titulo}</Text>

          <Text style={styles.preco}>R${servico.preco},00</Text>

          <Text style={styles.descricao}>{servico.descricao}</Text>

          <Link href="servicos/solicitar" asChild>
            <TouchableOpacity>
              <Text style={styles.botao}>Preencher formulário</Text>
            </TouchableOpacity>
          </Link>
          {isAdmin && (
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Link
                href={{
                  pathname: "servicos/editar",
                  params: { id: servico.id },
                }}
                asChild
              >
                <TouchableOpacity>
                  <Text style={styles.botaoEditar}>Editar Serviço</Text>
                </TouchableOpacity>
              </Link>

              <TouchableOpacity onPress={() => excluirServico(servico.id)}>
                <Text style={styles.botaoExcluir}>Excluir Serviço</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "auto",
    paddingTop: 30,
    backgroundColor: "#FFFFFF",
  },
  servicoContainer: {
    paddingHorizontal: 30,
    paddingBottom: 120,
    gap: 20,
  },
  imagem: {
    height: 300,
    width: "100%",
    borderRadius: 10,
    borderWidth: 2,
  },
  titulo: {
    fontSize: 36,
    fontWeight: "bold",
  },
  preco: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2547A0",
  },
  descricao: {
    fontSize: 18,
  },
  botao: {
    alignSelf: "center",
    textAlign: "center",
    width: "100%",
    marginTop: 10,
    padding: 20,
    fontSize: 18,
    color: "#FFFFFF",
    backgroundColor: "#2147A0",
    borderRadius: 10,
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
