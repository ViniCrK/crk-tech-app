import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
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

          <View style={styles.inputContainer}>
            <View>
              <Text style={styles.label}>Título:</Text>

              <TextInput
                style={styles.input}
                value={values.titulo}
                onChangeText={handleChange("titulo")}
                onBlur={handleBlur("titulo")}
                placeholder="Título do Projeto"
                placeholderTextColor={"#000000"}
                autoFocus
              />
            </View>

            <View>
              <Text style={styles.label}>Descrição:</Text>

              <TextInput
                style={styles.inputDescricao}
                value={values.descricao}
                onChangeText={handleChange("descricao")}
                onBlur={handleBlur("descricao")}
                placeholder="Descrição do Projeto"
                placeholderTextColor={"#000000"}
                multiline
              />
            </View>

            <View style={{ gap: 20 }}>
              <Text style={styles.label}>Especificações:</Text>

              <View>
                <Text style={styles.label}>Processador:</Text>

                <TextInput
                  style={styles.input}
                  value={values.especificacoes.processador}
                  onChangeText={handleChange("especificacoes.processador")}
                  onBlur={handleBlur("especificacoes.processador")}
                  placeholder="Processador"
                  placeholderTextColor={"#000000"}
                />
              </View>

              <View>
                <Text style={styles.label}>Placa Mãe:</Text>

                <TextInput
                  style={styles.input}
                  value={values.especificacoes.placaMae}
                  onChangeText={handleChange("especificacoes.placaMae")}
                  onBlur={handleBlur("especificacoes.placaMae")}
                  placeholder="Placa Mãe"
                  placeholderTextColor={"#000000"}
                />
              </View>

              <View>
                <Text style={styles.label}>Memória RAM:</Text>

                <TextInput
                  style={styles.input}
                  value={values.especificacoes.memoriaRAM}
                  onChangeText={handleChange("especificacoes.memoriaRAM")}
                  onBlur={handleBlur("especificacoes.memoriaRAM")}
                  placeholder="Memória RAM"
                  placeholderTextColor={"#000000"}
                />
              </View>

              <View>
                <Text style={styles.label}>Placa de Vídeo:</Text>

                <TextInput
                  style={styles.input}
                  value={values.especificacoes.placaDeVideo}
                  onChangeText={handleChange("especificacoes.placaDeVideo")}
                  onBlur={handleBlur("especificacoes.placaDeVideo")}
                  placeholder="Placa de Vídeo"
                  placeholderTextColor={"#000000"}
                />
              </View>

              <View>
                <Text style={styles.label}>Armazenamento:</Text>

                <TextInput
                  style={styles.input}
                  value={values.especificacoes.armazenamento}
                  onChangeText={handleChange("especificacoes.armazenamento")}
                  onBlur={handleBlur("especificacoes.armazenamento")}
                  placeholder="Armazenamento"
                  placeholderTextColor={"#000000"}
                />
              </View>

              <View>
                <Text style={styles.label}>Fonte:</Text>

                <TextInput
                  style={styles.input}
                  value={values.especificacoes.fonte}
                  onChangeText={handleChange("especificacoes.fonte")}
                  onBlur={handleBlur("especificacoes.fonte")}
                  placeholder="Fonte"
                  placeholderTextColor={"#000000"}
                />
              </View>

              <View>
                <Text style={styles.label}>Air Cooler:</Text>

                <TextInput
                  style={styles.input}
                  value={values.especificacoes.airCooler}
                  onChangeText={handleChange("especificacoes.airCooler")}
                  onBlur={handleBlur("especificacoes.airCooler")}
                  placeholder="Air Cooler"
                  placeholderTextColor={"#000000"}
                />
              </View>

              <View>
                <Text style={styles.label}>Water Cooler:</Text>

                <TextInput
                  style={styles.input}
                  value={values.especificacoes.waterCooler}
                  onChangeText={handleChange("especificacoes.waterCooler")}
                  onBlur={handleBlur("especificacoes.waterCooler")}
                  placeholder="Water Cooler"
                  placeholderTextColor={"#000000"}
                />
              </View>

              <View>
                <Text style={styles.label}>Gabinete:</Text>

                <TextInput
                  style={styles.input}
                  value={values.especificacoes.gabinete}
                  onChangeText={handleChange("especificacoes.gabinete")}
                  onBlur={handleBlur("especificacoes.gabinete")}
                  placeholder="Gabinete"
                  placeholderTextColor={"#000000"}
                />
              </View>
            </View>

            <Button
              onPress={() => handleSubmit()}
              title={"Salvar Alterações"}
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
