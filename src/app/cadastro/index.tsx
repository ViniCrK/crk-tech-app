import { Text, StyleSheet, View } from "react-native";

function Cadastro() {
  return (
    <View>
      <Text style={styles.title}>Cadastro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default Cadastro;
