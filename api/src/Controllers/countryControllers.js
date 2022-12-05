const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

//get by query or body
const getCountries = async (req, res) => {
	try {
		const { name } = req.query;

		if (!name) {
			const countries = await Country.findAll({
				attributes: [
					"id",
					"name",
					"capital",
					"continent",
					"subregion",
					"area",
					"population",
					"flag",
				],
				include: [
					{
						model: Activity,
						attributes: ["name", "duration", "season", "difficulty"],
					},
				],
			});
			res.status(200).send(countries);
		} else {
			const countries = await Country.findAll({
				where: { name: { [Op.iLike]: `%${name}%` } },
				attributes: [
					"id",
					"name",
					"capital",
					"continent",
					"subregion",
					"area",
					"population",
					"flag",
				],
				include: [
					{
						model: Activity,
						attributes: ["name", "duration", "season", "difficulty"],
					},
				],
			});
			if (countries.length === 0)
				throw new Error("There are no countries with that name");
			res.status(200).send(countries);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

//get by params
const getCountry = async (req, res) => {
	try {
		const { id } = req.params;

		const country = await Country.findByPk(id, {
			attributes: [
				"id",
				"name",
				"capital",
				"continent",
				"subregion",
				"area",
				"population",
				"flag",
			],
			include: [
				{
					model: Activity,
					attributes: ["name", "duration", "season", "difficulty"],
				},
			],
		});
		if (country === null) {
			return res.status(200).send("There is no country with this ID");
		} else {
			return res.status(200).send(country);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = {
	getCountries,
	getCountry,
};
