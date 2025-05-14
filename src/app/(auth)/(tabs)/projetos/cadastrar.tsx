import { db } from "@/config/firebase-config";
import cadastrarProjetoSchema from "@/schemas/cadastrarProjetoSchema";
import exibirAlerta from "@/utils/AlertaToast";
import { router } from "expo-router";
import { collection, doc, setDoc } from "firebase/firestore";
import { Formik } from "formik";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function CadastrarProjeto() {
  const cadastrarProjeto = async (dados: any) => {
    try {
      const docRef = doc(collection(db, "projetos"));

      await setDoc(docRef, {
        id: docRef.id,
        ...dados,
      });
    } catch (erro) {
      exibirAlerta(
        "error",
        "bottom",
        "Erro ao cadastrar Projeto no Firestore:",
        `${erro}`
      );
    }

    exibirAlerta("success", "bottom", "Projeto cadastrado com sucesso!");

    return router.push("/projetos");
  };
  return (
    <Formik
      initialValues={{
        titulo: "",
        descricao: "",
        especificacoes: {
          processador: "",
          placaMae: "",
          memoriaRAM: "",
          placaDeVideo: "",
          armazenamento: "",
          fonte: "",
          airCooler: "",
          waterCooler: "",
          gabinete: "",
        },
      }}
      validationSchema={cadastrarProjetoSchema}
      onSubmit={(dados) => cadastrarProjeto(dados)}
    >
      {({
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <ScrollView
          style={styles.formContainer}
          contentContainerStyle={{ alignItems: "center" }}
        >
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
                placeholder="Título do Projeto"
                placeholderTextColor={"#000000"}
                autoFocus
              />
              {errors.titulo && touched.titulo && (
                <Text style={styles.textoErro}>{errors.titulo}</Text>
              )}
            </View>

            <View style={styles.inputDescricaoContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("descricao")}
                onBlur={handleBlur("descricao")}
                placeholder="Descrição do Projeto"
                placeholderTextColor={"#000000"}
                multiline
              />
              {errors.descricao && touched.descricao && (
                <Text style={styles.textoErro}>{errors.descricao}</Text>
              )}
            </View>

            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Especificações:
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("especificacoes.processador")}
                onBlur={handleBlur("especificacoes.processador")}
                placeholder="Processador"
                placeholderTextColor={"#000000"}
              />
              {errors.especificacoes?.processador &&
                touched.especificacoes?.processador && (
                  <Text style={styles.textoErro}>
                    {errors.especificacoes.processador}
                  </Text>
                )}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("especificacoes.placaMae")}
                onBlur={handleBlur("especificacoes.placaMae")}
                placeholder="Placa Mãe"
                placeholderTextColor={"#000000"}
              />
              {errors.especificacoes?.placaMae &&
                touched.especificacoes?.placaMae && (
                  <Text style={styles.textoErro}>
                    {errors.especificacoes.placaMae}
                  </Text>
                )}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("especificacoes.memoriaRAM")}
                onBlur={handleBlur("especificacoes.memoriaRAM")}
                placeholder="Memória RAM"
                placeholderTextColor={"#000000"}
              />
              {errors.especificacoes?.memoriaRAM &&
                touched.especificacoes?.memoriaRAM && (
                  <Text style={styles.textoErro}>
                    {errors.especificacoes.memoriaRAM}
                  </Text>
                )}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("especificacoes.placaDeVideo")}
                onBlur={handleBlur("especificacoes.placaDeVideo")}
                placeholder="Placa de Vídeo"
                placeholderTextColor={"#000000"}
              />
              {errors.especificacoes?.placaDeVideo &&
                touched.especificacoes?.placaDeVideo && (
                  <Text style={styles.textoErro}>
                    {errors.especificacoes.placaDeVideo}
                  </Text>
                )}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("especificacoes.armazenamento")}
                onBlur={handleBlur("especificacoes.armazenamento")}
                placeholder="Armazenamento"
                placeholderTextColor={"#000000"}
              />
              {errors.especificacoes?.armazenamento &&
                touched.especificacoes?.armazenamento && (
                  <Text style={styles.textoErro}>
                    {errors.especificacoes.armazenamento}
                  </Text>
                )}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("especificacoes.fonte")}
                onBlur={handleBlur("especificacoes.fonte")}
                placeholder="Fonte"
                placeholderTextColor={"#000000"}
              />
              {errors.especificacoes?.fonte &&
                touched.especificacoes?.fonte && (
                  <Text style={styles.textoErro}>
                    {errors.especificacoes.fonte}
                  </Text>
                )}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("especificacoes.airCooler")}
                onBlur={handleBlur("especificacoes.airCooler")}
                placeholder="Air Cooler"
                placeholderTextColor={"#000000"}
              />
              {errors.especificacoes?.airCooler &&
                touched.especificacoes?.airCooler && (
                  <Text style={styles.textoErro}>
                    {errors.especificacoes.airCooler}
                  </Text>
                )}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("especificacoes.waterCooler")}
                onBlur={handleBlur("especificacoes.waterCooler")}
                placeholder="Water Cooler"
                placeholderTextColor={"#000000"}
              />
              {errors.especificacoes?.waterCooler &&
                touched.especificacoes?.waterCooler && (
                  <Text style={styles.textoErro}>
                    {errors.especificacoes.waterCooler}
                  </Text>
                )}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTexto}
                onChangeText={handleChange("especificacoes.gabinete")}
                onBlur={handleBlur("especificacoes.gabinete")}
                placeholder="Gabinete"
                placeholderTextColor={"#000000"}
              />
              {errors.especificacoes?.gabinete &&
                touched.especificacoes?.gabinete && (
                  <Text style={styles.textoErro}>
                    {errors.especificacoes.gabinete}
                  </Text>
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
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingVertical: 30,
    backgroundColor: "#FFFFFF",
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
