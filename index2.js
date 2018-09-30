let output = document.querySelector('#output');

let winOrLose = document.createElement('h3');
winOrLose.textContent = "";
output.appendChild(winOrLose);

let scoreDis = document.createElement('div');
scoreDis.classList.add('scoreDis');

let userScoreDis = document.createElement('h2');
userScoreDis.textContent = 0;
userScoreDis.classList.add('userScore');
scoreDis.appendChild(userScoreDis);

let compScoreDis = document.createElement('h2');
compScoreDis.textContent = 0;
compScoreDis.classList.add('compScore');
scoreDis.appendChild(compScoreDis);

output.appendChild(scoreDis);

let resultMess = document.createElement('h1');
resultMess.textContent = "";
output.appendChild(resultMess);

let resetDiv = document.createElement('div');
output.appendChild(resetDiv);

let user_score = 0;
let computer_score = 0;

function computerPlay(){
    let sets = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return(sets[random]);
}

function playRound(playerSelection, computerSelection){
    var draw = "Draw! None of you lose";
    switch(computerSelection){
        case "rock":
            if(playerSelection == "scissors"){
                winOrLose.textContent = "You lose! Rock beats Scissors";
                computer_score += 1;
                return computer_score;
            } else if(playerSelection == "paper"){
                winOrLose.textContent = "You win! Paper beats Rock";
                user_score += 1;
                return user_score;
            } else if (computerSelection == playerSelection) {
                winOrLose.textContent = draw;
            } 
            break;
        case "paper":
            if(playerSelection == "rock"){
                winOrLose.textContent = "You lose! Paper beats Rock";
                computer_score += 1;
                return computer_score;
            } else if(playerSelection == "scissors"){
                winOrLose.textContent = "You win! Scissors beats Paper";
                user_score += 1;
                return user_score;
            } else if (computerSelection == playerSelection) {
                winOrLose.textContent = draw;
            }
            break;
        case "scissors":
            if(playerSelection == "rock"){
                winOrLose.textContent = "You win! Rock beats Scissors";
                user_score += 1;
                return user_score;
            } else if(playerSelection == "paper"){
                winOrLose.textContent = "You lose! Scissors beats Paper";
                computer_score += 1;
                return computer_score;
            } else if (computerSelection == playerSelection) {
                winOrLose.textContent = draw;
            }
            break;
    }
}

function resetGame(){
    let resetBtn = document.createElement('button');
    resetBtn.textContent = "Play Again";
    resetDiv.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
        userScoreDis.textContent = 0;
        compScoreDis.textContent = 0;
        user_score = 0;
        computer_score = 0;
        winOrLose.textContent = "";
        resultMess.textContent = "";
        resetDiv.removeChild(resetBtn);
    }); 
}

function game(tool){
    let message = "";

    let playerSelection = tool.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    userScoreDis.textContent = user_score;
    compScoreDis.textContent = computer_score;

    if(user_score + computer_score >= 5){
        if (user_score > computer_score) {
            message = "Congratulations! You win the game!";
            resetGame();
        } else {
            message = "You lose. Please try again.";
            resetGame();
        }
    }
    
    resultMess.textContent = message;
}

const btnTools = document.querySelectorAll('.button');

btnTools.forEach(tool => tool.addEventListener('click', function(){
    game(tool);
}));
