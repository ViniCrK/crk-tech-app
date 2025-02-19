import { StyleSheet, Text, View } from "react-native";

function Servicos() {
  return (
    <View>
      <Text style={styles.title}>Nossos serviços</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Servicos;
