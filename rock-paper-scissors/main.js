// game mechanics
const playGame = () => {
    // Collect user input
    let userInput = prompt('Let\'s play Rock, Paper Scissors! What do you choose?');
    let userChoice;

    // Assign and display user input
    if (userInput.toLowerCase() == 'rock') {
        userChoice = 'rock';
        console.log(`User chooses: ${userInput}`);
    };
    if (userInput.toLowerCase() == 'paper') {
        userChoice = 'paper';
        console.log(`User chooses: ${userInput}`);
    };
    if (userInput.toLowerCase() == 'scissors') {
        userChoice = 'scissors';
        console.log(`User chooses: ${userInput}`);
    };

    // Computer choice
    let randomNum = Math.floor(Math.random() * 3); // Random Num from 0 to 2
    let computerChoice;

    // Assign and display computer choice
    if (randomNum === 0) {
        computerChoice = 'rock';
        console.log('Computer chooses: rock');
    };
    if (randomNum === 1) {
        computerChoice = 'paper';
        console.log('Computer chooses: paper');
    };
    if (randomNum === 2) {
        computerChoice = 'scissors';
        console.log('Computer chooses: scissors');
    };


    // This executes the game
    if (userChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log('It\'s a tie!');
        };
        if (computerChoice === 'paper') {
            console.log('Computer wins!');
        };
        if (computerChoice === 'scissors') {
            console.log('User wins!');
        };
    };
    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('User wins!');
        };
        if (computerChoice === 'paper') {
            console.log('It\'s a tie!');
        };
        if (computerChoice === 'scissors') {
            console.log('Computer wins!');
        };
    };
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('Computer wins!');
        };
        if (computerChoice === 'paper') {
            console.log('User wins!');
        };
        if (computerChoice === 'scissors') {
            console.log('It\'s a tie!');
        };
    };
};