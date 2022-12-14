const { Op } = require("sequelize");
const { Activity, Country } = require("../db");

const validateActivity = async (req, res, next) => {
    const { name, duration, season, difficulty, countries } = req.body;
    
    const newActivity = await Activity.findAll({
        where: { name: { [Op.iLike]: `${name}` } },
    });
    if (newActivity.length>0) return res.status(400).send("Activity already exists!!");
	
    if (!name) return res.status(400).send("Name of activity is mandatory");
	
    if (!duration) return res.status(400).send("Duration of activity is required");
	
    if (!season) return res.status(400).send("Season of activity is required");
	
    if (difficulty < 1 || difficulty > 5)	return res.status(400).send("Difficulty must be rated 1 to 5");
    
    /* if(countries.length===0) return res.status(400).send("Country is required")
    countries.map(async (country)=>{
        let find = await Country.findByPk(country)
        if (!find) return res.status(400).send("Country does not exist!")
    })  */

	next();
};

module.exports = validateActivity;
