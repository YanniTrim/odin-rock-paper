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
        resultText.textContent = (`Tie! You both played ${humanChoice}!`);
    }
    else if ((humanChoice == "rock") && (compChoice=="paper")) {
        resultText.textContent = ("You lose! Rock loses to paper!")
        computerScore++;
        scoreText.textContent = `Your Score: ${humanScore}   Computer Score: ${computerScore}`;
    }
    else if ((humanChoice == "rock") && (compChoice=="scissors")) {
        resultText.textContent = ("You win! Rock beats scissors!");
        humanScore++;
        scoreText.textContent = `Your Score: ${humanScore}   Computer Score: ${computerScore}`;
    }
    else if ((humanChoice == "paper") && (compChoice=="scissors")) {
        resultText.textContent = ("You lose! Paper loses to scissors!");
        computerScore++;
        scoreText.textContent = `Your Score: ${humanScore}   Computer Score: ${computerScore}`;
    }
    else if ((humanChoice == "paper") && (compChoice=="rock")) {
        resultText.textContent = ("You win! Paper beats rock!");
        humanScore++;
        scoreText.textContent = `Your Score: ${humanScore}   Computer Score: ${computerScore}`;
    }
    else if ((humanChoice == "scissors") && (compChoice=="rock")) {
        resultText.textContent = ("You lose! Scissors loses to rock!");
        computerScore++;
        scoreText.textContent = `Your Score: ${humanScore}   Computer Score: ${computerScore}`;
    }
    else if ((humanChoice == "scissors") && (compChoice=="paper")) {
        resultText.textContent = ("You win! Scissors beats paper!");
        humanScore++;
        scoreText.textContent = `Your Score: ${humanScore}   Computer Score: ${computerScore}`;
    }
    if (humanScore == 5) {
        const winnerMessage = document.createElement("p");
        winnerMessage.textContent = `You win the game since you hit 5 points!`;
        winnerMessage.style.fontWeight = 600;
        displayDiv.appendChild(winnerMessage);
    } else if (computerScore == 5) {
        const winnerMessage = document.createElement("p");
        winnerMessage.textContent = `The computer wins the game since it hit 5 points!`;
        winnerMessage.style.fontWeight = 600;
        displayDiv.appendChild(winnerMessage);
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

const displayDiv = document.createElement("div");
const scoreText = document.createElement("h3");
scoreText.textContent = `Your Score: ${humanScore}   Computer Score: ${computerScore}`;
displayDiv.appendChild(scoreText);
const resultText = document.createElement("p");
resultText.style.fontStyle = "italic";
displayDiv.appendChild(resultText);
document.body.appendChild(displayDiv);
