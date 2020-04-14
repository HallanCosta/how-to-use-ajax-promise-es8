import { ajax, message } from '/node_modules/ajax-promise-es8/ajax.js';

export default async function listAllUsers() {

	try {

		let list = `<h3>List users</h3>`
		await ajax.get('./src/pages/get/users', '', true)
			.then((response) => {
				const users = JSON.parse(response);

				list += 	`<ol>`;
				users.map((user) => list += `<li>${user.name}${user.lastname}</li>`)
				list += 	`</ol>`;

			})
		return list;

	} catch (error) {
		console.error(error);
	}

}



