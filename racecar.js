// JavaScript Document

// Starts countdown and calls race function and end of countdown
function countdown() {
	"use strict";
	
	// Sets interval for countdown lights
	var wait = setInterval(lightPole, 1000);
	var x = 0;
	
	// Begins light countdown
	function lightPole() {
		if (x === 0) {
			document.getElementById("LPID").src = "Images/TrackLights-02.png";
			x++;
		} else if (x === 1) {
			document.getElementById("LPID").src = "Images/TrackLights-03.png";
			x++;
		} else if (x === 2) {
			document.getElementById("LPID").src = "Images/TrackLights-04.png";
			x++;
		} else {
			document.getElementById("LPID").src = "Images/TrackLights-05.png";
			clearInterval(wait);
			race();
			x = 0;
		}
	}
}

// Starts, ends, determines winner of race
function race() {
	"use strict";
	
	// Assigns car images to variables
	var car1 = document.getElementById("raceCar1ID");
	var car2 = document.getElementById("raceCar2ID");
	
	// Sets cars initial positions
	var pos1 = window.innerHeight - 155;
	var pos2 = window.innerHeight - 155;
	
	// Sets how fast the car travels
	var interval1 = ((Math.random() * 10) + 1);
	var interval2 = ((Math.random() * 10) + 1);	
	var track1 = setInterval(takeoff1, interval1);
	var track2 = setInterval(takeoff2, interval2);
	
	// Moves first car
	function takeoff1() {
		if (pos1 === 0 || pos2 === 0) {
			clearInterval(track1);
			winner();
		} else {
			pos1--;
			car1.style.top = pos1 + "px";
		}
	}
	
	// Moves second car
	function takeoff2() {
		if (pos1 === 0 || pos2 === 0) {
			clearInterval(track2);
		} else {
			pos2--;
			car2.style.top = pos2 + "px";
		}
	}
	
	// Determines if car one won or if it is a tie
	function winner() {
		if (pos1 ===0) {
			document.getElementById("carOneID").classList.toggle("carOneShow");
		} else if (pos2 === 0) {
			document.getElementById("carTwoID").classList.toggle("carTwoShow");
		}
	}
}