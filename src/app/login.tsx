import { router } from "expo-router";
import {
  ActivityIndicator,
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
import { signInWithEmailAndPassword } from "firebase/auth";
import exibirAlerta from "@/utils/AlertaToast";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Login() {
  const entrar = async ({ email, senha }: any) => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);

      router.replace("/(auth)");
    } catch (erro) {
      exibirAlerta(
        "error",
        "bottom",
        "Falha ao entrar",
        "Email ou Senha incorretos"
      );
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/CRK TECH LOGO BRANCO.png")}
          style={styles.logo}
        />
      </View>

      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={LoginSchema}
        onSubmit={(dados) => entrar(dados)}
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
            <Text style={styles.titulo}>Login</Text>

            <View style={styles.formInputs}>
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
                  autoFocus={false}
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
                <View style={{ gap: 10 }}>
                  <TouchableOpacity onPress={() => router.push("/cadastro")}>
                    <Text>Não tem uma conta?</Text>
                    <Text style={styles.textoRodape}>Cadastre-se</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push("/recuperarSenha")}
                  >
                    <Text>Esqueceu sua senha?</Text>
                    <Text style={styles.textoRodape}>Recuperar senha</Text>
                  </TouchableOpacity>
                </View>

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
                      <Text style={styles.textoBotao}>Entrar</Text>
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
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 240,
    height: 140,
    resizeMode: "contain",
    marginTop: 32,
    marginBottom: 16,
  },
  formContainer: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  titulo: {
    fontSize: 42,
    fontWeight: "medium",
    textAlign: "center",
    paddingVertical: 30,
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
    alignSelf: "flex-end",
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
