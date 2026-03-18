import { addClass, removeClass, getElement } from '../utils/domUtils.js';
import { fetchApiUsers } from './api.js';

// ja, jag har fått en del support av ai för att felsöka och få råd...

registerUser();
addApiUsersToLocalStorage();

// lägger till API-användare i localstorage
export async function addApiUsersToLocalStorage() {
	console.log('in addApiUsersToLocalStorage()');

	//kollar om anv finns
	let users = getUsers();

	// så inte api-anv läggs till igen om de redan finns i users
	if (users.length > 0) {
		return;
	}
	// lägg till anv fr api
	let apiUsers = await fetchApiUsers();
	if (!apiUsers) return;

	apiUsers.users.forEach((apiUser) => {
		users.push(apiUser);
	});

	localStorage.setItem('users', JSON.stringify(users));
}

// registrera anv
export function registerUser() {
	console.log('in registerUser()');
	const registerFormRef = getElement('#registerForm');
	const confirmationMsg = getElement('#accountRegConf');
	const loginBtn = getElement('#loginBtnRegPage');

	registerFormRef.addEventListener('submit', (event) => {
		event.preventDefault();

		const username = getElement('#regName').value.trim();
		const email = getElement('#regEmail').value.trim();
		const password = getElement('#regPassword').value.trim();
		const passwordRepeat = getElement('#regRepeatPassword').value.trim();

		if (validateRegistration(username, email, password, passwordRepeat)) {
			saveUser(username, email, password);
			registerFormRef.reset();
			console.log('anv registrerad');
			addClass(registerFormRef, 'd-none');
			removeClass(confirmationMsg, 'd-none');
			removeClass(loginBtn, 'd-none');
			// window.location.href = 'login.html';
		}
	});
}

// validerarr registrering
function validateRegistration(username, email, password, passwordRepeat) {
	let isValid = true;

	//rensa allt
	getElement('#nameError').textContent = '';
	getElement('#emailError').textContent = '';
	getElement('#passwordError').textContent = '';
	getElement('#passwordRepeatError').textContent = '';

	// kopntrollera fälten
	if (!username) {
		getElement('#nameError').textContent = 'Ange namn';
		isValid = false;
	}

	if (!email) {
		getElement('#emailError').textContent = 'Ange e-post';
		isValid = false;
	}

	if (!password) {
		getElement('#passwordError').textContent = 'Välj lösenord';
		isValid = false;
	} else if (password !== passwordRepeat) {
		getElement('#passwordRepeatError').textContent = 'Lösenorden matchar inte';
		isValid = false;
	}

	// koll om username är taget
	if (username && usernameExists(username)) {
		getElement('#nameError').textContent = 'Namnet är upptaget';
		isValid = false;
	}
	// koll om email är taget
	if (email && emailExists(email)) {
		getElement('#emailError').textContent = 'E-postadressen är redan registrerad';
		isValid = false;
	}

	return isValid;
}

// Hämta anv från localStorarge:
function getUsers() {
	console.log('in getUsersFromLocalStorage()');
	return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUser(username, email, password) {
	console.log('in saveUser()');

	const users = getUsers();
	users.push({
		username: username,
		password: password,
		role: 'user', // Sätter en default roll som "user"... RÄTT?????
		email: email,
		profile_image: '', // Skapar plats för profilbild men tom...  RÄTT?????
	});

	localStorage.setItem('users', JSON.stringify(users));
}

// gör:

function usernameExists(username) {
	console.log('in usernameExists()');
	const users = getUsers();
	return users.some((user) => user.username.toLowerCase() === username.toLowerCase());
}

function emailExists(email) {
	console.log('in emailExists()');
	const users = getUsers();
	return users.some((user) => user.email && user.email.toLowerCase() === email.toLowerCase());
}
