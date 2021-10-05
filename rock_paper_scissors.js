//VARIABLES

//declare options for computer selection
const PLAY_OPTIONS = ["rock", "paper", "scissors"];

//create variable for player score
let playerScore = 0;

//create variable for computer score
let computerScore = 0;

//create variable for round number
let roundNumber = 0;

let playerSelection;

let endOfGame = false;

// variables for results, score, and round

const resultContainer = document.querySelector('#resultsContainer');
const resultDisplay = document.createElement('div');
resultDisplay.classList.add('resultDisplay');

const roundCont = document.querySelector('.round');
const roundDisplay = document.createElement('p');
roundDisplay.classList.add('roundDisplay');

const playerCont = document.querySelector('.score');
const playerDisplay = document.createElement('p');
playerDisplay.classList.add('playerScore');

const computerCont = document.querySelector('.computer');
const computerDisplay = document.createElement('p');
computerDisplay.classList.add('computerDisplay');

document.addEventListener('DOMContentLoaded', () => {
    updateScores();
    updateRound();
    resultDisplay.textContent = 'Select a choice to begin!';
    resultContainer.appendChild(resultDisplay);
});

//Event listener to play round on button click
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        if (endOfGame == true){
            return
        }
        else {
            playRound();
        }
        
        updateRound();
        updateScores();
    });
});

//FUNCTIONS

// game Over
function gameOver() {
    if (playerScore > computerScore) {
        resultDisplay.textContent = 'Congratulations! You\'ve stopped the robot uprising!';
        resultContainer.appendChild(resultDisplay);
    }
    else {
        resultDisplay.textContent = 'You\'ve failed! There is no chance of stopping the robot uprising!';
        resultContainer.appendChild(resultDisplay);
    }
}

// update round number in header
function updateRound() {
    roundDisplay.textContent = roundNumber;
    roundCont.appendChild(roundDisplay);
}

//update scores in header
function updateScores() {
    playerDisplay.textContent = playerScore;
    playerCont.appendChild(playerDisplay);

    computerDisplay.textContent = computerScore;
    computerCont.appendChild(computerDisplay);
}

//Make random choice for computer from PLAY_OPTIONS
function computerPlay() {
    let random = Math.floor(Math.random() * PLAY_OPTIONS.length);
    return PLAY_OPTIONS[random];
}

//function to play a single round
function playRound() {
    roundNumber++;
    let computerSelection = computerPlay();

    //Tie
    if (playerSelection === computerSelection) {
        resultDisplay.textContent = 'Tie Round';
        resultContainer.appendChild(resultDisplay);
    }
    //player rock beats scissors
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        resultDisplay.textContent = 'Your rock beats Computer scissors!';
        resultContainer.appendChild(resultDisplay);
    }

    //player scissors beats paper
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        resultDisplay.textContent = 'Your scissors beats Computer paper!';
        resultContainer.appendChild(resultDisplay);
    }
    //player paper beats rock
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        resultDisplay.textContent = 'Your paper beats Computer rock!';
        resultContainer.appendChild(resultDisplay);
    }
    //computer rock beats scissors
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore++;
        resultDisplay.textContent = 'Computer rock beats Your Scissors!';
        resultContainer.appendChild(resultDisplay);
    }
    //computer scissors beats paper
    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore++;
        resultDisplay.textContent = 'Computer scissors beats Your paper!';
        resultContainer.appendChild(resultDisplay);
    }
    //computer paper beats rock
    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore++;
        resultDisplay.textContent = 'Computer paper beats Your rock!';
        resultContainer.appendChild(resultDisplay);
    }

    if (playerScore == 5 || computerScore == 5) {
        gameOver();
        endOfGame = true;
    }

}


