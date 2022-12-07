import { getUser, updateUser } from "../data/GetUsers";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { FormRegister, Errores } from "../components/";

export const loader = async ({ params }) => {
	const user = await getUser(params.userId);
	if (Object.values(user).length === 0) {
		throw new Response("", {
			status: 404,
			statusText: "El Cliente no fue encontrado"
		});
	}
	return user;
};

export const actionUser = async ({ request, params }) => {
	const formData = await request.formData();
	const datos = Object.fromEntries(formData);
	const email = formData.get("email");

	//validacion

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
	//Actualiza el usuario
	await updateUser(params.userId, datos)
	return redirect('/admin/users')
};

export const UserEdit = () => {
	const user = useLoaderData()
	const errores = useActionData()
	
	return <>
		
		<div className='container__general'>
			<h1>Editar Usuario</h1>
			<p>Podrás modificar los datos de un usuario</p>
			<Form method='post' noValidate className='form__container' >
				{errores?.length &&
					errores.map((error, i) => <Errores key={i}>{error}</Errores>)}
				<FormRegister user={user} />

				<input
					className='button__register'
					type='submit'
					value='Editar Usuario'
				/>
			</Form>
		</div>
</>;
};
