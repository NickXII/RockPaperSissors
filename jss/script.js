let userScore = 0; //users score
let compScore = 0; //comps score
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board"); //used to update the scoreboard
const result_p = document.querySelector(".result > p"); //used to update what the comp chose
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const sissors_div = document.getElementById("scissors");
const compResult_p = document.querySelector(".compResult > p");
const finalResult_p = document.querySelector(".finalResult > p");
const userResult_p = document.querySelector(".userResult > p");




function getComputerChoice() { //This function randomly choses rock, paper or scissors 
	const choices = ['rock', 'paper', 'scissors'];
	const random = Math.floor(Math.random() * 3); //Randomly choses a number between 0 and 2
	return choices[random]; //returns random const
}

function win(userChoice, computerChoice) {
	userScore++; //increases the users score if you won
	userScore_span.innerHTML = userScore; //upates user score
	compScore_span.innerHTML = compScore; //updates comp score
	result_p.innerHTML = "Comp Chose " + computerChoice; // updates an invisible paragraph to say "Comp chose " whatever the computer chose
	userResult_p.innerHTML = "You Chose " + userChoice; // same as comp 
	finalResult_p.innerHTML = "You Win!"; // declares if you won
}
function lose(userChoice, computerChoice) {
	compScore++; // increases the comp score if you lost
	compScore_span.innerHTML = compScore; //upates user score
	userScore_span.innerHTML = userScore; //updates comp score
	result_p.innerHTML = "Comp Chose " + computerChoice; // updates an invisible paragraph to say "Comp chose " whatever the computer chose
	userResult_p.innerHTML = "You Chose " + userChoice; // same as comp 
	finalResult_p.innerHTML = "You Lost!"; // declares if you lost
}
function draw(userChoice, computerChoice) { // doesnt update anyones score since its a draw
	result_p.innerHTML = "Comp Chose " + computerChoice; // updates an invisible paragraph to say "Comp chose " whatever the computer chose
	userResult_p.innerHTML = "You Chose " + userChoice; // same as comp 
	finalResult_p.innerHTML = "It's A Draw!"; // declares if theres a tie
}

function game(userChoice) { // uses if statements and concat to declare if the user won, lost or if theres a draw
	const computerChoice = getComputerChoice();
	const compare = userChoice + computerChoice; // concats what you chose and what the computer chose
	if ((compare === "rocksissors") || (compare === "paperrock") || (compare === "sissorspaper")) { // if the concat equals any of these strings then you won
		win(userChoice, computerChoice); //sends the user and comp choise to win function
	}		
	else if ((compare === "rockpaper") || (compare === "papersissors") || (compare === "sissorsrock")) { // if the concat equals any of these strings then you lost
		lose(userChoice, computerChoice); //sends the user and comp choise to lose function
	}
	else if ((compare === "rockrock") || (compare === "paperpaper") || (compare === "sissorssissors")) { // if the concat equals any of these strings then theres a draw
		draw(userChoice, computerChoice); //sends the user and comp choise to draw function
	}
}
function main() {
	rock_div.addEventListener('click', function() { // gives functionality to the rock symbol
		game("rock");
	})
	paper_div.addEventListener('click', function() { // gives functionality to the paper symbol
		game("paper");
	})
	sissors_div.addEventListener('click', function() { // gives functionality to the sissors symbol
		game("sissors");
	})
}

main();