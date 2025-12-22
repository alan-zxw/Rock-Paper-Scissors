console.log("Hello world!")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let x = Math.floor(Math.random() * (4 - 1) + 1)
    if(x == 1) {
        return "ROCK"
    }
    else if(x == 2) {
        return "PAPER"
    }
    else {
        return "SCISSORS"
    }
}

function getHumanChoice() {
    let input = prompt("Enter your choice (Rock, Paper, Scissors): ");
    return input
}

console.log(getComputerChoice())
console.log(getHumanChoice())