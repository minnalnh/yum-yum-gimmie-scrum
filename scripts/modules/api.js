export async function fetchFood() {
	try {
		const response = await fetch('https://santosnr6.github.io/Data/yumyumproducts.json');
		return await response.json();
	} catch (error) {
		console.log(error);
	}
}
// hämta användare från API
export async function fetchApiUsers() {
	console.log('in fetchUsers()!');

	try {
		const response = await fetch('https://santosnr6.github.io/Data/yumyumusers.json');
		const apiUsers = await response.json();
		return apiUsers;
	} catch (error) {
		console.error('Fetch error:', error.message);
		return [];
	}
}
