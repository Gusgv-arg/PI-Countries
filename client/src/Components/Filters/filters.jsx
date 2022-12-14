import React from "react";
import {useDispatch} from "react-redux"
import { getAllCountries, orderByAz } from "../../Redux/Actions/actions";
import style from "../Filters/filters.module.css"

function Filter() {
	
	const dispatch = useDispatch()
	
	
	const handlerClick = (event) => {
		dispatch(getAllCountries())
	};

	const handlerOrderAZ = (event) => {
		dispatch(orderByAz(event.target.value))
	};

	const handlerOrderByPopulation = () => {};

	const handlerFilterByContinent = () => {};

	const handlerFilterByActivity = () => {};

	return (
		
			<div className={style.filter1} >
				<div >
					<button onClick={handlerClick}>List All Countries</button>
				</div>

				<div className={style.align}>
					<h4>Order by A-Z</h4>
					<select onChange={handlerOrderAZ}>
						<option value="all">All</option>
						<option value="asc">A to Z</option>
						<option value="desc">Z to A</option>
					</select>
				</div>

				<div className={style.align}>
					<h4>Order by Population</h4>
					<select onChange={handlerOrderByPopulation}>
						<option value="all">All</option>
						<option value="asc">+ Population</option>
						<option value="desc">- Population</option>
					</select>
				</div>

				<div className={style.align}>
					<h4>Filter by Continent</h4>
					<select onChange={handlerFilterByContinent}>
						<option value="all">All</option>
						<option value="europe">Europe</option>
						<option value="america">America</option>
					</select>
				</div>

				<div className={style.align}>
					<h4>Filter by Activity</h4>
					<select onChange={handlerFilterByActivity}>
						<option value="all">All</option>
					</select>
				</div>
			</div>
	);
}

export default Filter;
