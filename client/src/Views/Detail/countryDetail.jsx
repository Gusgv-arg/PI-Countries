import React from "react";
import NavBar from "../../Components/NavBar/navBar"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {getCountryDetail} from "../../Redux/Actions/actions"
import style from "../Detail/countryDetail.module.css"

function CountryDetail(props) {

	const id = props.match.params.id;

	const dispatch = useDispatch()
	
	useEffect(()=>dispatch(getCountryDetail(id)),
	[id, dispatch])

	const detail = useSelector((state)=>state.countryDetail)

	return (
		<div>
			<NavBar />
			<div className={style.cont} >
				
				<div className={style.text}>
					<p>Country Name: {detail.name}</p>
					<p>Country ID: {detail.id}</p>
					<p>Capital: {detail.capital}</p>
					<p>Subregion: {detail.subregion}</p>
					<p>Area: {detail.area}</p>
					<p>Population: {detail.population}</p>
					<p>Activities: <br/>{detail.activities?.map((country)=><span key={country.name}>{country.name} <br/></span>)}</p>
				</div>

				<div className={style.flag}>
					<img src={detail.flag} alt="" />
				</div>                        
			</div>
		</div>
	);
}

export default CountryDetail;
