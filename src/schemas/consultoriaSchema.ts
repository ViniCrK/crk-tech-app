import * as Yup from "yup";

const consultoriaSchema = Yup.object({
  nome: Yup.string()
    .required("Nome é obrigatório")
    .min(3, "O nome deve conter, no mínimo, 3 caracteres"),
  tipoEquipamento: Yup.string().required("Selecione o Tipo do Equipamento"),
  descricaoSolicitacao: Yup.string()
    .required("Descrição da solicitação é obrigatória")
    .min(10, "A descrição deve conter mais detalhes")
    .max(500, "O número máximo 500 caracteres excedido."),
  imagem: Yup.string(),
});

export default consultoriaSchema;
