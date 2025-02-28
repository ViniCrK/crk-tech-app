import { ScrollView, View, Text, StyleSheet, Image } from "react-native";

import CardImagem from "@/components/CardImagem";
import Carrossel from "@/components/carrossel";

export default function Sobre() {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 30, paddingBottom: 30 }}>
          <Text style={styles.titulo}>
            Montando, limpando e otimizando computadores desde 2023
          </Text>

          <Carrossel alturaImagem={380} larguraImagem={350} />

          <Text style={styles.sobreDesc}>
            Tudo começa com um problema. Seu computador está lento? Travando?
            Superaquecendo? Talvez você precise de um upgrade para melhorar o
            desempenho. Seja qual for a sua necessidade, estamos aqui para
            ajudar.
          </Text>

          <Text style={styles.sobreDesc}>
            Nossa missão é oferecer um serviço confiável, rápido e transparente.
            Sabemos como é frustrante ficar sem o computador quando mais
            precisa, por isso trabalhamos para garantir soluções eficientes e
            sem complicação.
          </Text>

          <Text style={styles.sobreDesc}>
            Mais do que assistência técnica, oferecemos consultoria para que
            você aproveite ao máximo o seu equipamento. Se o seu PC não está
            como deveria, é hora de resolver isso.
          </Text>
        </View>

        <View style={styles.equipeContainer}>
          <Text style={styles.equipeTitulo}>NOSSA EQUIPE</Text>

          <CardImagem
            imagem={require("@/assets/images/pc-2.jpg")}
            titulo="Vinícius Cerqueira"
            descricao="Fundador e Técnico"
          />
        </View>

        <View style={styles.rodapeContainer}>
          <Text style={styles.rodapeTitulo}>Fale Conosco</Text>

          <View style={styles.redesContainer}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("@/assets/images/ÍCONE1.png")}
                style={{ height: 35, width: 35 }}
              />
              <Text style={styles.redesTexto}>@crk.tech</Text>
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                source={require("@/assets/images/ÍCONE2.png")}
                style={{ height: 35, width: 35 }}
              />
              <Text style={styles.redesTexto}>crktech71022@gmail.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "auto",
    backgroundColor: "#FFFFFF",
    paddingTop: 30,
  },
  titulo: {
    paddingBottom: 10,
    color: "#212020",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right",
  },
  sobreDesc: {
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "regular",
  },
  equipeContainer: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: "#D9D9D9",
  },
  equipeTitulo: {
    paddingBottom: 10,
    color: "#212020",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  rodapeContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#2547A0",
  },
  rodapeTitulo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  redesContainer: {
    gap: 10,
    paddingTop: 10,
    paddingBottom: 30,
  },
  redesTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "black",
  },
});
