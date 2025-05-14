import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
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
        preco: dados.preco,
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
          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.label}>Título:</Text>
              <TextInput
                style={styles.input}
                value={values.titulo}
                onChangeText={handleChange("titulo")}
                onBlur={handleBlur("titulo")}
                placeholder="Título do Serviço"
                placeholderTextColor={"#000000"}
                autoFocus
              />
              {errors.titulo && touched.titulo && (
                <Text style={styles.textoErro}>{errors.titulo}</Text>
              )}
            </View>

            <View>
              <Text style={styles.label}>Preço(R$):</Text>
              <TextInput
                style={styles.input}
                value={values.preco?.toString()}
                onChangeText={handleChange("preco")}
                onBlur={handleBlur("preco")}
                placeholder="Preço do Serviço (R$)"
                placeholderTextColor={"#000000"}
                keyboardType="numeric"
              />
              {errors.preco && touched.preco && (
                <Text style={styles.textoErro}>{errors.preco}</Text>
              )}
            </View>

            <View>
              <Text style={styles.label}>Descrição:</Text>
              <TextInput
                style={styles.inputDescricao}
                value={values.descricao}
                multiline
                onChangeText={handleChange("descricao")}
                onBlur={handleBlur("descricao")}
                placeholder="Descrição do Serviço"
                placeholderTextColor={"#000000"}
              />
              {errors.descricao && touched.descricao && (
                <Text style={styles.textoErro}>{errors.descricao}</Text>
              )}
            </View>

            <Button
              onPress={() => handleSubmit()}
              title={"Salvar Alterações"}
              color={"#2147A0"}
              disabled={isSubmitting}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    height: "auto",
    paddingVertical: 30,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  titulo: {
    fontWeight: "medium",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    gap: 20,
  },
  label: {
    paddingBottom: 5,
    fontSize: 18,
  },
  input: {
    height: 50,
    width: 350,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "regular",
    backgroundColor: "#DEDEDE",
    borderRadius: 5,
  },
  inputDescricao: {
    minHeight: 50,
    width: 350,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: "regular",
    backgroundColor: "#DEDEDE",
    borderRadius: 5,
  },
  textoErro: {
    color: "red",
    fontSize: 12,
  },
});
