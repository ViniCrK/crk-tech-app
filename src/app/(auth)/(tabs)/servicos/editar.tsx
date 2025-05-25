import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { db } from "@/config/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Formik } from "formik";
import cadastrarServicoSchema from "@/schemas/cadastrarServicoSchema";
import { IServico } from "@/models/Servico";
import exibirAlerta from "@/utils/AlertaToast";

export default function EditarServico() {
  const [servico, setServico] = useState<IServico | null>(null);
  const { id } = useLocalSearchParams();

  const buscarServico = async () => {
    if (!id || typeof id !== "string") return;

    const docRef = doc(db, "servicos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setServico({ id: docSnap.id, ...docSnap.data() } as IServico);
    }
  };

  const editarServico = async (dados: any) => {
    try {
      if (!id || typeof id !== "string") return;

      const docRef = doc(db, "servicos", id);

      await updateDoc(docRef, {
        titulo: dados.titulo,
        preco: parseFloat(dados.preco),
        descricao: dados.descricao,
      });
    } catch (erro) {
      exibirAlerta(
        "error",
        "bottom",
        `Erro ao atualizar os dados do Serviço ${servico?.titulo}-${servico?.id}:`,
        `${erro}`
      );
    }

    exibirAlerta("success", "bottom", "Serviço atualizado com sucesso!");

    return router.push("/servicos");
  };

  useEffect(() => {
    buscarServico();
  }, []);
  return (
    <Formik
      initialValues={{
        titulo: servico?.titulo,
        preco: servico?.preco,
        descricao: servico?.descricao,
      }}
      enableReinitialize
      validationSchema={cadastrarServicoSchema}
      onSubmit={(dados) => editarServico(dados)}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <View style={styles.formContainer}>
          <Image
            source={require("@/assets/images/CRK TECH LOGO PRETO.png")}
            style={{ height: 60, width: 120 }}
          />

          <Text style={styles.titulo}>Formulário de Edição</Text>

          <View style={styles.formInputs}>
            <View>
              <Text style={styles.label}>Título:</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputTexto}
                  value={values.titulo}
                  onChangeText={handleChange("titulo")}
                  onBlur={handleBlur("titulo")}
                  placeholder="Título do Serviço"
                  placeholderTextColor={"#000000"}
                  autoFocus
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Preço(R$):</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputTexto}
                  value={values.preco?.toString()}
                  onChangeText={handleChange("preco")}
                  onBlur={handleBlur("preco")}
                  placeholder="Preço do Serviço (R$)"
                  placeholderTextColor={"#000000"}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Descrição:</Text>

              <View style={styles.inputDescricaoContainer}>
                <TextInput
                  style={styles.inputTexto}
                  value={values.descricao}
                  multiline
                  onChangeText={handleChange("descricao")}
                  onBlur={handleBlur("descricao")}
                  placeholder="Descrição do Serviço"
                  placeholderTextColor={"#000000"}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.botao}
            >
              <Text style={styles.textoBotao}>
                {!isSubmitting ? "Salvar" : "Salvando"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  titulo: {
    fontWeight: "medium",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 20,
  },
  formInputs: {
    gap: 20,
  },
  label: {
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: 320,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 10,
  },
  inputDescricaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 50,
    width: 320,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 10,
  },
  inputTexto: {
    fontSize: 16,
    paddingLeft: 10,
  },
  textoErro: {
    color: "red",
    fontSize: 12,
  },
  botao: {
    alignSelf: "flex-end",
    width: 120,
    padding: 16,
    marginBottom: 120,
    fontWeight: "bold",
    color: "#FFFFFF",
    backgroundColor: "#3B82F6",
    borderRadius: 10,
  },
  textoBotao: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
