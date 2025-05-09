import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import CardImagem from "@/components/CardImagem";

import Entypo from "@expo/vector-icons/Entypo";

export default function Sobre() {
  const abrirInstagram = async () => {
    const appUrl = "instagram://user?username=crk.tech";
    const webUrl = "https://www.instagram.com/crk.tech";

    const urlSuportada = await Linking.canOpenURL(appUrl);

    if (urlSuportada) {
      await Linking.openURL(appUrl);
    } else {
      await Linking.openURL(webUrl);
    }
  };

  const abrirYoutube = async () => {
    const appURL = "youtube://channel/@crktech-7";
    const webURL = "https://www.youtube.com/@crktech-7";

    const URLSuportada = await Linking.canOpenURL(appURL);

    if (URLSuportada) {
      await Linking.openURL(appURL);
    } else {
      await Linking.openURL(webURL);
    }
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 30 }}>
        <Text style={styles.titulo}>
          Montando, limpando e otimizando computadores desde 2023
        </Text>

        <Image
          source={require("@/assets/images/ICONE1.png")}
          style={{ height: 350, width: 350, borderRadius: 20 }}
        />

        <Text style={styles.sobreDesc}>
          Tudo começa com um problema. Seu computador está lento? Travando?
          Superaquecendo? Talvez você precise de um upgrade para melhorar o
          desempenho. Seja qual for a sua necessidade, estamos aqui para ajudar.
        </Text>

        <Text style={styles.sobreDesc}>
          Nossa missão é oferecer um serviço confiável, rápido e transparente.
          Sabemos como é frustrante ficar sem o computador quando mais precisa,
          por isso trabalhamos para garantir soluções eficientes e sem
          complicação.
        </Text>

        <Text style={styles.sobreDesc}>
          Mais do que assistência técnica, oferecemos consultoria para que você
          aproveite ao máximo o seu equipamento. Se o seu PC não está como
          deveria, é hora de resolver isso.
        </Text>
      </View>

      <View style={styles.equipeContainer}>
        <Text style={styles.equipeTitulo}>NOSSA EQUIPE</Text>

        <CardImagem
          imagem={require("@/assets/images/vinicius.jpg")}
          titulo="Vinícius Cerqueira"
          descricao="Fundador e Técnico"
        />
      </View>

      <View style={styles.rodapeContainer}>
        <Text style={styles.rodapeTitulo}>Fale Conosco</Text>

        <View style={styles.redesContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Entypo name="instagram" size={30} color="white" />

            <TouchableOpacity onPress={abrirInstagram}>
              <Text style={styles.redesTexto}>@crk.tech</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Entypo name="youtube" size={30} color="white" />

            <TouchableOpacity onPress={abrirYoutube}>
              <Text style={styles.redesTexto}>CRK Tech</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Entypo name="email" size={30} color="white" />

            <Text style={styles.redesTexto}>crktech71022@gmail.com</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    maxWidth: "auto",
    backgroundColor: "#FFFFFF",
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
    paddingBottom: 20,
    backgroundColor: "#001044",
  },
  equipeTitulo: {
    paddingBottom: 10,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  rodapeContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#001044",
  },
  rodapeTitulo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  redesContainer: {
    gap: 10,
    paddingTop: 10,
    paddingBottom: 130,
  },
  redesTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "black",
  },
});
