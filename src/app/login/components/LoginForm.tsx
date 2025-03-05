import { useState } from "react";
import { router } from "expo-router";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Formik } from "formik";
import LoginSchema from "@/schemas/loginSchema";
import CadastroSchema from "@/schemas/cadastroSchema";

export default function LoginForm() {
  const [cadastro, setCadastro] = useState(false);

  return (
    <Formik
      initialValues={
        !cadastro
          ? { email: "", senha: "" }
          : { email: "", usuario: "", senha: "" }
      }
      validationSchema={!cadastro ? LoginSchema : CadastroSchema}
      onSubmit={(dados) => console.log(dados)}
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
        <View style={styles.container}>
          <Text style={styles.titulo}>Bem-vindo(a) a CRK Tech</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              placeholder="Insira seu e-mail"
              placeholderTextColor={"#000000"}
              keyboardType="email-address"
              autoFocus
            />
            {errors.email && touched.email && (
              <Text style={styles.textoErro}>{errors.email}</Text>
            )}

            {cadastro && (
              <>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("usuario")}
                  onBlur={handleBlur("usuario")}
                  placeholder="Insira seu nome de usuário"
                  placeholderTextColor={"#000000"}
                />

                {errors.usuario && touched.usuario && (
                  <Text style={styles.textoErro}>{errors.usuario}</Text>
                )}
              </>
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
              onPress={() => handleSubmit()}
              title={!cadastro ? "Entrar" : "Cadastrar"}
              color={"#2547A0"}
              disabled={isSubmitting}
            />

            <View
              style={!cadastro ? styles.rodapeContainer : { display: "none" }}
            >
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.textoRodape}>Esqueceu sua senha?</Text>
              </TouchableOpacity>

              <Text style={styles.textoRodape}>|</Text>

              <TouchableOpacity onPress={() => setCadastro(true)}>
                <Text style={styles.textoRodape}>Crie sua conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: 320,
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
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
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-around",
  },
  textoRodape: {
    fontSize: 12,
  },
});
