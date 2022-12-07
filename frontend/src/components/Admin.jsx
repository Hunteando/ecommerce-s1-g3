import logo from "../assets/icons/logo.svg";
import { GoThreeBars } from "react-icons/go";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

export const Admin = () => {
	const [open, setOpen] = useState(false);
	const onHandleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className='container'>
				<nav>
					<div className='header'>
						<Link to="/admin" ><img className='header__logo' src={logo} alt='Logotipo' /></Link>
						<label className='nav__label' htmlFor='menu' onClick={onHandleOpen}>
							<GoThreeBars />
						</label>

						<div className={`nav__menu ${open ? "isActive" : ""}`}>
							<ul>
								<li className='menu__item'>
									<Link className='nav__item' to='/admin/' onClick={onHandleOpen}>
										Inicio
									</Link>
								</li>
								<li className='menu__item'>
									<Link className='nav__item' to='/admin/users' onClick={onHandleOpen}>
										Usuarios
									</Link>
								</li>
							
								<li className='menu__item'>
									<Link
										className='nav__item'
										to='/admin/products'
										onClick={onHandleOpen}>
										Productos
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			<Outlet />
		</>
	);
};
