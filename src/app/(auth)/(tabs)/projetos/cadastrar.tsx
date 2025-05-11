import { db } from "@/config/firebase-config";
import cadastrarProjetoSchema from "@/schemas/cadastrarProjetoSchema";
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
  Alert,
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
      Alert.alert("Erro ao cadastrar Projeto no Firestore:", `${erro}`);
    }

    Alert.alert("Projeto cadastrado com sucesso!");

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

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("titulo")}
              onBlur={handleBlur("titulo")}
              placeholder="Título do Projeto"
              placeholderTextColor={"#000000"}
              autoFocus
            />
            {errors.titulo && touched.titulo && (
              <Text style={styles.textoErro}>{errors.titulo}</Text>
            )}

            <TextInput
              style={styles.inputDescricao}
              onChangeText={handleChange("descricao")}
              onBlur={handleBlur("descricao")}
              placeholder="Descrição do Projeto"
              placeholderTextColor={"#000000"}
              multiline
            />
            {errors.descricao && touched.descricao && (
              <Text style={styles.textoErro}>{errors.descricao}</Text>
            )}

            <View style={{ gap: 20 }}>
              <Text style={styles.label}>Especificações:</Text>
              <TextInput
                style={styles.input}
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

              <TextInput
                style={styles.input}
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

              <TextInput
                style={styles.input}
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

              <TextInput
                style={styles.input}
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

              <TextInput
                style={styles.input}
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

              <TextInput
                style={styles.input}
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

              <TextInput
                style={styles.input}
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

              <TextInput
                style={styles.input}
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

              <TextInput
                style={styles.input}
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

            <Button
              onPress={() => handleSubmit()}
              title={"Enviar"}
              color={"#2147A0"}
              disabled={isSubmitting}
            />
            <View style={{ paddingBottom: 120 }}></View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 30,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
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
