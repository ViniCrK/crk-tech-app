import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { auth, db } from "@/config/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { IServico } from "@/models/Servico";

type Props = {
  servico: IServico;
  imagem: ImageSourcePropType;
};

export default function CardServico({ servico, imagem }: Props) {
  return (
    <View style={styles.itensContainer}>
      <Image source={imagem} style={styles.icone} />

      <Text style={styles.titulo}>{servico.titulo}</Text>

      <Text style={styles.descricao}>{servico.descricao}</Text>

      <Link
        href={{
          pathname: "servicos/[id]",
          params: { id: servico.id },
        }}
        asChild
      >
        <TouchableOpacity>
          <Text style={styles.botao}>Ver Mais</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  itensContainer: {
    height: "auto",
    width: 320,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  icone: {
    alignSelf: "flex-start",
    height: 45,
    width: 45,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "baseline",
  },
  descricao: {
    fontSize: 16,
    fontWeight: "regular",
  },
  botao: {
    alignSelf: "flex-end",
    padding: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    borderRadius: 10,
    backgroundColor: "#2547A0",
  },
});
