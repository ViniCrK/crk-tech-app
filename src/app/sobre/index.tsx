import { Text, View, StyleSheet } from "react-native";

function Sobre() {
  return (
    <View>
      <Text style={styles.title}>Sobre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default Sobre;
