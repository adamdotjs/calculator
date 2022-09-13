const keys = document.querySelector("#keys");
const display = document.querySelector("#display");

keys.addEventListener("click", (event) => {
	if (event.target.classList.contains("key")) {
		display.innerText += event.target.getAttribute("data-key");
	}
});

const handleAdd = () => {};
const handleSubtract = () => {};
const handleMultiply = () => {};
const handleDivide = () => {};
const handleClear = () => {};
const handleBackspace = () => {};
const handleEquals = () => {};
