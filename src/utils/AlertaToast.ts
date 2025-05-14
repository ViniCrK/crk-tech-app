import Toast from "react-native-toast-message";

const exibirAlerta = (
  tipo: "success" | "error" | "info",
  posicao: "bottom" | "top",
  textoPrincipal: string,
  textoSecundario?: string
) => {
  Toast.show({
    type: tipo,
    text1: textoPrincipal,
    text1Style: { fontSize: 14 },
    text2: textoSecundario,
    text2Style: { fontSize: 12 },
    position: posicao,
    visibilityTime: 2000,
    autoHide: true,
    bottomOffset: 450,
  });
};

export default exibirAlerta;
