import { ImageSourcePropType } from "react-native";

export type ImagensInicioProps = {
  imagem: ImageSourcePropType;
  titulo: string;
  descricao: string;
};

export const ImagensInicio = [
  {
    imagem: require("@/assets/images/pc-2.jpg"),
    titulo: "REALIZE.",
    descricao: "descricao imagem 1",
  },
  {
    imagem: require("@/assets/images/pc-2.jpg"),
    titulo: "SEU.",
    descricao: "descricao imagem 2",
  },
  {
    imagem: require("@/assets/images/pc-2.jpg"),
    titulo: "SONHO.",
    descricao: "descricao imagem 3",
  },
];
