import * as Yup from "yup";

const cadastrarServicoSchema = Yup.object({
  titulo: Yup.string()
    .required("Título do serviço é obrigatório")
    .min(3, "O título deve conter, no mínimo, 3 caracteres"),
  preco: Yup.number()
    .required("Preço do serviço é obrigatório")
    .positive("O preço deve ser um número positivo")
    .min(0.01, "O preço deve ser maior que zero"),
  descricao: Yup.string()
    .required("Descrição do serviço é obrigatória")
    .min(10, "A descrição deve conter mais detalhes")
    .max(500, "O número máximo de caracteres excedido."),
  icone: Yup.string().optional(),
});

export default cadastrarServicoSchema;
