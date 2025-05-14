import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { Formik } from "formik";
import CadastroSchema from "@/schemas/cadastroSchema";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase-config";
import exibirAlerta from "@/utils/AlertaToast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Cadastro() {
  const cadastrarUsuario = async ({ nome, email, senha }: any) => {
    try {
      const usuario = await createUserWithEmailAndPassword(auth, email, senha);

      await setDoc(doc(db, "usuarios", usuario.user.uid), {
        nome,
        email,
      });

      exibirAlerta(
        "success",
        "bottom",
        "Usuário cadastrado com sucesso!",
        "Faça login para entrar"
      );
      router.back();
    } catch (erro) {
      exibirAlerta(
        "error",
        "bottom",
        "Erro",
        "Não foi possível criar o usuário, tente novamente."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/CRK TECH LOGO BRANCO.png")}
        style={{ height: 120, width: 240 }}
      />

      <Formik
        initialValues={{ nome: "", email: "", senha: "" }}
        validationSchema={CadastroSchema}
        onSubmit={(dados) => cadastrarUsuario(dados)}
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
            <Text style={styles.titulo}>Cadastrar</Text>

            <View style={styles.formInputs}>
              <View style={styles.inputContainer}>
                <AntDesign
                  name="user"
                  size={24}
                  color="gray"
                  style={styles.inputIcone}
                />

                <TextInput
                  style={styles.inputTexto}
                  onChangeText={handleChange("nome")}
                  onBlur={handleBlur("nome")}
                  placeholder="Nome"
                  placeholderTextColor={"#000000"}
                  keyboardType="default"
                  autoFocus
                />
                {errors.nome && touched.nome && (
                  <Text style={styles.textoErro}>{errors.nome}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <AntDesign
                  name="mail"
                  size={24}
                  color="gray"
                  style={styles.inputIcone}
                />

                <TextInput
                  style={styles.inputTexto}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="E-mail"
                  placeholderTextColor={"#000000"}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && (
                  <Text style={styles.textoErro}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <AntDesign
                  name="lock1"
                  size={24}
                  color="gray"
                  style={styles.inputIcone}
                />
                <TextInput
                  style={styles.inputTexto}
                  onChangeText={handleChange("senha")}
                  onBlur={handleBlur("senha")}
                  placeholder="Senha"
                  placeholderTextColor={"#000000"}
                  secureTextEntry
                />
                {errors.senha && touched.senha && (
                  <Text style={styles.textoErro}>{errors.senha}</Text>
                )}
              </View>

              <View style={styles.rodapeContainer}>
                <TouchableOpacity onPress={() => router.push("/login")}>
                  <Text>Já tem uma conta?</Text>
                  <Text style={styles.textoRodape}>Faça login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => handleSubmit()}
                  style={styles.botao}
                >
                  {!isSubmitting ? (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <Text style={styles.textoBotao}>Enviar</Text>
                      <AntDesign name="login" size={24} color="white" />
                    </View>
                  ) : (
                    <ActivityIndicator color={"#FFF"} size={32} />
                  )}
                </TouchableOpacity>
              </View>
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
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 42,
    fontWeight: "medium",
    textAlign: "center",
    paddingBottom: 20,
  },
  formInputs: {
    gap: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: 260,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 10,
  },
  inputIcone: {
    paddingLeft: 10,
  },
  inputTexto: {
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "regular",
  },
  textoErro: {
    color: "red",
    fontSize: 12,
  },
  botao: {
    width: 120,
    padding: 16,
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
  rodapeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textoRodape: {
    fontSize: 16,
    color: "#3B82F6",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#2547A0",
  },
});
