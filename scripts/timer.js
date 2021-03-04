
let isWorking = 0;
let startTime;
let time;



const count = document.getElementById("timerRes");
const startBtn = document.querySelector('#start'),
	pauseBtn = document.querySelector('#pause'),
	continueBtn = document.querySelector('#continue'),
	resetBtn = document.querySelector('#reset'),
	timePassedBtn = document.querySelector('#timePassed')





function timePassed() {
	if (isWorking == 1) {
		let timePassed = startTime - time - 1;

		let h = Math.floor(timePassed / 3600);
		h = h < 10 ? "0" + h : h;

		let m = Math.floor(timePassed / 60);
		while (m >= 60) {
			m -= 60;
		}
		m = m < 10 ? "0" + m : m;

		let s = timePassed % 60;
		s = s < 10 ? "0" + s : s;

		let count2 = document.getElementById("divTimePassed");
		count2.innerHTML = h + ' : ' + m + ' : ' + s;


	}
}

function pause() {
	pauseBtn.classList.add('hide');
	continueBtn.classList.remove('hide');
	clearInterval(intervalID);
	continueTime = time;
}

function continueTimer() {
	time = continueTime;
	intervalID = setInterval(updateCountDown, 1000);
	continueBtn.classList.add('hide');
	pauseBtn.classList.remove('hide');
}


function reset() {
	isWorking = 0;
	h = 0;
	m = 0;
	s = 0;
	count.innerHTML = `0:00:00`;
	clearInterval(intervalID);
	hours.value = "";
	minutes.value = "";
	seconds.value = "";

}

function updateCountDown() {

	let h = Math.floor(time / 3600);
	h = h < 10 ? "0" + h : h;

	let m = Math.floor(time / 60);
	while (m >= 60) {
		m -= 60;
	}
	m = m < 10 ? "0" + m : m;

	let s = time % 60;
	s = s < 10 ? "0" + s : s;

	count.innerHTML = h + ' : ' + m + ' : ' + s;
	time--;
	if (time < 0) {
		clearInterval(intervalID);
	}
}

let hoursElement = document.querySelector("#hours");
let minutesElement = document.querySelector("#minutes");
let secondsElement = document.querySelector("#seconds");

function start() {
	let hours = hoursElement.value;
	let minutes = minutesElement.value;
	let seconds = secondsElement.value;

	time = hours * 3600 + minutes * 60 + seconds * 1;
	startTime = hours * 3600 + minutes * 60 + seconds * 1
	if (isWorking == 0) {
		isWorking = 1;
		if (isNaN(time) || time < 0) {
			count.innerHTML = "Проверьте ввод";
		}
		else {
			intervalID = setInterval(updateCountDown, 1000);
		}
	}
}

startBtn.addEventListener('click', () => start());
resetBtn.addEventListener('click', () => reset());
pauseBtn.addEventListener('click', () => pause());
continueBtn.addEventListener('click', () => continueTimer());
timePassedBtn.addEventListener('click', () => timePassed());