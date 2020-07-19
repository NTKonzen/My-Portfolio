// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var comChoices = ["rock", "paper", "scissors"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;

let playAgain = false;

let comChoice;

function rps() {

    playAgain = true;

    while (playAgain) {

        let result;

        let playerChoice = prompt('Enter \'rock\', \'paper\' or \'scissors\' to play!');

        if (playerChoice === null || playerChoice.toLowerCase() !== 'rock' && playerChoice.toLowerCase() !== 'paper' && playerChoice.toLowerCase() !== 'scissors') {
            return;
        };

        var randomRPSChoice = Math.floor(Math.random() * 3);

        comChoice = comChoices[randomRPSChoice];

        alert(`The computer has chosen ${comChoice}`);

        if (playerChoice.toLowerCase() === comChoice) {

            result = 'tied with the computer';

            ties++;

        } else if (
        
            playerChoice.toLowerCase() === 'rock' 
            && comChoice === 'paper' 
        
            || playerChoice.toLowerCase() === 'paper' 
            && comChoice === 'scissors' 
        
            || playerChoice.toLowerCase() === 'scissors'
            && comChoice === 'rock'
         
        ) {

            result = 'lose';

            losses++;

        } else if (
            
            playerChoice.toLowerCase() === 'rock' 
            && comChoice === 'scissors' 

            || playerChoice.toLowerCase() === 'scissors' 
            && comChoice === 'paper' 

            || playerChoice.toLowerCase() === 'paper' 
            && comChoice === 'rock'
        
        ) {

            result = 'win';

            wins++;

        };

        alert('You '+result+'! You have ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties');

        playAgain = confirm('Do you want to play again? Click \'Confirm\' for yes and \'Cancel\' for no');

        if (playAgain === null) {
            return;
        }

    };

};