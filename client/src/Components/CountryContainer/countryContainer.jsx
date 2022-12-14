import React from "react";
import CountryCard from "../CountryCard/countryCard";
import {useDispatch} from "react-redux"
import {useEffect} from "react"
import {getActivities, getAllCountries} from "../../Redux/Actions/actions"
import style from "../CountryContainer/countryContainer.module.css"

function CountryContainer({currentCountries}) {
	
	const dispatch = useDispatch()
	
	/* useEffect(()=>{
		dispatch(getAllCountries())
		dispatch(getActivities())
	},[dispatch]) */
	
	return (
		<div className={style.mainContainer}>
			
			{currentCountries.map((country) => {
				return <CountryCard
                    id={country.id}   
					key={country.id}
                    name={country.name}
                    continent={country.continent}
                    flag={country.flag}
                />;
			})}
		</div>
	);
}

export default CountryContainer;
