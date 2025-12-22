

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

function playRound(humanChoice, computerChoice) {
    console.log("------------------------------------")
    if(humanChoice.toUpperCase() == computerChoice) {
        console.log("It's a tie!")
        humanScore += 1
        computerScore += 1
    }
    else if(humanChoice.toUpperCase() == "ROCK" && computerChoice == "SCISSORS") {
        console.log("You played: " + humanChoice + "\nComputer played: " + computerChoice + "\nYou win!")
        humanScore += 1
    }
    else if(humanChoice.toUpperCase() == "ROCK" && computerChoice == "PAPER") {
        console.log("You played: " + humanChoice + "\nComputer played: " + computerChoice + "\nYou lose!")
        computerScore += 1
    }

    else if(humanChoice.toUpperCase() == "PAPER" && computerChoice == "SCISSORS") {
        console.log("You played: " + humanChoice + "\nComputer played: " + computerChoice + "\nYou lose!")
        computerScore += 1
    }
    else if(humanChoice.toUpperCase() == "PAPER" && computerChoice == "ROCK") {
        console.log("You played: " + humanChoice + "\nComputer played: " + computerChoice + "\nYou win!")
        humanScore += 1
    }

    else if(humanChoice.toUpperCase() == "SCISSORS" && computerChoice == "PAPER") {
        console.log("You played: " + humanChoice + "\nComputer played: " + computerChoice + "\nYou win!")
        humanScore += 1
    }
    else if(humanChoice.toUpperCase() == "SCISSORS" && computerChoice == "ROCK") {
        console.log("You played: " + humanChoice + "\nComputer played: " + computerChoice + "\nYou lose!")
        computerScore += 1
    }
    else {
        console.log("Error occured. . .")
    }

    console.log("Current Score: " + humanScore + " to " + computerScore)
    console.log("------------------------------------")
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
}


playGame()