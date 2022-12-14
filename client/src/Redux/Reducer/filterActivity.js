/* const obj = [
	{
		id: 1,
		name: "arg",
		capital: "bsas",
		activities: [
			{ id: 1, name: "ski" },
			{ id: 1, name: "tennis" },
		],
	},
	{ id: 2, name: "aaa", capital: "aaa", activities: [] },
	{ id: 3, name: "bbb", capital: "bbb", activities: [{ id: 1, name: "ski" }] },
]; */

export default function filteredActivity(object, prop) {
	let res = [];

	for (let i = 0; i < object.length; i++) {
		console.log("length",object[i].activities.length)
		for (let j = 0; j < object[i].activities.length; j++) {
			if (object[i].activities[j].name === prop) {
				res.push(object[i]);
			}
		}
	}
	return res;
}


