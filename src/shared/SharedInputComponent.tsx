import { TextField } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"

import { ISharedInput  } from '../core/constracts/interfaces/SharedInput'

export default function SharedInputComponent({ name, type, label}: ISharedInput) {
	const { control, formState: { errors }} = useFormContext()
	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({field}) => (
					<TextField
						{...field}
						label={label}
						type={type}
						error={!!errors[name]}
						helperText={errors[name]?.message}
					/>
				)}
			/>
		</>
	)
}
