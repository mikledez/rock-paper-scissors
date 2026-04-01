function getComputerChoice() {

    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) return "rock";
    if (rand === 1) return "paper";
    return "scissors";
}

function processClick(humanChoice) {
    if (round >= 5) return;

    const computerChoice = getComputerChoice;
    const result = playRound(humanChoice, computerChoice);

    resultsPanel.innerHTML += `<p>Round ${round}: ${result}</p>`;
    resultsPanel.innerHTML += `<p>Score:  You: ${humanScore} | Computer: ${computerScore}</p>`;

    if (round === 5) {
        if (humanScore > computerScore) {
            resultsPanel.innerHTML += `<h3>You won the game!</h3>`;
        } else if (computerScore > humanScore) {
            resultsPanel.innerHTML += `<h3>You lost the game!</h3>`;
        } else {
            resultsPanel.innerHTML += `<h3>Game is a tie!</h3>`;
        }
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return ("Tie! Both chose " + humanChoice);
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
}


let humanScore = 0;
let computerScore = 0;
let playAgain = true;


const rockBtn = document.getElementById("rock-button");
const paperBtn = document.getElementById("paper-button");
const scissorsBtn = document.getElementById("scissors-button");

const resultsPanel = document.querySelector(".results-panel");

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));



do {
    for (let round = 1; round <= 5; round++) {
        const human = getClick();
        const computer = getComputerChoice();

        playRound(human, computer);
    }
}


/*
do {
    for (let round = 1; round <= 5; round++) {
        const human = getHumanChoice();
        if (human === null) {
            playAgain = false;
            break;
        }

        const computer = getComputerChoice();
        playRound(human, computer);

        alert(`Score → You: ${humanScore} | Computer: ${computerScore} (Round ${round}/5)`);
    }

    if (!playAgain) break;

    let answer = prompt("Do you want to play another set of 5 rounds? (y/n)");
    if (answer === null || answer.toLowerCase() !== "y") {
        playAgain = false;
    }
} while (playAgain);

alert("Final Score → You: " + humanScore + " | Computer: " + computerScore);
alert("Thanks for playing!");
*/