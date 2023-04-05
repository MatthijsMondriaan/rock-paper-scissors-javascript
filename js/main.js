console.log("main.js loaded");

// Variables
let buttons = document.querySelectorAll(".button");


// Add event listeners
buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        buttonClicked(button);
    });
});

let i = 0;

// Functions
function buttonClicked(button) {
    const choice = button.target.innerHTML;

    console.log("i: " + i)
    i++;
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