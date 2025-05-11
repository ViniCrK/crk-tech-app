import * as Yup from "yup";

const cadastrarProjetoSchema = Yup.object({
  titulo: Yup.string()
    .required("Título do projeto é obrigatório.")
    .min(3, "O título deve conter, no mínimo, 3 caracteres."),
  descricao: Yup.string()
    .required("Descrição do projeto é obrigatória.")
    .min(10, "A descrição deve conter mais informações sobre o projeto.")
    .max(500, "Número máximo de caracteres atingido."),
  especificacoes: Yup.object({
    processador: Yup.string().required("Processador é obrigatório."),
    placaMae: Yup.string().required("Placa Mãe é obrigatória."),
    memoriaRAM: Yup.string().required("Memória RAM é obrigatória."),
    placaDeVideo: Yup.string().required("Placa de Vídeo é obrigatória."),
    armazenamento: Yup.string().required("Armazenamento é obrigatório."),
    fonte: Yup.string().required("Fonte é obrigatória."),
    airCooler: Yup.string().optional(),
    waterCooler: Yup.string().optional(),
    gabinete: Yup.string().required("Gabinete é obrigatório."),
  }).required("Especificações são obrigatórias"),
});

export default cadastrarProjetoSchema;
