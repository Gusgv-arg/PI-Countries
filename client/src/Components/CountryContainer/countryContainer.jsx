import React from "react";
import CountryCard from "../CountryCard/countryCard";
import style from "../CountryContainer/countryContainer.module.css"

function CountryContainer({currentCountries}) {
		
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
