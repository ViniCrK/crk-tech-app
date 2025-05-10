import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { db } from "@/config/firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";
import { Formik } from "formik";
import cadastrarServicoSchema from "@/schemas/cadastrarServicoSchema";

export default function CadastrarServico() {
  const cadastrarServico = async (dados: any) => {
    try {
      const docRef = doc(collection(db, "servicos"));

      await setDoc(docRef, {
        id: docRef.id,
        ...dados,
      });
    } catch (erro) {
      Alert.alert("Erro ao cadastrar documento no Firestore", `${erro}`);
    }

    Alert.alert("Serviço cadastrado com sucesso!");

    return router.push("/servicos");
  };

  return (
    <Formik
      initialValues={{
        titulo: "",
        preco: 0.0,
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

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("titulo")}
              onBlur={handleBlur("titulo")}
              placeholder="Título do Serviço"
              placeholderTextColor={"#000000"}
              autoFocus
            />
            {errors.titulo && touched.titulo && (
              <Text style={styles.textoErro}>{errors.titulo}</Text>
            )}

            <TextInput
              style={styles.input}
              onChangeText={handleChange("preco")}
              onBlur={handleBlur("preco")}
              placeholder="Preço do Serviço (R$)"
              placeholderTextColor={"#000000"}
              keyboardType="numeric"
            />
            {errors.preco && touched.preco && (
              <Text style={styles.textoErro}>{errors.preco}</Text>
            )}

            <TextInput
              style={styles.inputDescricao}
              multiline
              onChangeText={handleChange("descricao")}
              onBlur={handleBlur("descricao")}
              placeholder="Descrição do Serviço"
              placeholderTextColor={"#000000"}
            />
            {errors.descricao && touched.descricao && (
              <Text style={styles.textoErro}>{errors.descricao}</Text>
            )}

            <Button
              onPress={() => handleSubmit()}
              title={"Enviar"}
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
