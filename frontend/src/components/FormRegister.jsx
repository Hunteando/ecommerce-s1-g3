import { useState } from "react";



export const FormRegister = ({user}) => {
	
	const [rol, setRol] = useState('user')
	
	return (
		<>
		
			<div>
				<div className='form__container--campo'>
					<label className='input__form' htmlFor='username'>
						Usuario:
					</label>
					<input
						required
						className='inputs__login'
						type='text'
						name='username'
						placeholder='Escriba su nombre de usuario'
						defaultValue={user?.username}
					/>
				</div>
				<div className='form__container--campo'>
					<label className='input__form' htmlFor='email'>
						Email:
					</label>
					<input
						required
						className='inputs__login'
						type='email'
						name='email'
						placeholder='Escriba su email'
						defaultValue={user?.email}
					/>
				</div>
				<div className='form__container--campo'>
					<label className='input__form' htmlFor='password'>
						Contraseña:
					</label>
					<input
						required
						className='inputs__login'
						type='password'
						name='password'
						placeholder='Escriba su contraseña'
						defaultValue={user?.password}
					/>
				</div>
				<div className='form__container--campo'>
					<label className='input__form' htmlFor='password2'>
						Repita su contraseña:
					</label>
					<input
						required
						className='inputs__login'
						type='password'
						name='password2'
						placeholder='Repita su contraseña'
						defaultValue={user?.password}
					/>
				</div>
				<div>
					<input  className="rol" type="text" name="roles" defaultValue={rol}/>

				</div>
			</div>
		</>
	);
};
