import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Profile = ({
	img,
	name,
	position,
	socialTwitter,
	socialGithub,
	socialLinkedin,
}) => {
	return (
		<div className='card__person'>
			<img className='card__person-profile' src={img} alt='' />
			<p className='card__person-name'>{name}</p>
			<p className='card__person-position'>{position}</p>
			<div className='card__person-icon'>
				<a href={socialTwitter} target='_blank'>
					<FaTwitter />
				</a>
				<a href={socialGithub} target='_blank'>
					<FaGithub />
				</a>
				<a href={socialLinkedin} target='_blank'>
					<FaLinkedinIn />
				</a>
			</div>
		</div>
	);
};
