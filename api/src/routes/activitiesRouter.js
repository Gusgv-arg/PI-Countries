const { Router } = require("express");
const postActivities = require("../Controllers/activitiesControllers");
const validateActivity = require("../Middlewares");
const activitiesRouter = Router();

activitiesRouter.post("/", validateActivity, postActivities);

module.exports = activitiesRouter;
