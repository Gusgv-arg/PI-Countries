import React from "react";
import { NavLink } from "react-router-dom";
import style from "./landing.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAt} from "@fortawesome/free-solid-svg-icons"
import {faTwitter, faWhatsapp, faDiscord, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"
import Logging from "../../Components/Logging/logging.jsx"
import Logout from "../../Components/Logging/logout.jsx";
import Profile from "../../Components/Logging/profile.jsx";
import { useAuth0 } from "@auth0/auth0-react";

function Landing() {
	const {isAuthenticated } = useAuth0()

	return (
		<div className={style.text} >
			<div className={style.container}>
				<div>
					<h1>Individual Project: "Henry Countries"</h1><br />
					<h3>Author: Gustavo Gómez Villafañe</h3>
				</div>
				<br />
				<div className={style.text2}>
					<span>This individual project is part of my studies in Henry's Bootcamp.
					It's my second full-stack application that consists of bringing
					countries information provided by </span> <a href="https://restcountries.com" target="_blank" rel="noreferrer"> https://restcountries.com</a>  <br />
					
					<br />
					<p className={style.bold}>Technologies used:</p>
					1. Postgre SQL <br />
					2. Sequelize <br />
					3. Node <br />
					4. React <br />
					5. Redux <br />
					6. CSS <br /><br />
				</div>
				
				{
				isAuthenticated? 
					<>				
					<Profile />
					<Logout />
					<NavLink to="/home">
						<button className={style.btnland}>Enter Site</button>
					</NavLink>
					</>
					:
					<Logging />
				}
			</div>
			<div className={style.contIcons}>
				<div>
					<a href="mailto: gusgvillafane@gmail.com">
						<FontAwesomeIcon className={style.icon} icon={faAt}/>
					</a>
				</div>
				<div>
					<a href="https://wa.me/5491161405589" target="_blank" rel="noreferrer">
						<FontAwesomeIcon className={style.icon} icon={faWhatsapp}/>
					</a>
				</div>
				<div>
					<a href="https://discord.com/accessibility/#0958" target="_blank" rel="noreferrer">
						<FontAwesomeIcon className={style.icon} icon={faDiscord} />
					</a>
				</div>
				<div>
					<a href="http://linkedin.com/in/gustavo-gomez-villafañe-6164526" target="_blank" rel="noreferrer">
						<FontAwesomeIcon className={style.icon} icon={faLinkedin} />
					</a>
				</div>
				<div>
					<a href="https://github.com/Gusgv-arg" target="_blank" rel="noreferrer">
						<FontAwesomeIcon className={style.icon} icon={faGithub} /> 
					</a>
				</div>
				<div>
					<a href="https://twitter.com/gustavogvillaf1" target="_blank" rel="noreferrer">
						<FontAwesomeIcon className={style.icon} icon={faTwitter} />
					</a>
				</div>
			</div>			
		</div>
	);
}

export default Landing;
