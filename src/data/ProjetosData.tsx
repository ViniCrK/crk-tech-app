import { ImageSourcePropType } from "react-native";

export type ImagensProjetosProps = {
  id: string;
  imagem: ImageSourcePropType;
  titulo: string;
  descricao: string;
  especificacoes: object[];
};

export const ProjetosData = [
  {
    id: "0",
    imagem: require("@/assets/images/projeto-1.jpg"),
    titulo: "Projeto 1",
    descricao:
      "Computador gamer montado pela CRK Tech para rodar qualquer jogo em 1080p, tendo a possibilidade de jogar em 1440p(ou 2k), para fazer streaming e edição de vídeos.",
    especificacoes: [
      {
        processador: "AMD Ryzen 7 5700X",
        placaMae: "ASUS TUF B550M-PLUS WiFi II",
        RAM: "Kingston Fury Beast RGB 32GB (2x16GB) 3200MHz",
        placaDeVideo: "ASUS RTX 4060 Ti",
        armazenamento: [
          {
            tipo: "SSD NVME",
            capacidade: "2Tb",
          },
        ],
        fonte: "XPG Core Reactor 650W",
        airCooler: "",
        waterCooler: "NZXT Kraken 240mm RGB",
        gabinete: "Montech Air 903 Mesh",
      },
    ],
  },
  {
    id: "1",
    imagem: require("@/assets/images/projeto-2.jpg"),
    titulo: "Projeto 2",
    descricao:
      "Computador voltado para quem quer começar no mundo dos jogos. Roda jogos em 1080p com qualidade e desempenho.",
    especificacoes: [
      {
        processador: "AMD Ryzen 5 5500",
        placaMae: "MSI A520M-A PRO",
        RAM: "GLOWAY 16GB (2x8GB) 3200MHz",
        placaDeVideo: "Asrock RX 6600",
        armazenamento: [
          {
            tipo: "SSD NVME",
            capacidade: "512GB",
          },
        ],
        fonte: "Gamemax GS600 600W",
        airCooler: "Cooler Box AMD",
        waterCooler: "",
        gabinete: "T-Dagger TGC-G10B",
      },
    ],
  },
  {
    id: "2",
    imagem: require("@/assets/images/pc-2.jpg"),
    titulo: "Projeto 3",
    descricao: "Descrição do Projeto 1",
    especificacoes: [
      {
        processador: "AMD Ryzen 5 5600X",
        placaMae: "Gigabyte B450 Aorus M",
        RAM: "XPG D45 16GB (2x8GB) 3200MHz",
        placaDeVideo: "Gigabyte GTX 1650 Super",
        armazenamento: [
          {
            tipo: "SSD NVME",
            capacidade: "1TB",
          },
          {
            tipo: "HDD",
            capacidade: "500GB",
          },
        ],
        fonte: "Corsair VS450 450W",
        airCooler: "Deepcool AK500S Digital",
        waterCooler: "",
        gabinete: "Montech Air 100 Mesh",
      },
    ],
  },
  {
    id: "3",
    imagem: require("@/assets/images/projeto-3.jpg"),
    titulo: "Projeto 3",
    descricao: "Descrição do Projeto 1",
    especificacoes: [
      {
        processador: "AMD Ryzen 5 5600X",
        placaMae: "Gigabyte B450 Aorus M",
        RAM: "XPG D45 16GB (2x8GB) 3200MHz",
        placaDeVideo: "Gigabyte GTX 1650 Super",
        armazenamento: [
          {
            tipo: "SSD NVME",
            capacidade: "1TB",
          },
          {
            tipo: "HDD",
            capacidade: "500GB",
          },
        ],
        fonte: "Corsair VS450 450W",
        airCooler: "Deepcool AK500S Digital",
        waterCooler: "",
        gabinete: "Montech Air 100 Mesh",
      },
    ],
  },
  {
    id: "4",
    imagem: require("@/assets/images/projeto-4.jpg"),
    titulo: "Projeto 3",
    descricao: "Descrição do Projeto 1",
    especificacoes: [
      {
        processador: "AMD Ryzen 5 5600X",
        placaMae: "Gigabyte B450 Aorus M",
        RAM: "XPG D45 16GB (2x8GB) 3200MHz",
        placaDeVideo: "Gigabyte GTX 1650 Super",
        armazenamento: [
          {
            tipo: "SSD NVME",
            capacidade: "1TB",
          },
          {
            tipo: "HDD",
            capacidade: "500GB",
          },
        ],
        fonte: "Corsair VS450 450W",
        airCooler: "Deepcool AK500S Digital",
        waterCooler: "",
        gabinete: "Montech Air 100 Mesh",
      },
    ],
  },
  {
    id: "5",
    imagem: require("@/assets/images/projeto-9.jpg"),
    titulo: "Projeto 3",
    descricao: "Descrição do Projeto 1",
    especificacoes: [
      {
        processador: "AMD Ryzen 5 5600X",
        placaMae: "Gigabyte B450 Aorus M",
        RAM: "XPG D45 16GB (2x8GB) 3200MHz",
        placaDeVideo: "Gigabyte GTX 1650 Super",
        armazenamento: [
          {
            tipo: "SSD NVME",
            capacidade: "1TB",
          },
          {
            tipo: "HDD",
            capacidade: "500GB",
          },
        ],
        fonte: "Corsair VS450 450W",
        airCooler: "Deepcool AK500S Digital",
        waterCooler: "",
        gabinete: "Montech Air 100 Mesh",
      },
    ],
  },
];
