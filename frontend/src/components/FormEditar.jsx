import { useState } from 'react'
import Select from 'react-select'


const options = [
	{ value: 'user', label: 'Usuario' },
	{ value: 'admin', label: 'administrador' },
	
]

export const FormEditar = ({usuario}) => {

	
	
	


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
						defaultValue={usuario?.username}
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
						defaultValue={usuario?.email}
					/>
				</div>
				<div>
				<label className='input__form' htmlFor='roles'>
						Rol:
					</label>
				<Select className='input__form' options={options} name='roles' defaultValue={{value: 'user', label: 'usuario' }} />
				</div>
				
				
				
			</div>
		</>
	)
}
