import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
	email: yup
		.string()
		.email("O e-mail precisa ser válido.")
		.required("O campo é obrigatório."),
	password: yup
		.string()
		.min(6, "O campo de senha deve conter no mínimo 6 caracteres")
		.required("Campo senha é obrigátorio"),
});
