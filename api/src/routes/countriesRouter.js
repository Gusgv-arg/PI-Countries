const { Router } = require("express");
const {
	getCountries,
	getCountry,
} = require("../Controllers/countryControllers");
const countriesRouter = Router();

countriesRouter.get("/", getCountries);

countriesRouter.get("/:id", getCountry);

module.exports = countriesRouter;
