import React from "react";
import mail_icon from "../assets/icons/mail_icon.svg"
import map_pin_icon from "../assets/icons/map_pin_icon.svg"
import phone_icon from "../assets/icons/phone_icon.svg"

export const Contact = () => {
	return <div className="contactContainer">
	<div className="getInTouch">
		<div className=""><h1>Comunicate con nosotros</h1></div>
		<div className="">
			<div className="contactIcon"><img className="contactImg" src={mail_icon}></img><a href="mailto:TheMachineShop@ecommerce.org"><span className="iconAnchor">TheMachineShop@ecommerce.org</span></a></div>
			<div className="contactIcon"><img className="contactImg" src={phone_icon}></img>
			<span className="iconAnchor"><a href="tel:(215)%77777-7777">(215) 777-7777</a></span></div>
			<div className="contactIcon"><img className="contactImg" src={map_pin_icon}></img><span className="iconAnchor"><a href="https://goo.gl/maps/SevooSTr95YZe2ZB8">2535 Aramingo Ave, Philadelphia</a></span></div>
		</div>
	</div>


	<div className="contactForm">
	<form>
		<div className="contactFormContainer">
			<div className="contactName">
			<label>
					<span>Nombre y Apellido</span></label>
					<legend></legend>
				<input type="text" className="inputContact" required></input>
			</div>
			<div className="contactEmail">
			<label>
					<span>Email</span></label>
					<legend></legend>
				<input type="text" className="inputContact" required></input>
			</div>
			<div className="contactMessage">
			<label>
					<span>Mensaje</span></label>
					<legend></legend>
				<textarea></textarea>
			</div>
			<div className="contactButton">
				<input type="submit" className="buttonContact"></input>
			</div>
		</div>
		</form>
	</div>
	</div>;
};
