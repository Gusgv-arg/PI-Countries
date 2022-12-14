import {
	GET_ALL_COUNTRIES,
	GET_COUNTRY_DETAIL,
	GET_COUNTRY_BY_NAME,
	ORDER_BY_AZ,
	ORDER_BY_POPULATION,
	FILTER_BY_CONTINENT,
	FILTER_BY_ACTIVITY,
	CREATE_ACTIVITY,
	GET_ACTIVITIES
} from "../Actions/actions";

import filteredActivity from "./filterActivity";

const initialState = {
	countries: [],
	countriesAux: [],
	countryDetail: {},
	activities:[]
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return {
				...state,
			};

		case GET_ALL_COUNTRIES:
			return {
				...state,
				countries: action.payload,
				countriesAux: action.payload,
			};

		case GET_COUNTRY_DETAIL:
			return {
				...state,
				countryDetail: action.payload,
			};

		case GET_COUNTRY_BY_NAME:
			return {
				...state,
				countriesAux: state.countries,
				countries: action.payload,
			};

		case ORDER_BY_AZ:
			const allCountries = state.countriesAux;
			const resultSort =
				action.payload === "asc"
					? allCountries.sort(function (a, b) {
							if (a.name > b.name) {
								return 1;
							}
							if (b.name > a.name) {
								return -1;
							}
							return 0; //x si son iguales
					  })
					: allCountries.sort(function (a, b) {
							if (a.name > b.name) {
								return -1;
							}
							if (b.name > a.name) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				countries: resultSort,
			};

		case ORDER_BY_POPULATION:
			const allCountries2 = state.countriesAux;
			const resultSort2 =
				action.payload === "asc"
					? allCountries2.sort(function (a, b) {
							if (a.population < b.population) {
								return 1;
							}
							if (b.population < a.population) {
								return -1;
							}
							return 0; //x si son iguales
					  })
					: allCountries2.sort(function (a, b) {
							if (a.population < b.population) {
								return -1;
							}
							if (b.population < a.population) {
								return 1;
							}
							return 0;
					  });
			return {
				...state,
				countries: resultSort2,
			};

		case FILTER_BY_CONTINENT:
			const countries = state.countriesAux
			const filtered = action.payload ==="all" ? countries : countries.filter((country)=>country.continent === action.payload)
			
			return {
				...state,
				countries: filtered
			}
		
		case FILTER_BY_ACTIVITY:
			const countries2 = state.countriesAux
			const filtered2 = action.payload === "all" ? countries2 : filteredActivity(countries2, action.payload) 
			
			return {
				...state,
				countries: filtered2
			}
		
		case CREATE_ACTIVITY:
			return {
				...state,
				activities: [...state.activities, action.payload]				
			} 
		
			case GET_ACTIVITIES:
			return {
				...state,
				activities: action.payload
			}
	}
};

export default rootReducer;
