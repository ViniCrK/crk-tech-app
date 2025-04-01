import { StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

import SolicitarServicoForm from "./components/SolicitarServicoForm";

export default function SolicitarServico() {
  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.container}>
        <SolicitarServicoForm />
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2547A0",
  },
});
