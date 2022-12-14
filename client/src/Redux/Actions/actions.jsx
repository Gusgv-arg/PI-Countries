import axios from "axios";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const ORDER_BY_AZ = "ORDER_BY_ALPHABET";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

export const getActivities = () => {
	return async function (dispatch) {
		const activities = await axios.get("http://localhost:3001/activities");
		return dispatch({
			type: GET_ACTIVITIES,
			payload: activities.data,
		});
	};
};

export const getAllCountries = () => {
	return async function (dispatch) {
		const countriesDb = await axios.get("http://localhost:3001/countries");
		return dispatch({
			type: GET_ALL_COUNTRIES,
			payload: countriesDb.data,
		});
		//.catch((error)=>alert("An error has occured, please try later"))
	};
};

export const getCountryDetail = (id) => {
	return async function (dispatch) {
		const country = await axios.get(`http://localhost:3001/countries/${id}`);
		return dispatch({
			type: GET_COUNTRY_DETAIL,
			payload: country.data,
		});
	};
};

export const getCountryByName = (name) => {
	return async function (dispatch) {
		try {
			const country = await axios.get(
				"http://localhost:3001/countries?name=" + name
			);
			return dispatch({
				type: GET_COUNTRY_BY_NAME,
				payload: country.data,
			});
		} catch (error) {
			alert("Your country does not exist in our Database");
		}
	};
};

export const orderByAz = (payload) => {
	return {
		type: ORDER_BY_AZ,
		payload,
	};
};

export const orderByPopulation = (payload) => {
	return {
		type: ORDER_BY_POPULATION,
		payload,
	};
};

export const filterByContinent = (payload) => {
	return {
		type: FILTER_BY_CONTINENT,
		payload,
	};
};

export const filterByActivity = (payload) => {
	return {
		type: FILTER_BY_ACTIVITY,
		payload,
	};
};

export function createActivity(form) {
	return async function (dispatch) {
		try {
			const response = await axios.post(
				"http://localhost:3001/activities",
				form
			);
			await dispatch({
				type: CREATE_ACTIVITY,
				payload: response.data,
			})
			console.log("x ejecutar getalcountries")
			getAllCountries();
		} catch (error) {
			alert("Activity creation failed:");
		}
	};
}
