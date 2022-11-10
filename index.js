const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector(".name");
const focus = document.querySelector("#focus");

// show AP or PM
const showAmPm = true;

// show time
function showTime() {
	let today = new Date();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();

	// set AM or PM
	const amPm = hours >= 12 ? "PM" : "AM";

	// 12 hour format
	hours = hours % 12 || 12;

	// output the time
	time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${
		showAmPm ? amPm : ""
	}`;

	setTimeout(showTime, 1000);
}

// add zero to the second
function addZero(n) {
	return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set the Background and Greeting
function setBgGreet() {
	let today = new Date();
	let hours = today.getHours();

	if (hours < 12) {
		// Morning
		document.body.style.backgroundImage = "url(morning.jpg)";
		greeting.textContent = "Good Morning";
		document.body.style.color = "White";
	} else if (hours < 18) {
		// afternoon
		document.body.style.backgroundImage = "url(afternoon.jpg)";
		greeting.textContent = "Good Afternoon";
	} else {
		// evening
		document.body.style.backgroundImage = "url(evening.jpg)";
		greeting.textContent = "Good Evening";
		document.body.style.color = "White";
	}
}

// set Name
function setName(event) {
	if (event.type === "keypress") {
		// make sure enter is pressed
		if (event.which == 13 || event.keyCode == 13) {
			localStorage.setItem("name", event.target.innerText);
			name.blur();
		}
	} else {
		localStorage.setItem("name", event.target.innerText);
	}
}

// Get Name
function getName() {
	if (localStorage.getItem("name") === null) {
		name.textContent = "Enter Name";
	} else {
		name.textContent = localStorage.getItem("name");
	}
}

// set Focus
function setFocus(event) {
	if (event.type === "keypress") {
		// Make sure enter is pressed
		if (event.which == 13 || event.keyCode == 13) {
			localStorage.setItem("focus", event.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem("focus", event.target.innerText);
	}
}

// get Focus
function getFocus() {
	if (localStorage.getItem("focus") === null) {
		focus.textContent = "Enter Focus for Today";
	} else {
		focus.textContent = localStorage.getItem("focus");
	}
}

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// Run
showTime();
setBgGreet();
getName();
getFocus();
