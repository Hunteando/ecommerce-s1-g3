<!-- GETTING STARTED -->
## 🚀 ¿Cómo arrancar el proyecto?

1. **Crea un fork de este repositorio**:

- Clic en _Fork_ en la esquina superior derecha o haz click [aquí](https://github.com/Hunteando/ecommerce-s1-g3/fork).

2. **Clona el repositorio:**

```bash
git clone git@github.com:TU_USUARIO/ecommerce-s1-g3.git
```

3. **Instala las dependencias:**

```bash
npm install
# o
pnpm install
# o
yarn install
```
4. **Agrega las variables de entorno:**

- Crea un archivo .env y dentro coloca las respectivas credenciales

5. **Ejecuta el proyecto:**

```bash
npm run dev
# o
pnpm run dev
# o
yarn dev
```

## 📝 Notas

- El enpoint **/signUp** acepta el metodo POST con los siguientes parametros:

```JSON
{
"username": "john",
"email": "johndoe@gmail.com",
"password": "easytohack",
"roles": "user"
}
```

- El enpoint **/signIn** acepta el metodo POST con los siguientes parametros:

```JSON
{
  "email": "johndoe@gmail.com",
  "password": "easytohack"
}
```

Nota: este endpoint devuelve un [JWT](https://jwt.io/) si las credenciales son correctas

- El endpoint /users acepta el metodo GET

Para acceder a este endpoint es necesario pasarle en los headers el token de seguridad de esta forma

  ```sh
  Authorization: Bearer <token>
  ```

happy hacking 🥳
