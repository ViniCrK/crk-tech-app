import { ImageSourcePropType } from "react-native";

export type CardServicosType = {
  id: string;
  icone: ImageSourcePropType;
  titulo: string;
  preco: number;
  descricao: string;
};

export const CardServicosData = [
  {
    id: "1",
    icone: require("@/assets/icones/computador.png"),
    titulo: "Montagem de Computadores",
    preco: 150.0,
    descricao:
      "Faremos a montagem do seu computador a partir das peças à sua escolha.",
  },
  {
    id: "2",
    icone: require("@/assets/icones/limpeza-computador.png"),
    titulo: "Limpeza de Computadores",
    preco: 100.0,
    descricao:
      "Faremos uma limpeza no seu computador por completo para que pareça como se estivesse acabado de sair da caixa.",
  },
  {
    id: "3",
    icone: require("@/assets/icones/limpeza-notebook.png"),
    titulo: "Limpeza de Notebooks",
    preco: 100.0,
    descricao:
      "Faremos uma limpeza profunda e completa no seu notebook para que ele dure uma vida inteira.",
  },
  {
    id: "4",
    icone: require("@/assets/icones/upgrade.png"),
    titulo: "Upgrade de peças",
    preco: 50.0,
    descricao:
      "Faremos um upgrade na peça desejada em seu Computador ou Notebook.",
  },
  {
    id: "5",
    icone: require("@/assets/icones/consultoria.png"),
    titulo: "Consultoria Especializada",
    preco: 30.0,
    descricao:
      "Escolheremos juntos as melhores peças para suprirem a sua necessidade.",
  },
];
