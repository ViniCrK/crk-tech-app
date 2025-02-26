import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string()
    .required("Email obrigatório")
    .email("Precisa ser um email válido"),
  senha: Yup.string()
    .required("Senha obrigatória")
    .min(6, "A senha deve conter, no mínimo, 6 caracteres"),
});

export default LoginSchema;
