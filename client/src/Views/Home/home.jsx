import React from "react";
import CountryContainer from "../../Components/CountryContainer/countryContainer";
import NavBar from "../../Components/NavBar/navBar";
import Pages from "../../Components/Pages in Home/pagesInHome";
import SearchBar from "../../Components/Search/searchBar";
import {
	filterByActivity,
	filterByContinent,
	getAllCountries,
	orderByAz,
	orderByPopulation,
	getActivities,
} from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "../Home/home.module.css";
import { useEffect } from "react";
import Loader from "../../Components/Loader/loader";
import Message from "../../Components/Message/message";

function Home() {
	const [loading, setLoading] = useState(true);

	const countries = useSelector((state) => state.countries);
	const activities = useSelector((state) => state.activities);
	const message = useSelector((state) => state.message);

	const [currentPage, setCurrentPage] = useState(1);
	const countriesPerPage = 9;
	const indexLastCountry = currentPage * countriesPerPage;
	const indexFirstCountry = indexLastCountry - countriesPerPage;

	let currentCountries = countries.slice(indexFirstCountry, indexLastCountry);

	if (currentPage === 1) {
		currentCountries = countries.slice(indexFirstCountry, indexLastCountry + 1);
	}

	const [order, setOrder] = useState("");

	const paginado = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const dispatch = useDispatch();
	useEffect(() => {
		setLoading(true);
		dispatch(getAllCountries());
		dispatch(getActivities());
		setLoading(false);
	}, [dispatch, loading]);

	const handlerClick = (event) => {
		dispatch(getAllCountries());
	};

	const handlerOrderAZ = (event) => {
		dispatch(orderByAz(event.target.value));
		setCurrentPage(1);
		//setOrder(`Ordered ${event.target.value}`);
		setOrder(event.target.value)
	};

	const handlerOrderByPopulation = (event) => {
		dispatch(orderByPopulation(event.target.value));
		setCurrentPage(1);
		//setOrder(`Ordered ${event.target.value}`);
		setOrder(event.target.value)
	};

	const handlerFilterByContinent = (event) => {
		dispatch(filterByContinent(event.target.value));
		setCurrentPage(1);
	};

	const handlerFilterByActivity = (event) => {
		dispatch(filterByActivity(event.target.value));
		setCurrentPage(1);
	};

	return (
		<div className={style.container}>
			<div>
				<NavBar />
			</div>

			<div className={style.filtercont}>
				<div>
					<button className={style.btn} onClick={handlerClick}>
						List All Countries
					</button>
				</div>

				<div className={style.cont2}>
					<h4>Alphabetical Order</h4>
					<select onChange={handlerOrderAZ}>
						<option value="all">All</option>
						<option value="asc">A to Z</option>
						<option value="desc">Z to A</option>
					</select>
				</div>

				<div className={style.cont2}>
					<h4>Order by Population</h4>
					<select onChange={handlerOrderByPopulation}>
						<option value="all">All</option>
						<option value="asc">+ Population</option>
						<option value="desc">- Population</option>
					</select>
				</div>

				<div className={style.cont2}>
					<h4>Filter by Continent</h4>
					<select onChange={handlerFilterByContinent}>
						<option value="all">All</option>
						<option value="Africa">Africa</option>
						<option value="Antarctica">Antarctica</option>
						<option value="Asia">Asia</option>
						<option value="Europe">Europe</option>
						<option value="North America">North America</option>
						<option value="South America">South America</option>
						<option value="Oceania">Oceania</option>
					</select>
				</div>

				<div className={style.cont2}>
					<h4>Filter by Activity</h4>
					<select name="activities" onChange={handlerFilterByActivity}>
						<option value="all">All</option>
						{activities?.map((acti) => (
							<option key={acti.id} name="activitie" value={acti.name}>
								{acti.name}
							</option>
						))}

						{countries?.map(
							(country) =>
								country.activity && (
									<option value={country.activity}>{country.activity}</option>
								)
						)}
					</select>
				</div>
			</div>

			<div>
				<SearchBar />
			</div>

			<div>
				<Pages
					countriesPerPage={countriesPerPage}
					countriesDb={countries.length}
					paginado={paginado}
					pageNumber={currentPage}
				/>
			</div>
			{loading && <Loader />}

			<div className={style.message}>
				{message && <Message message={message} />}
			</div>

			<div>
				<CountryContainer currentCountries={currentCountries} />
			</div>
		</div>
	);
}

export default Home;
