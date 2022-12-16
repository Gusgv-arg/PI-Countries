export default function filteredActivity(object, prop) {
	let res = [];

	for (let i = 0; i < object.length; i++) {
		
		for (let j = 0; j < object[i].activities.length; j++) {
			if (object[i].activities[j].name === prop) {
				res.push(object[i]);
			}
		}
	}
	return res;
}


