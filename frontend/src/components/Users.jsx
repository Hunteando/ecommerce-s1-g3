import { getUsers } from "../hooks/admin/useGetUsers.js";
import { User } from "./User";
import { useLoaderData } from "react-router-dom";

export const loaderUser = async () => {
	const users = await getUsers();

	return users;
};

export const Users = () => {
	const users = useLoaderData();

	return (
		<>
			<h3 className='title__admin'>Administración de Usuarios</h3>
			{users.length ? (
				<table className='container__users'>
					<thead className='table__users'>
						<tr>
							<th className='user'>Usuario</th>
							<th className='email'>Correo</th>
							<th>Rol</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>
						{users.map((usuario, index) => (
							<User usuario={usuario} key={index} />
						))}
					</tbody>
				</table>
			) : (
				<p>No hay usuarios aún</p>
			)}
		</>
	);
};
