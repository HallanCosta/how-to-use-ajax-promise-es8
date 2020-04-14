import { RequestInPost, RequestInGet } from './routes.js';

export default function() {
	let buttons = '<button id="post">POST</button>&nbsp'
	buttons += '<button id="get">GET</button>'
	document.getElementById('root').innerHTML = buttons;

	const btnPost = document.querySelector('button#post');
	btnPost.addEventListener('click', () => {
		alert('You will initialize the request POST');
		RequestInPost();
	})

	const btnGet = document.querySelector('button#get');
	btnGet.addEventListener('click', () => {
		alert('You will initialize the request GET');
		RequestInGet();
	})
}