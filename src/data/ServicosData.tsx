import { ImageSourcePropType } from "react-native";

export type CardServicosType = {
  icone: ImageSourcePropType;
  titulo: string;
  descricao: string;
};

export const CardServicosData = [
  {
    icone: require("@/assets/icones/computador.png"),
    titulo: "Montagem de Computadores",
    descricao:
      "Faremos a montagem do seu computador a partir das peças à sua escolha.",
  },
  {
    icone: require("@/assets/icones/limpeza-computador.png"),
    titulo: "Limpeza de Computadores",
    descricao:
      "Faremos uma limpeza no seu computador por completo para que pareça como se estivesse acabado de sair da caixa.",
  },
  {
    icone: require("@/assets/icones/limpeza-notebook.png"),
    titulo: "Limpeza de Notebooks",
    descricao:
      "Faremos uma limpeza profunda e completa no seu notebook para que ele dure uma vida inteira.",
  },
  {
    icone: require("@/assets/icones/upgrade.png"),
    titulo: "Upgrade de peças",
    descricao:
      "Faremos um upgrade na peça desejada em seu Computador ou Notebook.",
  },
  {
    icone: require("@/assets/icones/consultoria.png"),
    titulo: "Consultoria Especializada",
    descricao:
      "Escolheremos juntos as melhores peças para suprirem a sua necessidade.",
  },
];
