import { ImageSourcePropType } from "react-native";

export type ImagemCarrosselType = {
  titulo: string;
  imagem: ImageSourcePropType;
  descricao: string;
};

export const CarrosselImagens = [
  {
    titulo: "imagem 1",
    imagem: require("@/assets/images/pc-2.jpg"),
    descricao: "descricao imagem 1",
  },
  {
    titulo: "imagem 2",
    imagem: require("@/assets/images/pc-2.jpg"),
    descricao: "descricao imagem 2",
  },
  {
    titulo: "imagem 3",
    imagem: require("@/assets/images/pc-2.jpg"),
    descricao: "descricao imagem 3",
  },
];
