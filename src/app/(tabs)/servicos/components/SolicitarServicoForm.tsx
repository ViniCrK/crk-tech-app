import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

import { Formik } from "formik";
import consultoriaSchema from "@/schemas/consultoriaSchema";

import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";

export default function SolicitarServicoForm() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(resultado);

    if (!resultado.canceled) {
      setImage(resultado.assets[0].uri);
    }
  };
  return (
    <Formik
      initialValues={{
        nome: "",
        email: "",
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
              placeholder="Insira seu nome e sobrenome"
              placeholderTextColor={"#000000"}
              autoFocus
            />

            <TextInput
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Insira seu e-mail"
              placeholderTextColor={"#000000"}
              keyboardType="email-address"
            />

            <Picker
              onValueChange={handleChange("idade")}
              style={styles.selectInput}
              mode="dropdown"
              selectionColor={"blue"}
              placeholder="Idade"
              numberOfLines={1}
            >
              <Picker.Item label="Computador" />
              <Picker.Item label="Notebook" />
            </Picker>

            <TextInput
              style={styles.input}
              onChangeText={handleChange("descricaoSolicitacao")}
              onBlur={handleBlur("descricaoSolicitacao")}
              placeholder="Descrição da Solicitação"
              placeholderTextColor={"#000000"}
            />

            <Button title="Escolher imagem de referência" onPress={pickImage} />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ height: 200, width: 100 }}
              />
            )}

            <Button
              onPress={() => handleSubmit()}
              title={"Enviar"}
              color={"#212020"}
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
  selectInput: {
    fontSize: 14,
    fontWeight: "regular",
    backgroundColor: "#DEDEDE",
  },
});
