import { ajax, message } from '/node_modules/ajax-promise-es8/ajax.js';

export default function register() {

	try {

		ajax.post('./src/pages/post/users', myForm, true)
			.then((response) => {
				const user = JSON.parse(response);
				alert(`User ${user.name}${user.lastname} register with success!`);
			})

	} catch (error) {
		console.error(error)
	}

}