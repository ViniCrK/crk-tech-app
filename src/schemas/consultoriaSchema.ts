import * as Yup from "yup";

const consultoriaSchema = Yup.object({
  nome: Yup.string(),
  email: Yup.string(),
  tipoEquipamento: Yup.string(),
  descricaoSolicitacao: Yup.string(),
  imagem: Yup.string(),
});

export default consultoriaSchema;
