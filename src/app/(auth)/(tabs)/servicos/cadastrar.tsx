import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";
import cadastrarServicoSchema from "@/schemas/cadastrarServicoSchema";

import * as ImagePicker from "expo-image-picker";

import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function CadastrarServico() {
  const [icone, setIcone] = useState<string | null>(null);

  return (
    <Formik
      initialValues={{
        titulo: "",
        preco: 0.0,
        descricao: "",
        icone: "",
      }}
      validationSchema={cadastrarServicoSchema}
      onSubmit={(dados) => console.log(dados)}
    >
      {({
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
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
              <Text style={{ maxWidth: 160 }}>Ícone do Serviço:</Text>
              {!icone ? (
                <TouchableOpacity
                  style={{ padding: 5, borderWidth: 1, borderRadius: 10 }}
                  onPress={async () => {
                    let icon = await ImagePicker.launchImageLibraryAsync({
                      allowsEditing: true,
                      aspect: [1, 1],
                      base64: true,
                      allowsMultipleSelection: false,
                      mediaTypes: ["images"],
                      quality: 1,
                    });

                    if (!icon.canceled) {
                      const base64Icone =
                        "data:image/jpg;base64," + icon.assets[0].base64;
                      setIcone(base64Icone);
                      setFieldValue("icone", base64Icone);
                    }
                  }}
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
                    source={{ uri: icone }}
                    style={{ height: 45, width: 45 }}
                  />

                  <TouchableOpacity onPress={() => setIcone(null)}>
                    <FontAwesome6 name="trash-can" size={32} color="red" />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            {errors.icone && touched.icone && (
              <Text style={styles.textoErro}>{errors.icone}</Text>
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
