const loginUrl = "https://api.learnhub.thanayut.in.th/auth/login";
const myDataUrl = "https://api.learnhub.thanayut.in.th/auth/me";

const getToken = async (username, password) => {
	const data = await fetch(loginUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username, password }),
	}).then((res) => res.json());
	return data;
};

const getMyData = async (token) => {
	const data = await fetch(myDataUrl, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	}).then((res) => res.json());
	return data;
};

const onHandleLogin = async () => {
	const usernameInput = document.getElementById("username");
	const passwordInput = document.getElementById("password");
	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	if (!username || !password) {
		alert("Invalid username or password");
		return;
	}
	const data = await getToken(username, password);

	if (data.error || !data.accessToken) {
		alert(data.message || "token not found");
		return;
	}
	const token = data.accessToken;
	console.log(token);

	localStorage.setItem("token", token);
};

const main = async () => {
	const btnInput = document.getElementById("submit");
	const findMe = document.getElementById("get-info");

	btnInput.addEventListener("click", (e) => {
		e.preventDefault();
		onHandleLogin();
	});

	findMe.addEventListener("click", async () => {
		const token = localStorage.getItem("token");
		if (!token) {
			alert("Pls login before det own data.");
			return;
		}
		data = await getMyData(token);
		console.log(data);
		document.getElementById(
			"ret"
		).outerHTML = `<h1>Username : ${data.username}</h1><h2>Name : ${data.name}</h2>`;
	});
};

document.addEventListener("DOMContentLoaded", () => main());
