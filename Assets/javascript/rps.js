// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var comChoices = ["rock", "paper", "scissors"];

var randomRPSChoice = Math.floor(Math.random() * 3);

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;

let playAgain = false;

function rps() {

    playAgain = true;

    while (playAgain === true) {

        let playerChoice = prompt('Enter \'rock\', \'paper\' or \'scissors\' to play!');

        let comChoice = comChoices[randomRPSChoice];

        alert(`The computer has chosen ${comChoice}`);

        if (playerChoice === comChoice) {

            alert('You tied with the computer!');

            ties++;

            alert('You have ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties');

            again = prompt('Do you want to play again? Enter \'yes\' or \'no\'');

            if (again === 'yes') {
                playAgain = true;
            } else if (again === 'no') {
                playAgain = false;
            };

        } else if (playerChoice === 'rock' && comChoice === 'paper') {

            alert('You lose!');

            losses++;

            alert('You have ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties');

            again = prompt('Do you want to play again? Enter \'yes\' or \'no\'');
            if (again === 'yes') {
                playAgain = true;
            } else if (again === 'no') {
                playAgain = false;
            };

        } else if (playerChoice === 'rock' && comChoice === 'scissors') {

            alert('You win!');

            wins++;

            alert('You have ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties');

            again = prompt('Do you want to play again? Enter \'yes\' or \'no\'');

            if (again === 'yes') {
                playAgain = true;
            } else if (again === 'no') {
                break;
            };

        } else if (playerChoice === 'paper' && comChoice === 'rock') {

            alert('You win!');

            wins++;

            alert('You have ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties');

            again = prompt('Do you want to play again? Enter \'yes\' or \'no\'');

            if (again === 'yes') {
                playAgain = true;
            } else if (again === 'no') {
                playAgain = false;
            };

        } else if (playerChoice === 'paper' && comChoice === 'scissors') {

            alert('You lose!');

            losses++;

            alert('You have ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties');

            again = prompt('Do you want to play again? Enter \'yes\' or \'no\'');

            if (again === 'yes') {
                playAgain = true;
            } else if (again === 'no') {
                playAgain = false;
            };

        } else if (playerChoice === 'scissors' && comChoice === 'rock') {

            alert('You lose!');

            losses++;

            alert('You have ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties');

            again = prompt('Do you want to play again? Enter \'yes\' or \'no\'');

            if (again === 'yes') {
                playAgain = true;
            } else if (again === 'no') {
                playAgain = false;
            };

        } else if (playerChoice === 'scissors' && comChoice === 'paper') {

            alert('You win!');

            wins++;

            alert('You have ' + wins + ' wins, ' + losses + ' losses, and ' + ties + ' ties');

            again = prompt('Do you want to play again? Enter \'yes\' or \'no\'');

            if (again === 'yes') {
                playAgain = true;
            } else if (again === 'no') {
                playAgain = false;
            };

        };

    };

};