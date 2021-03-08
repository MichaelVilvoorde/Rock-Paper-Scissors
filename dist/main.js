
const choices = [
    ["rock"],
    ["paper"],
    ["scissors"] 
  ];



function rock() {
    
    CompChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(CompChoice);

    document.getElementById("result").innerHTML = "You picked: rock." + " " + "The computer picked: " + CompChoice;

    humanScore = document.getElementById("humanScore").innerHTML;
    computerScore = document.getElementById("computerScore").innerHTML;


    if (CompChoice == "rock") {
        document.getElementById("outcome").innerHTML = "It's a draw!";
    }
    if (CompChoice == "paper") {
        document.getElementById("outcome").innerHTML = "paper beats rock -> You lose!";
        document.getElementById("computerScore").innerHTML = parseInt(computerScore) + 1;
    }
    if (CompChoice == "scissors") {
        document.getElementById("outcome").innerHTML = "scissors beats rock -> You win!";
        document.getElementById("humanScore").innerHTML = parseInt(humanScore) + 1;
    }

   
}

function paper() {
    
    CompChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(CompChoice);
   
    document.getElementById("result").innerHTML = "You picked: paper." + " " + "The computer picked: " + CompChoice;

    humanScore = document.getElementById("humanScore").innerHTML;
    computerScore = document.getElementById("computerScore").innerHTML;


    if (CompChoice == "rock") {
        document.getElementById("outcome").innerHTML = "paper beats rock -> You win!";
        document.getElementById("humanScore").innerHTML = parseInt(humanScore) + 1;
    }
    if (CompChoice == "paper") {
        document.getElementById("outcome").innerHTML = "It's a draw!";
    }
    if (CompChoice == "scissors") {
        document.getElementById("outcome").innerHTML = "scissors beats paper -> You lose!";
        document.getElementById("computerScore").innerHTML = parseInt(computerScore) + 1;
    }
    

    
}

function scissors() {

    CompChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(CompChoice);

    document.getElementById("result").innerHTML = "You picked: scissors." + " " + "The computer picked: " + CompChoice;   
    
    humanScore = document.getElementById("humanScore").innerHTML;
    computerScore = document.getElementById("computerScore").innerHTML;


    if (CompChoice == "rock") {
        document.getElementById("outcome").innerHTML = "rock beats scissors -> You lose!";
        document.getElementById("computerScore").innerHTML = parseInt(computerScore) + 1;
    }
    if (CompChoice == "paper") {
        document.getElementById("outcome").innerHTML = "sciccors beats paper -> You win!";
        document.getElementById("humanScore").innerHTML = parseInt(humanScore) + 1;
    }
    if (CompChoice == "scissors") {
        document.getElementById("outcome").innerHTML = "It's a draw!";

    }
    


}

function maxScoreCheck(){
    humanScore = document.getElementById("humanScore").innerHTML;
    computerScore = document.getElementById("computerScore").innerHTML;
    
    if (computerScore == 5) {
        document.getElementById("finalResult").innerHTML = "Sorry, you losed the game :(";
        document.getElementById("playButton").disabled = true;
        // document.getElementById("outcome").style.visibility = "hidden";
    }
    
    if (humanScore == 5) {
        document.getElementById("finalResult").innerHTML = "Congratulations, you win the game :)";
        document.getElementById("playButton").disabled = true;
        
    }

    
    console.log(humanScore);
    console.log(computerScore);

}







