import { ImageSourcePropType } from "react-native";

export type ImagensProjetosProps = {
  imagem: ImageSourcePropType;
  titulo: string;
};

export const ImagensProjetos = [
  {
    imagem: require("@/assets/images/projeto-1.jpg"),
    titulo: "Projeto 1",
  },
  {
    imagem: require("@/assets/images/projeto-2.jpg"),
    titulo: "Projeto 2",
  },
  {
    imagem: require("@/assets/images/pc-2.jpg"),
    titulo: "Projeto 3",
  },
];
