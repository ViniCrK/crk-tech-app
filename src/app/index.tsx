import { StyleSheet, Text, View } from "react-native";

function Home() {
  return (
    <View>
      <Text style={styles.title}>Página Principal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Home;
