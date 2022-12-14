const axios = require("axios");
const {Country} = require("../db")

//Function that changes original object to PI needs
const changeObject = (obj) => {
	let newArr = [];

	for (i = 0; i < obj.length; i++) {
		let newObj = { id: "" };
		for (props in obj[i]) {
			
			if (props === "fifa" && "fifa" !== "") {
				newObj.id = obj[i].fifa;
			} else if (props === "cca3" && "cca3" !== "") {
				newObj.id = obj[i].cca3;
			}
			if (props === "name") newObj.name = obj[i].name.common;
			if (newObj.name==="Åland Islands") newObj.name = "Aland Islands" 
			if (newObj.name==="São Tomé and Príncipe") newObj.name = "Sao Tomé and Príncipe" 
			if (props === "capital") newObj.capital = obj[i].capital[0];
			if (props === "continents") newObj.continent = obj[i].continents[0];
			if (props === "subregion") newObj.subregion = obj[i].subregion;
			if (props === "area") newObj.area = obj[i].area;
			if (props === "population") newObj.population = obj[i].population;
			if (props === "flags") newObj.flag = obj[i].flags[0];
			if (!newObj.capital) newObj.capital = "No data";
			if (!newObj.subregion) newObj.subregion = "No data";
		}
		newArr.push(newObj);
	}
	return newArr;
};


const loadDataBase = async ()=>{

	const info = await axios.get("https://restcountries.com/v3/all")
	const bulk = changeObject(info.data)
	Country.bulkCreate(bulk);
}

module.exports ={
	loadDataBase
}