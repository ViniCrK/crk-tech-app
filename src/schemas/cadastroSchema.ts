import * as Yup from "yup";

const CadastroSchema = Yup.object({
  email: Yup.string()
    .required("Email obrigatório")
    .email("Precisa ser um email válido"),
  usuario: Yup.string()
    .required("Usuário obrigatório")
    .min(3, "O usuário deve conter, no mínimo, 3 caracteres"),
  senha: Yup.string()
    .required("Senha obrigatória")
    .min(6, "A senha deve conter, no mínimo, 6 caracteres"),
});

export default CadastroSchema;
