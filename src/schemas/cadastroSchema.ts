import * as Yup from "yup";

const CadastroSchema = Yup.object({
  nome: Yup.string()
    .required("Nome obrigatório.")
    .min(3, "Nome deve conter, no mínimo, 3 caracteres."),
  email: Yup.string()
    .required("Email obrigatório.")
    .email("Precisa ser um email válido"),
  senha: Yup.string()
    .required("Senha obrigatória.")
    .min(6, "A senha deve conter, no mínimo, 6 caracteres"),
});

export default CadastroSchema;
