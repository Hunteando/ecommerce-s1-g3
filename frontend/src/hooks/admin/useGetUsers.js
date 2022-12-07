const url = import.meta.env.VITE_API_URL;

export const getUsers = async () => {
	try {
		const getToken = window.localStorage.getItem("loggedAppUser");
		const parseToken = JSON.parse(getToken);
		const token = parseToken.token;
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const respuesta = await fetch(`${url}/api/users`, config);
		const resultado = await respuesta.json();

		return resultado.rows;
	} catch (error) {
		console.log(error);
	}
};

export const addUser = async (datos) => {
	try {
		const respuesta = await fetch(`${url}/api/signUp`, {
			method: "POST",
			body: JSON.stringify(datos),
			headers: {
				"Content-Type": "application/json",
			},
		});
		await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};

export const getUser = async (id) => {
	try {
		const getToken = window.localStorage.getItem("loggedAppUser");
		const parseToken = JSON.parse(getToken);
		const token = parseToken.token;
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const respuesta = await fetch(`${url}/api/user/${id}`, config);
		const resultado = await respuesta.json();
		return resultado;
	} catch (error) {
		console.log(error);
	}
};

export const updateUser = async (id, datos) => {
	try {
		const respuesta = await fetch(`${url}/api/user/${id}`, {
			method: "PUT",
			body: JSON.stringify(datos),
			headers: {
				"Content-Type": "application/json",
			},
		});
		await respuesta.json();
	} catch (error) {
		console.log(error);
	}
};

export const deleteUser = async (id) => {
	try {
		const respuesta = await fetch(`${url}/api/user/${id}`, {
			method: "DELETE"
		});
		return 
	} catch (error) {
		console.log(error);
	}
};

/* export const useGetUsers = () => {
	const [users, setUsers] = useState({});

	const getToken = window.localStorage.getItem("loggedAppUser");
	const parseToken = JSON.parse(getToken);
	const token = parseToken.token;

	const url = import.meta.env.VITE_API_URL;
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const getUsers = async () => {
		try {
			const respuesta = await axios(`${url}/api/users`, config);
			const resultado = respuesta.data.rows;
			setUsers(resultado);
		} catch (error) {
			console.error(error);
		}
	};

	const getUser = async (id) => {
		const respuesta = await fetch(`${url}/users/${id}`);
		const resultado = respuesta.json();
		return resultado;
	};

	const updateUser = async (id, datos) => {
		try {
			const respuesta = await fetch(`${url}/api/users/${id}`, {
				method: "PUT",
				body: JSON.stringify(datos),
				headers: {
					"Content-Type": "application/json",
				},
			});
			await respuesta.json();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return { getUsers, getUser, addUser, users };
}; */
