// Collect user input
let userInput = prompt('Let\'s play Rock, Paper Scissors! What do you choose?');


// Display user input
if (userInput.toLowerCase() == 'rock') {
    console.log(`User chooses: ${userInput}`);
};
if (userInput.toLowerCase() == 'paper') {
    console.log(`User chooses: ${userInput}`);
};
if (userInput.toLowerCase() == 'scissors') {
    console.log(`User chooses: ${userInput}`);
};

// Computer choice
let randomNum = Math.floor(Math.random() * 3); // Random Num from 0 to 2

// Display computer choice
if (randomNum === 0) {
    console.log('Computer chooses: rock');
};
if (randomNum === 1) {
    console.log('Computer chooses: paper');
};
if (randomNum === 2) {
    console.log('Computer chooses: scissors');
};