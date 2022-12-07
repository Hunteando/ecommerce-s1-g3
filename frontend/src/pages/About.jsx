import React from "react";
import williams from "../assets/images/williams.jpeg";
import natalia from "../assets/images/natalia.jpeg";
import virginia from "../assets/images/virginia.jpeg";
import damian from "../assets/images/damian.jpeg";
import dorian from "../assets/images/dorian.jpeg";
import rumer from "../assets/images/rumer.jpeg";
import jazmin from "../assets/images/jazmin.jpeg";
import hernan from "../assets/images/hernan.jpeg";
import { Profile } from "../components/Profile";

export const About = () => {
	return (
		<div>
			<h1 className='about__title'>¿Quienes somos?</h1>
			<div className='about__description'>
				<p>
					The Machine Shop es una empresa familiar dedicada a la fabricación integral
					de artefactos para iluminación mediante el reciclaje que nació en pandemia,
					y hoy se encuentra liderando el mercado.{" "}
				</p>

				<p>
					Contamos con un moderno local donde exhibimos nuestros productos, todos
					únicos, dado que no los fabricamos en masa, todos son artesanales. Nuestro
					personal está capacitado para asesorarte y hacer realidad tu proyecto
					tomando la mejor decisión de compra.
				</p>

				<p>
					Somos sin dudas, la empresa líder en iluminación profesional y decorativa,
					aquirir tus productos en The Machine Shop te brinda la tranquilidad de
					saber que estás comprando calidad, innovación y también, una obra de arte.
				</p>

				<p>
					Estamos seguros que tu experiencia con The Machine Shop será 100%
					satisfactoria.
				</p>
			</div>
			<div className='card__person-container'>
				<Profile
					img={natalia}
					name='Natalia Balbastro'
					position='Scrum Master'
					socialTwitter=''
					socialGithub=''
					socialLinkedin='https://www.linkedin.com/in/natibalbastro/'
				/>

				<Profile
					img={dorian}
					name='Dorian Battiato'
					position='Product Owner'
					socialTwitter=''
					socialGithub=''
					socialLinkedin='https://www.linkedin.com/in/dorian-battiato-303059188/'
				/>

				<Profile
					img={williams}
					name='Williams Hernández'
					position='Full Stack Javascript'
					socialTwitter='https://twitter.com/hernandw'
					socialGithub='http://github.com/hernandw'
					socialLinkedin='https://www.linkedin.com/in/hernandw/'
				/>
				<Profile
					img={rumer}
					name='Rumer Tovar'
					position='Full Stack Javascript'
					socialTwitter=''
					socialGithub=''
					socialLinkedin=''
				/>
				<Profile
					img={jazmin}
					name='Jazmín Saavedra'
					position='Diseñadora UX/UI'
					socialTwitter=''
					socialGithub=''
					socialLinkedin='https://www.linkedin.com/in/jazmin-saavedra/'
				/>
				<Profile
					img={damian}
					name='Damian Aguirre'
					position='Frontend Dev'
					socialTwitter=''
					socialGithub=''
					socialLinkedin='https://www.linkedin.com/in/damian-javier-aguirre-cerullo-55335522a/'
				/>
				<Profile
					img={virginia}
					name='Virginia Bellizi'
					position='QA Tester Manual'
					socialTwitter=''
					socialGithub=''
					socialLinkedin='https://www.linkedin.com/in/virginia-bellizzi-caballero-756b94241/'
				/>
				<Profile
					img={hernan}
					name='Hernan Reyes'
					position='QA Analyst'
					socialTwitter=''
					socialGithub=''
					socialLinkedin='https://www.linkedin.com/in/hernanemanuelreyes/'
				/>
			</div>
		</div>
	);
};
