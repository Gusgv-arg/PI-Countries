const axios = require("axios");
const {Country, Activity} = require("../db")

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
	//console.log("BULKKKKK",bulk[0])

	/* for (let i=0; i<bulk.length; i++){
		let newContry = await Country.create(bulk[i])

	} */
	Country.bulkCreate(bulk);
}

module.exports ={
	loadDataBase
}