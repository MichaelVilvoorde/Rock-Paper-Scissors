document.getElementById("playAgainButton").style.visibility = "hidden";

function singleRound(clicked_id){
    const choices = [
        ["rock"],
        ["paper"],
        ["scissors"] 
    ];

    compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(compChoice);

    humanScore = document.getElementById("humanScore").innerHTML;
    computerScore = document.getElementById("computerScore").innerHTML;

    document.getElementById("result").innerHTML = "You picked: " + clicked_id + ". " + "The AI picked: " + compChoice + ".";

    // player choise rock
    if (clicked_id == "rock" && compChoice == "rock") {
        document.getElementById("outcome").innerHTML = "It's a draw!";
    }

    if (clicked_id == "rock" && compChoice == "paper") {
        document.getElementById("outcome").innerHTML = "paper beats rock -> You lose!";
        document.getElementById("computerScore").innerHTML = parseInt(computerScore) + 1;
    }

    if (clicked_id == "rock" && compChoice == "scissors") {
        document.getElementById("outcome").innerHTML = "scissors beats rock -> You win!";
        document.getElementById("humanScore").innerHTML = parseInt(humanScore) + 1;
    }

    // player choise paper
    if (clicked_id == "paper" && compChoice == "rock") {
        document.getElementById("outcome").innerHTML = "paper beats rock -> You win!";
        document.getElementById("humanScore").innerHTML = parseInt(humanScore) + 1;
    }
    if (clicked_id == "paper" && compChoice == "paper") {
        document.getElementById("outcome").innerHTML = "It's a draw!";
    }
    if (clicked_id == "paper" && compChoice == "scissors") {
        document.getElementById("outcome").innerHTML = "scissors beats paper -> You lose!";
        document.getElementById("computerScore").innerHTML = parseInt(computerScore) + 1;
    }


    // player choise scissors
    if (clicked_id == "scissors" && compChoice == "rock") {
        document.getElementById("outcome").innerHTML = "rock beats scissors -> You lose!";
        document.getElementById("computerScore").innerHTML = parseInt(computerScore) + 1;
    }
    if (clicked_id == "scissors" && compChoice == "paper") {
        document.getElementById("outcome").innerHTML = "sciccors beats paper -> You win!";
        document.getElementById("humanScore").innerHTML = parseInt(humanScore) + 1;
    }
    if (clicked_id == "scissors" && compChoice == "scissors") {
        document.getElementById("outcome").innerHTML = "It's a draw!";
    }
}


function maxScoreCheck(){
    humanScore = document.getElementById("humanScore").innerHTML;
    computerScore = document.getElementById("computerScore").innerHTML;

    if (computerScore == 5 || humanScore == 5) { 
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        document.getElementById("playAgainButton").style.visibility = "visible";

        if (computerScore == 5) {
            document.getElementById("finalResult").innerHTML = "Sorry, you lost the game :(";
        }
        
        if (humanScore == 5) {
            document.getElementById("finalResult").innerHTML = "Congratulations, you win the game :)";
        }
    }
}


function playAgain() {
    document.getElementById("humanScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("finalResult").innerHTML = "Take your pick!";
}







