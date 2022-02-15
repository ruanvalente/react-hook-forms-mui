import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { IloginForm } from "./core/constracts/interfaces/LoginForm";
import { loginFormSchema } from "./core/validators/schemas/loginFormSchema";

import SharedInputComponent from "./shared/SharedInputComponent";

export default function App() {
	const methods = useForm<IloginForm>({
		resolver: yupResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(data: IloginForm) {
		console.log(data);
		methods.reset();
	}

	return (
		<Stack
			sx={{
				height: "100vh",
				justifyContent: "center",
				alignItems: "center",
				background: "#2b2a33",
			}}
		>
			<Box>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)}>
						<Stack
							spacing={2}
							sx={{
								p: 4,
								width: "400px",
								borderRadius: 1,
								background: "#edede9",
							}}
						>
							<Typography variant="h4" textAlign="center">
								Login
							</Typography>
							<SharedInputComponent name="email" label="E-mail" type="email" />
							<SharedInputComponent
								name="password"
								label="Password"
								type="password"
							/>

							<Button variant="contained" type="submit">
								Enviar
							</Button>
						</Stack>
					</form>
				</FormProvider>
			</Box>
		</Stack>
	);
}
