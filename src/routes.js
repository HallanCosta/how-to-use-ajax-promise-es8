import HTMLform from './pages/post/index.js';
import register from './pages/post/users.js';

import { HTMLButtonlistAllUsers, HTMLDivUsers } from './pages/get/index.js';
import listAllUsers from './pages/get/users.js';

export function RequestInPost() {
	const root = document.getElementById('root');
	root.innerHTML += HTMLform();

	const myForm = document.getElementById('myForm');
	myForm.addEventListener('submit', (e) => {
		e.preventDefault();
		register();
	})
}

export function RequestInGet() {
	const root = document.getElementById('root');
	root.innerHTML += HTMLButtonlistAllUsers();

	const button = document.querySelector('button#toList');
	button.addEventListener('click', () => {
		root.innerHTML += HTMLDivUsers();
		const divUsers = document.querySelector('div#div-users');
		listAllUsers()
			.then((response) => {
				divUsers.innerHTML = response;
			});
	})
}