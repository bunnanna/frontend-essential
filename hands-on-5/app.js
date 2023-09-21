const inputBox = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-add");
const todoList = document.getElementById("todo-display");
let a = 0;

const initdata = ["aaa", "bbb", "ccc"];

const addToDoList = (val) => {
	const newToDo = document.createElement("li");
	newToDo.classList.add("todo-list");
	const toDoTitle = document.createElement("span");
	toDoTitle.textContent = val;

	newToDo.appendChild(toDoTitle);
	newToDo.addEventListener("click", () => {
		toDoTitle.classList.toggle("dat");
	});

	const closeBtn = document.createElement("span");
	closeBtn.textContent = "X";
	closeBtn.classList.add("close-btn");
	closeBtn.addEventListener("click", () => newToDo.remove());

	newToDo.appendChild(closeBtn);
	todoList.appendChild(newToDo);
};

initdata.forEach((v) => addToDoList(v));

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const inputValue = inputBox.value.trim();
	if (!inputValue) return;
	addToDoList(inputValue);
	inputBox.value = "";
});
