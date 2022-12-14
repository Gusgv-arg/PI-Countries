import React from "react"
import {NavLink} from "react-router-dom"
import style from "../CountryCard/country.module.css"

function CountryCard({id, name, continent, flag}){

    return (
        <div className={style.country}>
            <p className={style.bold}>Country: {name}</p> <br />
            <p>Continent: {continent}</p>
            <img src={flag} alt="country flag" className={style.img} />
            <div >
                <NavLink className={style.link} to={`/countrydetails/${id}`}>Details</NavLink>
            </div>
        </div>
    )
}

export default CountryCard