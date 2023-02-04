function computerPlay(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase(); 
    
    console.log('Player selection: ' + playerChoice);
    console.log('Computer selection: ' + computerSelection);

    if(playerSelection == "rock" && computerSelection == "Rock"){
        return "It's a tie!";
    }

    else if(playerSelection == "paper" && computerSelection == "Rock"){
        return "Player wins!";
    }

    else if(playerSelection == "scissors" && computerSelection == "Rock"){
        return "Computer wins!";
    }

    else if(playerSelection == "rock" && computerSelection == "Paper"){
        return "Computer wins!";
    }

    else if(playerSelection == "paper" && computerSelection == "Paper"){
        return "It's a tie!";
    }

    else if(playerSelection == "scissors" && computerSelection == "Paper"){
        return "Player wins!";
    }

    else if(playerSelection == "rock" && computerSelection == "Scissors"){
        return "Player wins!";
    }

    else if(playerSelection == "paper" && computerSelection == "Scissors"){
        return "Computer wins!";
    }

    else if(playerSelection == "scissors" && computerSelection == "Scissors"){
        return "It's a tie!";
    }
}

var playerChoice;

function game(){
    for(let i = 0; i < 5; i++){

        playerChoice = prompt("Rock, paper or scissors?", "Rock");

        console.log('Round ' + (i+1));
        console.log(playRound(playerChoice, computerPlay()));
    }
}

game();