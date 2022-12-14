const { Router } = require("express");
const {
	postActivities,
	getActivities,
} = require("../Controllers/activitiesControllers");
const validateActivity = require("../Middlewares");
const activitiesRouter = Router();

activitiesRouter.post("/", validateActivity, postActivities);
activitiesRouter.get("/", getActivities);

module.exports = activitiesRouter;
