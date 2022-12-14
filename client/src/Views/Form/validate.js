const validate = (
	input,
	flagName,
	flagDifficulty,
	flagSeason,
	flagDuration
) => {
	let errors = {};
	
	if (!input.name && flagName === true) {
		errors.name = "Activity name is mandatory";
	} else if (
		!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ,. ]+$/.test(input.name) &&
		flagName === true
	) {
		errors.name = "Activity names must ONLY include characters";
	}

	if (!input.difficulty && flagDifficulty === true) {
		errors.difficulty = "Activities must have a Difficulty Score from 1 to 5";
	} else if (
		!/^([1-5]?|5)$/gm.test(input.difficulty) &&
		flagDifficulty === true
	) {
		errors.difficulty = "Difficulty must be between 1 to 5";
	}

	if (!input.duration && flagDuration === true) {
		errors.duration = "Activities must have a duration";
	} else if (input.duration < 1 && flagDuration === true) {
		errors.duration = "Duration cannot be 0 or negative";
	}

	if (!input.season && flagSeason === true)
		errors.season = "Season is mandatory";

	return errors;
};

export default validate;
