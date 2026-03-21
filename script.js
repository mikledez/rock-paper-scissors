function getComputerChoice() {

}

function convertUserChoice() {
    if (uChoice === 1) {
        let uHand = "Rock";
    } else if (uChoice === 2) {
        let uHand = "Paper";
    } else if (uChoice === 3) {
        let uHand = 'Scissors'
    }
}

function userChoice() {
    let num = prompt("Play by entering the number\n1. Rock\n2. Paper\n3. Scissors");
    if (num !== null) {
        console.log("You chose " + convertUserChoice.uHand());
    } else {
        console.log("Invalid/Cancelled")
    }
}

console.log(userChoice());


/* Get user Input
1: Rock
2: Paper
3: Scissors

if(user === computerChoice){
    return tie
}
if(user = 1 & compChoice = 3){
    return You Win
}else if(user = 2 & compChoice = 1){
    You Win
}else if(user = 3 & compChoice = 2){
    You Win
}else{
    You Lose
}


Prompt user to pick
Generate from computer randomly
compare numbers
*/