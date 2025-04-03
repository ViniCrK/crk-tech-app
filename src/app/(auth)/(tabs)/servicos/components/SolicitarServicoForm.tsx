import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

import { Formik } from "formik";
import consultoriaSchema from "@/schemas/consultoriaSchema";

import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function SolicitarServicoForm() {
  const [imagem, setImagem] = useState<string | null>(null);

  const escolherImagem = async () => {
    let foto = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
      allowsMultipleSelection: false,
      mediaTypes: ["images"],
      quality: 0.7,
    });

    if (!foto.canceled) {
      setImagem("data:image/jpg;base64," + foto.assets[0].base64);
    }
  };
  return (
    <Formik
      initialValues={{
        nome: "",
        tipoEquipamento: "",
        descricaoSolicitacao: "",
        imagem: "",
      }}
      validationSchema={consultoriaSchema}
      onSubmit={(dados) => console.log(dados)}
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

          <Text style={styles.titulo}>Formulário de Solicitação</Text>

          <View style={{ gap: 20 }}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("nome")}
              onBlur={handleBlur("nome")}
              placeholder="Nome completo"
              placeholderTextColor={"#000000"}
              autoFocus
            />

            {errors.nome && touched.nome && (
              <Text style={styles.textoErro}>{errors.nome}</Text>
            )}

            <Picker
              onValueChange={handleChange("tipoEquipamento")}
              style={{ backgroundColor: "#DEDEDE" }}
              mode="dropdown"
              numberOfLines={1}
            >
              <Picker.Item
                style={{ fontSize: 14 }}
                label="Tipo do Equipamento"
              />
              <Picker.Item
                style={{ fontSize: 14 }}
                label="Computador"
                value={"Computador"}
              />
              <Picker.Item
                style={{ fontSize: 14 }}
                label="Notebook"
                value={"Notebook"}
              />
            </Picker>

            {errors.tipoEquipamento && touched.tipoEquipamento && (
              <Text style={styles.textoErro}>{errors.tipoEquipamento}</Text>
            )}

            <TextInput
              style={styles.inputDescricao}
              multiline
              onChangeText={handleChange("descricaoSolicitacao")}
              onBlur={handleBlur("descricaoSolicitacao")}
              placeholder="Descrição da Solicitação"
              placeholderTextColor={"#000000"}
            />

            {errors.descricaoSolicitacao && touched.descricaoSolicitacao && (
              <Text style={styles.textoErro}>
                {errors.descricaoSolicitacao}
              </Text>
            )}

            {/* TODO: Descobrir uma forma de armazenar a uri da imagem */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                padding: 10,
                borderRadius: 5,
                backgroundColor: "#D9D9D9",
              }}
            >
              <Text style={{ maxWidth: 160 }}>Imagem para inspiração:</Text>
              {!imagem ? (
                <TouchableOpacity
                  style={{ padding: 5, borderWidth: 1, borderRadius: 10 }}
                  onPress={escolherImagem}
                >
                  <Entypo name="images" size={40} color="black" />
                </TouchableOpacity>
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 23,
                  }}
                >
                  <Image
                    source={{ uri: imagem }}
                    style={{ height: 100, width: 100 }}
                  />

                  <TouchableOpacity onPress={() => setImagem(null)}>
                    <FontAwesome6 name="trash-can" size={32} color="red" />
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {errors.imagem && touched.imagem && (
              <Text style={styles.textoErro}>{errors.imagem}</Text>
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
    paddingTop: 30,
    paddingBottom: 100,
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
    height: "auto",
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
