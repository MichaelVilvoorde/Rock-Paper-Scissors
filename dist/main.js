function rock() {
    const choices = [
        ["rock"],
        ["paper"],
        ["scissors"] 
      ];
    
    let CompChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(CompChoice);

    document.getElementById("result").innerHTML = "You picked: rock." + " " + "The computer picked: " + CompChoice;

    if (CompChoice == "rock") {
        document.getElementById("outcome").innerHTML = "It's a draw!";
    }
    if (CompChoice == "paper") {
        document.getElementById("outcome").innerHTML = "paper beats rock -> You lose!";
        document.getElementById("computerScore").innerHTML = +1;
    }
    if (CompChoice == "scissors") {
        document.getElementById("outcome").innerHTML = "scissors beats rock -> You win!";
        document.getElementById("humanScore").innerHTML = +1;
    }

}

function paper() {
    const choices = [
        ["rock"],
        ["paper"],
        ["scissors"] 
      ];
    
    let CompChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(CompChoice);
    
    document.getElementById("result").innerHTML = "You picked: paper." + " " + "The computer picked: " + CompChoice;

    if (CompChoice == "rock") {
        document.getElementById("outcome").innerHTML = "paper beats rock -> You win!";
        document.getElementById("humanScore").innerHTML = +1;
    }
    if (CompChoice == "paper") {
        document.getElementById("outcome").innerHTML = "It's a draw!";
    }
    if (CompChoice == "scissors") {
        document.getElementById("outcome").innerHTML = "scissors beats paper -> You lose!";
        document.getElementById("computerScore").innerHTML = +1;
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

    if (CompChoice == "rock") {
        document.getElementById("outcome").innerHTML = "rock beats scissors -> You lose!";
        document.getElementById("computerScore").innerHTML = +1;
    }
    if (CompChoice == "paper") {
        document.getElementById("outcome").innerHTML = "sciccors beats paper -> You win!";
        document.getElementById("humanScore").innerHTML = +1;
    }
    if (CompChoice == "scissors") {
        document.getElementById("outcome").innerHTML = "It's a draw!";

    }
}



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

