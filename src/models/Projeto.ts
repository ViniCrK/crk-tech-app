export interface IProjeto {
  id: string;
  titulo: string;
  descricao: string;
  especificacoes: {
    processador: string;
    placaMae: string;
    memoriaRAM: string;
    placaDeVideo: string;
    armazenamento: string;
    fonte: string;
    airCooler: string;
    waterCooler: string;
    gabinete: string;
  };
}
