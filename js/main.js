console.log("main.js loaded");

// Variables

let buttons = document.querySelectorAll(".button");


// Add event listeners

buttons.forEach(button => {
    button.addEventListener("click", (button) => {
        buttonClicked(button);
    });
});



// Functions

function buttonClicked(button) {
    const choice = button.target.innerHTML;
    console.log(choice);

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