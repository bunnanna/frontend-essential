const main = () => {
	const frontBtn = document.getElementById("Frontend-btn");
	const frontInput = document.getElementById("Frontend-input");
	const frontList = document.getElementById("Frontend-list");

	frontBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (!frontInput.value) {
			alert("MT");
			return;
		}
		const newList = document.createElement("li");

		newList.textContent = frontInput.value;

		frontList.appendChild(newList);
	});

	const backBtn = document.getElementById("Backend-btn");
	const backInput = document.getElementById("Backend-input");
	const backList = document.getElementById("Backend-list");

	backBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (!backInput.value) {
			alert("MT");
			return;
		}
		const newList = document.createElement("li");

		newList.textContent = backInput.value;

		backList.appendChild(newList);
	});
};

document.addEventListener("DOMContentLoaded", () => main());
