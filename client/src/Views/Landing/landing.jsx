import React from "react";
import { NavLink } from "react-router-dom";
import style from "./landing.module.css"

function Landing() {
	return (
		<div className={style.text} >
			<div className={style.container}>
				<div>
					<h1>Individual Project: "Henry Countries"</h1><br />
					<h3>Author: Gustavo Gómez Villafañe</h3>
				</div>
				<br />
				<div className={style.text2}>
					This individual project is part of my studies in Henry's Bootcamp.
					It's my second full-stack application that consists of bringing
					countries information provided by https://restcountries.com <br />
					<br />
					<p className={style.bold}>Technologies used:</p>  <br />
					1. Postgre SQL <br />
					2. Sequelize <br />
					3. Node <br />
					4. React <br />
					5. Redux <br />
					6. CSS <br /><br />
				</div>{" "}
				<br />
				<NavLink to="/home">
					<button className={style.btnland}>Enter Site</button>
				</NavLink>
			</div>
		</div>
	);
}

export default Landing;
