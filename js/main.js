console.log("main.js loaded");

// Variables
const buttons = document.querySelectorAll(".button");
const computerIcon = document.querySelector(".computer-icon");
const gameLabel = document.querySelector(".game-label");
const playerWinsLabel = document.querySelector(".player-wins-label");
const computerWinsLabel = document.querySelector(".computer-wins-label");
const roundLabel = document.querySelector(".round-label");

const game = {
    playerChoice: "",
    computerChoice: "",
    playerWins: 0,
    computerWins: 0,
}

const rockPaperScissors = ['🪨', '📜', '✂️'];

let playerWon = false;
let gameRound = 1;

// Event listeners
buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        buttonClicked(button);
    });
});

setGameLabels("Rock, Paper or Scissors?");

// Functions
function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}

function buttonClicked(button) {
    const choice = button.target.textContent;

    buttons.forEach(button => {
        if(button.textContent != choice) {
            button.style.visibility = 'hidden'
        }
    });

    game.computerChoice = getComputerChoice();
    computerIcon.textContent = game.computerChoice;

    switch (choice) {
        case '🪨':
            game.playerChoice = "🪨";
            break;
        case '📜':
            game.playerChoice = "📜";
            break;
        case '✂️':
            game.playerChoice = "✂️";
            break;
        default:
            break;
    }

    setGameLabels(checkWinner() + " wins")

    gameRound++;
}

function checkWinner() {
    let winner = "";

    switch (game.playerChoice + game.computerChoice) {
        case "🪨✂️":
        case "✂️📜":
        case "📜🪨":
          winner = "player";
          game.playerWins++;
          break;
        case "✂️🪨":
        case "📜✂️":
        case "🪨📜":
          winner = "computer";
          game.computerWins++;
          break;
        case "📜📜":
        case "✂️✂️":
        case "🪨🪨":
          winner = "none";
          break;
        default:
          winner = "none";
    }

    return winner;
}

function setGameLabels(labelText) {
    gameLabel.textContent = labelText;
    playerWinsLabel.textContent = "Player: " + game.playerWins + " ";
    computerWinsLabel.textContent = "Computer: " + game.computerWins;
    roundLabel.textContent = "Round: " + gameRound;

    buttons.forEach(button => {
        button.disabled = true;
    });

    setTimeout(resetGameLabels, 2000);
}

function resetGameLabels() {
    computerIcon.textContent = "🤖";
    gameLabel.textContent = "Rock, Paper or Scissors?";

    buttons.forEach(button => {
        button.disabled = false;
        button.style.visibility = 'visible';
    });
}
