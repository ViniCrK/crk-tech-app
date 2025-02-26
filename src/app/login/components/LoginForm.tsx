import { router } from "expo-router";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo(a) a CRK Tech</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          autoFocus
          placeholder="Insira seu e-mail"
          placeholderTextColor={"#000000"}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor={"#000000"}
          keyboardType="email-address"
        />

        <Button title="Entrar" color={"#2547A0"} />

        <View style={styles.rodapeContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.textoRodape}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
          <Text style={styles.textoRodape}>|</Text>
          <TouchableOpacity>
            <Text style={styles.textoRodape}>Crie sua conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 360,
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
  rodapeContainer: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-around",
  },
  textoRodape: {
    fontSize: 12,
  },
});
