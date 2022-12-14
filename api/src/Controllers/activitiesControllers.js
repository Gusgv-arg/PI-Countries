const { Activity } = require("../db");

const postActivities = async (req, res) => {
	try {
		const { name, duration, season, difficulty, countries } = req.body;
		const newActivitie = await Activity.create({
			name,
			duration,
			season,
			difficulty,
		});

		newActivitie.addCountry(countries);
		res.status(200).json(newActivitie);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const getActivities = async (req, res) => {
	try {
		const { name } = req.query;

		if (!name) {
			const activities = await Activity.findAll();
			res.status(200).send(activities);
		} else {
			const activities = await Activity.findAll({
				where: { name:  name  },
			});
			res.status(200).send(activities);
		}
	} catch (error) {
		res.status(400).send(error.message);
	}
};

module.exports = { postActivities, getActivities };
