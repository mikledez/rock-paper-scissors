function getComputerChoice() {

    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) return "rock";
    if (rand === 1) return "paper";
    return "scissors";
}

function processClick(humanChoice) {
    if (round >= 5) return;

    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    round++;

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
let round = 0;


const rockBtn = document.getElementById("rock-button");
const paperBtn = document.getElementById("paper-button");
const scissorsBtn = document.getElementById("scissors-button");

const resultsPanel = document.querySelector(".results-panel");

rockBtn.addEventListener("click", () => processClick("rock"));
paperBtn.addEventListener("click", () => processClick("paper"));
scissorsBtn.addEventListener("click", () => processClick("scissors"));