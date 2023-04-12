console.log("main.js loaded");

// Variables
const buttons = document.querySelectorAll(".button");

const game = {
    playerWins: 0,
    computerWins: 0
}

const rockPaperScissor = ['🪨', '📜', '✂️'];

let playerChoice = "";
let gameRound = 0;

// Add event listeners
buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        buttonClicked(button);
    });
});

function getComputerChoice() {
    return rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
}

// Functions
function buttonClicked(button) {
    const choice = button.target.innerHTML;

    console.log("getComputerChoice: " + getComputerChoice())
    gameRound++;
    
    switch (choice) {
        case '🪨':
            console.log("Let's rock!"); 
            break;
        case '📜':
            console.log("Paper it is"); 
            break;
        case '✂️':
            console.log("Ssssscissor"); 
            break;
        default:
            break;
    }
}