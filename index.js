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

function game(){
    //var result = false;
    let user_score = 0;
    let computer_score = 0;
    let message = "";
    
    for (var i=1; i<=5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        console.log("Round " + i + ": " + result);

        if(result.includes("win")){
            user_score += 1;
        } else{
            computer_score += 1;
        }

        if(user_score > computer_score){
            message = "Congratulations! You win the game!";
        } else{
            message = "You lose. Please try again.";
        }  
    }
    console.log("Your score: " + user_score + "\nComputer score: " + computer_score + "\n" + message);
}

game();
