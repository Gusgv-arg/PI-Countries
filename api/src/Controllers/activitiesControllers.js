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
		res.status(400).json({error: error.message});
	}
};

module.exports = postActivities;
