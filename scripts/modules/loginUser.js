import { getElement } from '../utils/domUtils.js';

// ja, jag har fått hjälp av ai här och där... blev förbannad

loginUser();

function getUsers() {
	console.log('in getUsers()');
	const users = localStorage.getItem('users');
	return users ? JSON.parse(users) : [];
}

function findUser(username) {
	const users = getUsers();
	return users.find((user) => (user.username && user.username.toLowerCase() === username.toLowerCase()) || (user.email && user.email.toLowerCase() === username.toLowerCase()));
}

// aktiverar eventlyssnaren
export function loginUser() {
	console.log('in loginUser()');

	const loginFormRef = getElement('#loginForm');
	const emailErrorRef = getElement('#emailError');

	if (!loginFormRef) return;

	loginFormRef.addEventListener('submit', (event) => {
		event.preventDefault();

		// rensar gammatl
		if (emailErrorRef) emailErrorRef.textContent = '';

		const username = getElement('#loginEmail').value.trim();
		const password = getElement('#loginPassword').value.trim();

		if (validateLogin(username, password, emailErrorRef)) {
			const user = findUser(username);

			if (!user || user.password !== password) {
				if (emailErrorRef) {
					emailErrorRef.textContent = 'Användarnamn eller lösenord är fel';
				}
				return;
			}

			sessionStorage.setItem('activeUser', JSON.stringify(user));
			console.log('Inloggning lyckades!');
			window.location.href = '../pages/menu.html';
		}
	});
}

// validering mot localStorage
// function validateLogin(email, password) {
// 	let isValid = true;

// 	getElement('#emailError').textContent = '';
// 	getElement('#passwordError').textContent = '';

// 	if (!email) {
// 		getElement('#emailError').textContent = 'Ange e-post';
// 		isValid = false;
// 	}

// 	if (!password) {
// 		getElement('#passwordError').textContent = 'Ange lösenord';
// 		isValid = false;
// 	}

// 	return isValid;
// }

function validateLogin(email, password) {
	let isValid = true;

	getElement('#emailError').textContent = '';
	getElement('#passwordError').textContent = '';

	if (!email) {
		getElement('#emailError').textContent = 'Ange e-post';
		isValid = false;
	}

	if (!password) {
		getElement('#passwordError').textContent = 'Ange lösenord';
		isValid = false;
	}

	return isValid;
}

// 	try {
// 		if (!username || !password) {
// 			throw { msg: 'Vänligen fyll i både e-post och lösenord.' };
// 		}

// 		const user = findUser(username);
// 		console.log('Matchning hittad:', user);

// 		if (!user) {
// 			throw { msg: 'Användaren finns inte.' };
// 		}

// 		// Kontrollera lösenord (Case Sensitive!)
// 		if (user.password !== password) {
// 			throw { msg: 'Fel lösenord.' };
// 		}

// 		return true;
// 	} catch (error) {
// 		alert(error.msg);
// 		return false;
// 	}
// }
