import { ImageSourcePropType } from "react-native";

export type CardServicosType = {
  icone: ImageSourcePropType;
  titulo: string;
  descricao: string;
};

export const CardServicosData = [
  {
    icone: require("@/assets/images/pc-2.jpg"),
    titulo: "Montagem de Computadores",
    descricao:
      "Faremos a montagem do seu computador a partir das peças à sua escolha.",
  },
  {
    icone: require("@/assets/images/pc-2.jpg"),
    titulo: "Limpeza de Computadores",
    descricao:
      "Faremos uma limpeza no seu computador por completo para que pareça como se estivesse acabado de sair da caixa.",
  },
  {
    icone: require("@/assets/images/pc-2.jpg"),
    titulo: "Limpeza de Notebooks",
    descricao:
      "Faremos uma limpeza profunda e completa no seu notebook para que ele dure uma vida inteira.",
  },
  {
    icone: require("@/assets/images/pc-2.jpg"),
    titulo: "Upgrade de peças",
    descricao:
      "Faremos um upgrade na peça desejada em seu Computador ou Notebook.",
  },
  {
    icone: require("@/assets/images/pc-2.jpg"),
    titulo: "Consultoria Especializada",
    descricao:
      "Escolheremos juntos as melhores peças para suprirem a sua necessidade.",
  },
];
