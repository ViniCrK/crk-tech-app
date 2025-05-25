import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";
import { db } from "@/config/firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";
import { Formik } from "formik";
import cadastrarServicoSchema from "@/schemas/cadastrarServicoSchema";
import exibirAlerta from "@/utils/AlertaToast";

export default function CadastrarServico() {
  const cadastrarServico = async (dados: any) => {
    try {
      const docRef = doc(collection(db, "servicos"));

      await setDoc(docRef, {
        id: docRef.id,
        preco: parseFloat(dados.preco),
        titulo: dados.titulo,
        descricao: dados.descricao,
      });
    } catch (erro) {
      exibirAlerta(
        "error",
        "bottom",
        "Erro ao cadastrar documento no Firestore",
        `${erro}`
      );
    }

    exibirAlerta("success", "bottom", "Serviço cadastrado com sucesso!");

    return router.push("/servicos");
  };

  return (
    <Formik
      initialValues={{
        titulo: "",
        preco: "",
        descricao: "",
      }}
      validationSchema={cadastrarServicoSchema}
      onSubmit={(dados) => cadastrarServico(dados)}
    >
      {({
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

          <Text style={styles.titulo}>Formulário de Cadastro</Text>

          <View style={styles.formInputs}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
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

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
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

            <View style={styles.inputDescricaoContainer}>
              <TextInput
                style={styles.inputTexto}
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

            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.botao}
            >
              <Text style={styles.textoBotao}>
                {!isSubmitting ? "Enviar" : "Enviando"}
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
