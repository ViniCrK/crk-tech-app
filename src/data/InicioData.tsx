import { ImageSourcePropType } from "react-native";

export type ImagensInicioProps = {
  imagem: ImageSourcePropType;
  titulo: string;
  descricao: string;
};

export const ImagensInicio = [
  {
    imagem: require("@/assets/images/pc-2.jpg"),
    titulo: "imagem 1",
    descricao: "descricao imagem 1",
  },
  {
    imagem: require("@/assets/images/pc-2.jpg"),
    titulo: "imagem 2",
    descricao: "descricao imagem 2",
  },
  {
    imagem: require("@/assets/images/pc-2.jpg"),
    titulo: "imagem 3",
    descricao: "descricao imagem 3",
  },
];
