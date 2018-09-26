let container = document.querySelector('.cont');

let winOrLose = document.createElement('h3');
winOrLose.textContent = "";
container.appendChild(winOrLose);

function computerPlay(){
    let sets = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return(sets[random]);
}

function playRound(playerSelection, computerSelection){
    var result = "";
    var draw = "Draw! None of you lose";
    switch(computerSelection){
        case "rock":
            if(playerSelection == "scissors"){
                result = "You lose! Rock beats Scissors";
            } else if(playerSelection == "paper"){
                result = "You win! Paper beats Rock";
            } else if (computerSelection == playerSelection) {
                result = draw;
            } else{
                result = "Invalid! Try again";
            }
            break;
        case "paper":
            if(playerSelection == "rock"){
                result = "You lose! Paper beats Rock";
            } else if(playerSelection == "scissors"){
                result = "You win! Scissors beats Paper";
            } else if (computerSelection == playerSelection) {
                result = draw;
            } else{
                result = "Invalid! Try again";
            }
            break;
        case "scissors":
            if(playerSelection == "rock"){
                result = "You win! Rock beats Scissors";
            } else if(playerSelection == "paper"){
                result = "You lose! Scissors beats Paper";
            } else if (computerSelection == playerSelection) {
                result = draw;
            } else{
                result = "Invalid! Try again";
            }
            break;
    }
    return result;
}

function game(tool){
    //var result = false;
    let user_score = 0;
    let computer_score = 0;
    let message = "";
    let final = document.getElementById('output');

    let playerSelection = tool.id;
    let computerSelection = computerPlay();
    winOrLose.textContent = playRound(playerSelection, computerSelection);

    if (winOrLose.textContent.includes("win")) {
        user_score += 1;
    } else {
        computer_score += 1;
    }

    if (user_score > computer_score) {
        message = "Congratulations! You win the game!";
    } else {
        message = "You lose. Please try again.";
    }

    final.innerHTML = "Your score: " + user_score + "\nComputer score: " + computer_score + "\n" + message;
}

const btnTools = document.querySelectorAll('.button');

btnTools.forEach(tool => tool.addEventListener('click', function(){
    game(tool);
}));
