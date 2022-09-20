const keys = document.querySelector("#keys");
let buffer = "0";
let runningTotal = 0;
let previousOperator = null;

keys.addEventListener("click", (event) => {
	if (event.target.classList.contains("key")) {
		handleClick(event.target.getAttribute("data-key"));
	}
});

const updateScreen = () => {
	const display = document.querySelector("#display");
	display.innerText = buffer;
};

const handleClick = (key) => {
	isNaN(parseInt(key)) ? handleOperator(key) : handleNumber(key);
	updateScreen();
};

const handleNumber = (number) => {
	buffer === "0" ? (buffer = number) : (buffer += number);
};

const flushOperation = (intBuffer) => {
	switch (previousOperator) {
		case "/":
			runningTotal /= intBuffer;
			break;
		case "*":
			runningTotal *= intBuffer;
			break;
		case "+":
			runningTotal += intBuffer;
			break;
		case "-":
			runningTotal -= intBuffer;
			break;
	}
};

const handleMath = (value) => {
	if (buffer === "0") return;

	const intBuffer = parseFloat(buffer);
	if (runningTotal === 0) {
		runningTotal = intBuffer;
	} else {
		flushOperation(intBuffer);
	}
	previousOperator = value;
	buffer = "0";
};

const handleOperator = (operator) => {
	switch (operator) {
		case "clear":
			buffer = "0";
			break;
		case "delete":
			buffer = buffer.length === 1 ? "0" : buffer.slice(0, -1);
			break;
		case "divide":
			handleMath("/");
			break;
		case "multiply":
			handleMath("*");
			break;
		case "add":
			handleMath("+");
			break;
		case "subtract":
			handleMath("-");
			break;
		case "equals":
			if (previousOperator === null) return;
			flushOperation(parseFloat(buffer));
			previousOperator = null;
			buffer = String(runningTotal);
			runningTotal = 0;
			break;
		case "decimal":
			if (buffer.includes(".")) {
				return;
			} else {
				console.log(".");
				buffer += ".";
			}
			break;
	}
};
