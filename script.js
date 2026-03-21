function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    if (rand === 0) return "rock";
    if (rand === 1) return "paper";
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Play by entering rock, paper, or scissors").toLowerCase();

    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        console.log("Invalid choice");
        return null;
    }

    console.log("You Chose " + choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie! Both chose " + humanChoice);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}


let humanScore = 0;
let computerScore = 0;

let playAgain = true;

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