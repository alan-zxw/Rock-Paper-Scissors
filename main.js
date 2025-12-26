const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const text = document.querySelector("#player-move");
const score = document.querySelector("#score");
const roundsLeft = document.querySelector("#rounds-left");
const resetButton = document.querySelector("#reset-button");

const threeRounds = document.querySelector("#t-rounds");
const fiveRounds = document.querySelector("#f-rounds");
const sevenRounds = document.querySelector("#s-rounds");
const infiniteRounds = document.querySelector("#infinite");

let inPlay = false;
let winner = document.querySelector("#winner");


const computerResponse = document.querySelector("#computer-choice");

let humanScore = 0
let computerScore = 0
let rounds = 0
roundsLeft.textContent = rounds


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

function disablePlay() {
    inPlay = false;
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function updateScore() {
    score.textContent = "Player: " + humanScore + " :: Computer: " + computerScore;  
}

function reportWinner() {
    if (humanScore > computerScore) {
        winner.textContent = "YOU WIN!!!";
    }
    else if (computerScore > humanScore) {
        winner.textContent = "COMPUTER WINS :(";
    }
    else {
        winner.textContent = "IT'S A TIE!";
    }
}

function updateRounds() {
    roundsLeft.textContent = rounds;
    rounds -= 1;
    if(rounds == -1) {
        disablePlay();
        reportWinner();
    }
}

resetButton.addEventListener("click", ()=>{
    humanScore = 0;
    computerScore = 0;
    roundsLeft.textContent = 0;
    computerResponse.textContent = "Computer";
    updateScore();
    disablePlay();
    inPlay = false;
    winner.textContent = "";
    text.textContent = "";
});

rock.addEventListener("click", ()=>{
    if (inPlay) {
        text.textContent = rock.id.toUpperCase();
        computerResponse.textContent = getComputerChoice();
        playRound("rock", computerResponse.textContent);
        updateRounds();
        score.textContent = "Player: " + humanScore + " :: Computer: " + computerScore;
    }   
});

paper.addEventListener("click", ()=>{
    if (inPlay) {
        text.textContent = paper.id.toUpperCase();
        computerResponse.textContent = getComputerChoice();
        playRound("paper", computerResponse.textContent);
        updateRounds();
        score.textContent = "Player: " + humanScore + " :: Computer: " + computerScore;
    }   
});

scissors.addEventListener("click", ()=>{
    if (inPlay) {
        text.textContent = scissors.id.toUpperCase();
        computerResponse.textContent = getComputerChoice();
        playRound("scissors", computerResponse.textContent);
        updateRounds();
        score.textContent = "Player: " + humanScore + " :: Computer: " + computerScore;
    }   
});

function allowPlay() {
    inPlay = true;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

threeRounds.addEventListener("click", ()=>{
    console.log("Clicked");
    humanScore = 0;
    computerScore = 0;
    rounds = 3;
    roundsLeft.textContent = rounds;
    computerResponse.textContent = "Computer";
    winner.textContent = "";
    updateScore();
    updateRounds();
    allowPlay();
});

fiveRounds.addEventListener("click", ()=>{
    humanScore = 0;
    computerScore = 0;
    rounds = 5;
    roundsLeft.textContent = rounds;
    computerResponse.textContent = "Computer";
    winner.textContent = "";
    updateScore();
    updateRounds();
    allowPlay();
});

sevenRounds.addEventListener("click", ()=>{
    humanScore = 0;
    computerScore = 0;
    rounds = 7;
    roundsLeft.textContent = rounds;
    computerResponse.textContent = "Computer";
    winner.textContent = "";
    updateScore();
    updateRounds();
    allowPlay();
});

infiniteRounds.addEventListener("click", ()=>{
    humanScore = 0;
    computerScore = 0;
    rounds = "NaN";
    roundsLeft.textContent = rounds;
    computerResponse.textContent = "Computer";
    winner.textContent = "";
    updateScore();
    allowPlay();
});

