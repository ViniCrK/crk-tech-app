import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import { router } from "expo-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import exibirAlerta from "@/utils/AlertaToast";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function RecuperarSenha() {
  const enviarLinkRecuperacao = async (email: string) => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
    } catch (erro) {
      exibirAlerta("error", "bottom", "Erro ao enviar Link.");
      console.log(erro);
    }

    exibirAlerta(
      "success",
      "bottom",
      "Link enviado com sucesso.",
      "Verifique a caixa de entrada do seu e-mail"
    );

    return router.push("/login");
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
        initialValues={{ email: "" }}
        onSubmit={(dados) => enviarLinkRecuperacao(dados.email)}
      >
        {({ handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <View style={styles.formContainer}>
            <Text style={styles.titulo}>Esqueci minha senha</Text>

            <Text style={styles.subtitulo}>
              Informe o e-mail cadastrado na sua conta e lhe enviaremos um link
              para recuperação de senha.
            </Text>

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
                />
              </View>

              <View style={styles.rodapeContainer}>
                <TouchableOpacity onPress={() => router.push("/login")}>
                  <Text>Lembrou-se da senha?</Text>
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
    paddingTop: 30,
  },
  subtitulo: {
    color: "#AAAAAA",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 40,
    paddingBottom: 30,
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
