export default function HTMLform() {
	let form = 	'<form id="myForm">'
	form += 		'<br><label>Name: </label><br>'
	form += 		'<input type="text" name="name"><br>'
	form += 		'<label>Last Name: </label><br>'
	form += 		'<input type="text" name="lastname"><br>'
	form += 		'<button type="submit">Register</button>'
	form += 	'</form>'

	return form;
}