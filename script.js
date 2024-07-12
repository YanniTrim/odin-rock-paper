let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?: ");
    return humanChoice.toLowerCase();
}

function getComputerChoice() {
    let randNum = Math.floor(Math.random()*3);
    let compChoice;
    switch (randNum){
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissors";
            break;
    }
    return compChoice;
}

function playRound(humanChoice, compChoice) {
    if (humanChoice == compChoice) {
        console.log(`Tie! You both played ${humanChoice}!`);
    }
    else if ((humanChoice == "rock") && (compChoice=="paper")) {
        console.log("You lose! Rock loses to paper!")
        computerScore++;
    }
    else if ((humanChoice == "rock") && (compChoice=="scissors")) {
        console.log("You win! Rock beats scissors!");
        humanScore++;
    }
    else if ((humanChoice == "paper") && (compChoice=="scissors")) {
        console.log("You lose! Paper loses to scissors!");
        computerScore++;
    }
    else if ((humanChoice == "paper") && (compChoice=="rock")) {
        console.log("You win! Paper beats rock!");
        humanScore++;
    }
    else if ((humanChoice == "scissors") && (compChoice=="rock")) {
        console.log("You lose! Scissors loses to rock!");
        computerScore++;
    }
    else if ((humanChoice == "scissors") && (compChoice=="paper")) {
        console.log("You win! Scissors beats paper!");
        humanScore++;
    }
}

function playGame() {
    const humanSelection = getHumanChoice();
    const compSelection = getComputerChoice();
    playRound(humanSelection,compSelection);
    if (humanScore>computerScore) {
        console.log(`You win the game with ${humanScore} points!`);
    } else {
        console.log(`You lose the game with ${humanScore} points`);
    }
}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
