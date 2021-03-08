
function rock() {
    const choices = [
        ["rock"],
        ["paper"],
        ["scissors"] 
      ];

    let CompChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(CompChoice);

    computerScore =  document.getElementById("computerScore").innerHTML;
    humanScore = document.getElementById("humanScore").innerHTML;


    document.getElementById("result").innerHTML = "You picked: rock." + " " + "The computer picked: " + CompChoice;

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


    if (computerScore == 5) {
        document.getElementById("result").innerHTML = "Sorry you losed the game :(";
        document.getElementById("playButton").disabled = true;
        // document.getElementById("outcome").style.visibility = "hidden";
    }
    
    if (humanScore == 5) {
        document.getElementById("result").innerHTML = "Gratz you win the game :)";
        document.getElementById("playButton").disabled = true;
    }
    console.log(humanScore);
    console.log(computerScore);
   
}

function paper() {
    const choices = [
        ["rock"],
        ["paper"],
        ["scissors"] 
      ];
    
    let CompChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(CompChoice);

    computerScore =  document.getElementById("computerScore").innerHTML;
    humanScore = document.getElementById("humanScore").innerHTML;

    
    document.getElementById("result").innerHTML = "You picked: paper." + " " + "The computer picked: " + CompChoice;

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
    const choices = [
        ["rock"],
        ["paper"],
        ["scissors"] 
      ];
    
    let CompChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(CompChoice);

    document.getElementById("result").innerHTML = "You picked: scissors." + " " + "The computer picked: " + CompChoice;   

    computerScore =  document.getElementById("computerScore").innerHTML;
    humanScore = document.getElementById("humanScore").innerHTML;


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

// computerScore =  document.getElementById("computerScore").innerHTML;
// humanScore = document.getElementById("humanScore").innerHTML;




// const choices = [
//     ["rock"],
//     ["paper"],
//     ["scissors"] 
//   ];

// let CompChoice = choices[Math.floor(Math.random() * choices.length)];
// console.log(CompChoice);





// if (CompChoice == "rock") {
//     console.log("test1");
// }

// if (CompChoice == "paper") {
//     console.log("test2");
// }

// if (CompChoice == "scissors") {
//     console.log("test3");
// }






// var maken van document.getElementById("humanScore").innerHTML

