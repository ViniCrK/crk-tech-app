import { useState } from "react";
import { router } from "expo-router";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import LoginSchema from "@/schemas/loginSchema";
import { auth } from "@/config/firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [cadastro, setCadastro] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/CRK TECH LOGO PRETO.png")}
        style={{ height: 120, width: 240 }}
      />

      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={LoginSchema}
        onSubmit={() => router.replace("/(auth)")}
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
            <Text style={styles.titulo}>{cadastro ? "Cadastro" : "Login"}</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder="Insira seu e-mail"
                placeholderTextColor={"#000000"}
                keyboardType="email-address"
                autoFocus={false}
              />
              {errors.email && touched.email && (
                <Text style={styles.textoErro}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.input}
                onChangeText={handleChange("senha")}
                onBlur={handleBlur("senha")}
                placeholder="Insira sua senha"
                placeholderTextColor={"#000000"}
                secureTextEntry
              />
              {errors.senha && touched.senha && (
                <Text style={styles.textoErro}>{errors.senha}</Text>
              )}

              <Button
                onPress={
                  cadastro
                    ? () => {
                        createUserWithEmailAndPassword(
                          auth,
                          values.email,
                          values.senha
                        )
                          .then(() => router.push("/login"))
                          .catch((erro) =>
                            Alert.alert(
                              "Erro",
                              "Não foi possível criar o usuário, tente novamente"
                            )
                          );
                      }
                    : () => {
                        signInWithEmailAndPassword(
                          auth,
                          values.email,
                          values.senha
                        )
                          .then(() => handleSubmit())
                          .catch((erro) =>
                            Alert.alert("Erro", "Login ou Senha incorreta!")
                          );
                      }
                }
                title={!cadastro ? "Entrar" : "Cadastrar"}
                color={"#2547A0"}
                disabled={isSubmitting}
              />

              {!cadastro ? (
                <TouchableOpacity
                  onPress={() => setCadastro(true)}
                  style={styles.rodapeContainer}
                >
                  <Text style={styles.textoRodape}>Crie sua conta</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setCadastro(false)}
                  style={styles.rodapeContainer}
                >
                  <Text style={styles.textoRodape}>
                    Já tem uma conta? Faça login
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2547A0",
  },
  formContainer: {
    height: "auto",
    width: 320,
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  titulo: {
    fontWeight: "medium",
    fontSize: 32,
    textAlign: "center",
    paddingBottom: 20,
  },
  inputContainer: {
    gap: 20,
  },
  input: {
    height: 40,
    width: 260,
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
  rodapeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textoRodape: {
    fontSize: 12,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#2547A0",
  },
});
