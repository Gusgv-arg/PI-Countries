import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../../Components/NavBar/navBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { createActivity, getAllCountries, orderByAz } from "../../Redux/Actions/actions";
import validate from "./validate";
import style from "../Form/createActivity.module.css"

function CreateActivity() {
	const dispatch = useDispatch();
	const history = useHistory()
	
	useEffect(() => {
	 	dispatch(orderByAz("asc"));
	}, [dispatch]);

	const countries = useSelector((state) => state.countries);

	const [form, setForm] = useState({
		name: "",
		difficulty: "",
		season: "",
		duration: "",
		countries: [],
	});

	const [error, setError] = useState({});

	const handlerChange = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		if (property === "countries") {
			if (!form.countries.includes(value)) {
				setForm({
					...form,
					countries: [...form.countries, value],
				});
			}
		} else {
			setForm({
				...form,
				[property]: value,
			});
			let flagName = false;
			let flagDifficulty = false;
			let flagSeason = false;
			let flagDuration = false;

			if (property === "name") flagName = true;
			if (property === "difficulty") flagDifficulty = true;
			if (property === "season") flagSeason = true;
			if (property === "duration") flagDuration = true;

			setError(
				validate(
					{ ...form, [property]: value },
					flagName,
					flagDifficulty,
					flagSeason,
					flagDuration
				)
			);
		}
	};

	const handleDelete = (event) => {
		const erase = event.target.value;

		setForm({
			...form,
			countries: [...form.countries.filter((ele) => ele !== erase)],
		});
	};

	const handlerSubmit = async (event) => {
		event.preventDefault();
		dispatch(createActivity(form));
		setForm({});
		history.push("/home")
	}; 
	
	return (
		<div>
			<NavBar />
			
			<div className={style.cont}>
			<br />
			<br />
			<h3>Create a New Activity</h3>
			<br />
			<form className={style.form} onSubmit={handlerSubmit}>
				<div className={style.align}>
					<label htmlFor="name">Activity Name: </label>
					<input
						placeholder="Type activity name..."
						type="text"
						name="name"
						onChange={handlerChange}
						value={form.name}
						/>
				</div>
					{error.name && <span className={style.error}>{error.name}</span>}
				
				<div className={style.align}>
					<label htmlFor="difficulty">Difficulty Level: </label>
					<input
						type="number"
						min="1"
						name="difficulty"
						onChange={handlerChange}
						value={form.difficulty}
						/>
				</div>
					{error.difficulty && <span className={style.error}>{error.difficulty}</span>}

				<div className={style.align}>
					<label htmlFor="duration">Duration (weeks): </label>
					<input
						type="number"
						min="1"
						name="duration"
						onChange={handlerChange}
						value={form.duration}
						/>
				</div>
					{error.duration && <span className={style.error}>{error.duration}</span>}

				<div className={style.align}>
					<label htmlFor="season">Season: </label>
					<select name="season" value={form.season} onChange={handlerChange}>
						<option value="" name="season" disabled>Choose a Season</option>
						<option name="season" value="Autumn">Autumn</option>
						<option name="season" value="Spring">Spring</option>
						<option name="season" value="Summer">Summer</option>
						<option name="season" value="Winter">Winter</option>					
					</select>
				</div>
					{error.season && <span className={style.error}>{error.season}</span>}
				
				<div className={style.align}>
					<label htmlFor="countries">Countries:</label>
					<select
						name="countries"
						value={form.countries}
						multiple={true}
						onChange={handlerChange}
						>
						<option name="countries" disabled>Choose a Country</option>
						{countries?.map((country) => (
							<option key={country.id} name="countries" value={country.id}>
								{country.name}
							</option>
						))}
					</select>
				</div>
				<div className={style.align2}>
					{form.countries &&
						form.countries.map((country) => (
							<li className={style.labels} key={country}>
								<label >{country}</label>
								<button className={style.btn3} name="countries" value={country} onClick={handleDelete}>
									Delete
								</button>
							</li>
						))}
				</div>

				<div className={style.btn}>
					<button className={style.btn2}
						
						type="submit"
						disabled={
							!form.name || !form.difficulty || !form.season || !form.duration
						}
						name={form}
						>
						Create Activity
					</button>
					<br /> 
					<br />
				</div>
					<div className={style.error}>
						{!form.name || !form.difficulty || !form.season || !form.duration ? <span>Name, Difficulty, Duration && Season are mandatory</span> : ""}
					</div>
			</form>
			</div>
		</div>
	);
}

export default CreateActivity;
