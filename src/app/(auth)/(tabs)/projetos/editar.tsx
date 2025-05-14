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
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { IProjeto } from "@/models/Projeto";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase-config";
import { Formik } from "formik";
import cadastrarProjetoSchema from "@/schemas/cadastrarProjetoSchema";
import exibirAlerta from "@/utils/AlertaToast";

export default function EditarProjeto() {
  const [projeto, setProjeto] = useState<IProjeto | null>(null);
  const { id } = useLocalSearchParams();

  const buscarProjeto = async () => {
    if (!id || typeof id !== "string") return;

    const docRef = doc(db, "projetos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProjeto({ id: docSnap.id, ...docSnap.data() } as IProjeto);
    }
  };

  const editarProjeto = async (dados: any) => {
    try {
      if (!id || typeof id !== "string") return;

      const docRef = doc(db, "projetos", id);
      await updateDoc(docRef, dados);
    } catch (erro) {
      exibirAlerta(
        "error",
        "bottom",
        `Erro ao atualizar os dados do Projeto ${projeto?.titulo}.`,
        `${erro}`
      );
    }

    exibirAlerta("success", "bottom", "Projeto atualizado com sucesso!");

    return router.push("/projetos");
  };

  useEffect(() => {
    buscarProjeto();
  }, []);

  return (
    <Formik
      initialValues={{
        titulo: projeto?.titulo,
        descricao: projeto?.descricao,
        especificacoes: {
          processador: projeto?.especificacoes.processador,
          placaMae: projeto?.especificacoes.placaMae,
          memoriaRAM: projeto?.especificacoes.memoriaRAM,
          placaDeVideo: projeto?.especificacoes.placaDeVideo,
          armazenamento: projeto?.especificacoes.armazenamento,
          fonte: projeto?.especificacoes.fonte,
          airCooler: projeto?.especificacoes.airCooler,
          waterCooler: projeto?.especificacoes.waterCooler,
          gabinete: projeto?.especificacoes.gabinete,
        },
      }}
      enableReinitialize
      validationSchema={cadastrarProjetoSchema}
      onSubmit={(dados) => editarProjeto(dados)}
    >
      {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
        <ScrollView
          style={styles.formContainer}
          contentContainerStyle={{ alignItems: "center" }}
        >
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
                  placeholder="Título do Projeto"
                  placeholderTextColor={"#000000"}
                  autoFocus
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Descrição:</Text>

              <View style={styles.inputDescricaoContainer}>
                <TextInput
                  style={styles.inputTexto}
                  value={values.descricao}
                  onChangeText={handleChange("descricao")}
                  onBlur={handleBlur("descricao")}
                  placeholder="Descrição do Projeto"
                  placeholderTextColor={"#000000"}
                  multiline
                />
              </View>
            </View>

            <View style={{ gap: 20 }}>
              <Text style={styles.label}>Especificações:</Text>

              <View>
                <Text style={styles.label}>Processador:</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputTexto}
                    value={values.especificacoes.processador}
                    onChangeText={handleChange("especificacoes.processador")}
                    onBlur={handleBlur("especificacoes.processador")}
                    placeholder="Processador"
                    placeholderTextColor={"#000000"}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Placa Mãe:</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputTexto}
                    value={values.especificacoes.placaMae}
                    onChangeText={handleChange("especificacoes.placaMae")}
                    onBlur={handleBlur("especificacoes.placaMae")}
                    placeholder="Placa Mãe"
                    placeholderTextColor={"#000000"}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Memória RAM:</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputTexto}
                    value={values.especificacoes.memoriaRAM}
                    onChangeText={handleChange("especificacoes.memoriaRAM")}
                    onBlur={handleBlur("especificacoes.memoriaRAM")}
                    placeholder="Memória RAM"
                    placeholderTextColor={"#000000"}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Placa de Vídeo:</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputTexto}
                    value={values.especificacoes.placaDeVideo}
                    onChangeText={handleChange("especificacoes.placaDeVideo")}
                    onBlur={handleBlur("especificacoes.placaDeVideo")}
                    placeholder="Placa de Vídeo"
                    placeholderTextColor={"#000000"}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Armazenamento:</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputTexto}
                    value={values.especificacoes.armazenamento}
                    onChangeText={handleChange("especificacoes.armazenamento")}
                    onBlur={handleBlur("especificacoes.armazenamento")}
                    placeholder="Armazenamento"
                    placeholderTextColor={"#000000"}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Fonte:</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputTexto}
                    value={values.especificacoes.fonte}
                    onChangeText={handleChange("especificacoes.fonte")}
                    onBlur={handleBlur("especificacoes.fonte")}
                    placeholder="Fonte"
                    placeholderTextColor={"#000000"}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Air Cooler:</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputTexto}
                    value={values.especificacoes.airCooler}
                    onChangeText={handleChange("especificacoes.airCooler")}
                    onBlur={handleBlur("especificacoes.airCooler")}
                    placeholder="Air Cooler"
                    placeholderTextColor={"#000000"}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Water Cooler:</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputTexto}
                    value={values.especificacoes.waterCooler}
                    onChangeText={handleChange("especificacoes.waterCooler")}
                    onBlur={handleBlur("especificacoes.waterCooler")}
                    placeholder="Water Cooler"
                    placeholderTextColor={"#000000"}
                  />
                </View>
              </View>

              <View>
                <Text style={styles.label}>Gabinete:</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputTexto}
                    value={values.especificacoes.gabinete}
                    onChangeText={handleChange("especificacoes.gabinete")}
                    onBlur={handleBlur("especificacoes.gabinete")}
                    placeholder="Gabinete"
                    placeholderTextColor={"#000000"}
                  />
                </View>
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
