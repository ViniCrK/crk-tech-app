import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import ListaServicos from "./components/ListaServicos";

export default function Servicos() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        if (usuario.email === "vinicius260803@gmail.com") {
          setIsAdmin(true);
        }
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>NOSSOS SERVIÇOS</Text>

      {isAdmin && (
        <Link href="/servicos/cadastrar" asChild>
          <TouchableOpacity style={styles.botaoAdd}>
            <Text style={styles.textoBotaoAdd}>+</Text>
          </TouchableOpacity>
        </Link>
      )}

      <ListaServicos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 40,
    backgroundColor: "#001044",
  },
  titulo: {
    maxWidth: 105,
    paddingBottom: 10,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  botaoAdd: {
    position: "absolute",
    top: 30,
    right: 40,
    backgroundColor: "#FFF",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoAdd: {
    color: "#2547A0",
    fontSize: 36,
    lineHeight: 46,
  },
});
