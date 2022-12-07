import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { getUser, updateUser } from "../hooks/admin/useGetUsers";
import { Errores } from "./Errores";
import { FormEditar } from "./FormEditar";

export const userLoaderDetail = async ({ params }) => {
	const usuario = await getUser(params.id_user);
	if (Object.values(usuario).length === 0) {
		throw new Response("", {
			status: 404,
			statusText: "El usuario no fue encontrado",
		});
	}
	return usuario;
};

export const action = async ({request, params}) => {
	const formData = await request.formData();
	const datos = Object.fromEntries(formData);
	const email = formData.get("email");

	const errores = [];
	if (Object.values(datos).includes("")) {
		errores.push("Todos los campos son obligatorios");
	}

	let regex = new RegExp(
		"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
	);

	if (!regex.test(email)) {
		errores.push("El email no es válido");
	}

	//retorna datos si hay errores
	if (Object.keys(errores).length) {
		return errores;
	}

	await updateUser(params.id_user, datos);
	return redirect("/admin/users");
};

export const UserDetail = () => {
	const usuario = useLoaderData();
	const errores = useActionData();
	const { id_user, username, email, roles } = usuario;
	return (
		<div className='container__general'>
			<h1>Editar Usuario</h1>
			<p>Modifica los campos que sean necesarios</p>
			<Form method='post' noValidate className='form__container'>
				{errores?.length &&
					errores.map((error, i) => <Errores key={i}>{error}</Errores>)}
				<FormEditar usuario={usuario} />

				<input
					className='button__editar_user'
					type='submit'
					value='Editar Usuario'
				/>
			</Form>
		</div>
	);
};
