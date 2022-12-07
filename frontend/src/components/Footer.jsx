import React from "react";
import logo from "../assets/icons/logo_white.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<>
			<div className='footer_principal'>
				<div className='container__footer'>
					<div className='container__footer-text'>
						<Link to='/'>
							<img src={logo} alt='logotipo' />
						</Link>
						<Link to='/about'>Quiénes somos</Link>
						<Link to='/privacy'>Política de privacidad</Link>
						<Link to='/answers'>Políticas de Envío</Link>

						<Link to='/contact'>Contacto</Link>
						<Link to='/work'>Trabaja con nosotros</Link>
					</div>
					<form className='footer_form'>
						<p>Hable con nosotros</p>
						<label htmlFor='name'>Nombre:</label>
						<input id='name' type='text' placeholder='Nombre' />

						<textarea type='text' placeholder='Escribe tu mensaje' />
						<button className='button__footer'>enviar mensaje</button>
					</form>
				</div>
				<div className='copyright'>
					<p>Desarrollado por Equipo 3 - Hunteando © 2022 </p>
				</div>
			</div>
		</>
	);
};
