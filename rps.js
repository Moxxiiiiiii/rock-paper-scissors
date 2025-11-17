/* Create Variables Rock, Paper, Scissors in function
getComputerChoice and getHumanChoice */

//Create the name of the function
function getComputerChoice(input){
    //Create expression that returns a number between 0-99.
    const randomNumber = Math.random() * 100
    //Create If statements as follows:
    //If number returned is < 33 return "rock"
    if (randomNumber < 33) {
        computerChoice = "rock";
        return computerChoice;
    //If number returned is > 33 && < 66 return "paper"
    } else if (randomNumber > 33 & randomNumber < 66) {
        computerChoice = "paper";
        return computerChoice;
    //If number returned is > 66 return "scissors"
    } else if (randomNumber > 66) {
        computerChoice = "scissors";
        return computerChoice;
    }
}


//Create the name of the function
//humanChoice needs to be case insensitive
function getHumanChoice(input) {
    //Create and Return value for user input
    humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return humanChoice
}

//To manipulate score it must be declared before round
let humanScore = 0 
let computerScore = 0

//Let's Begin structuring the Round
//Time to create a new function
function playRound(humanChoice, computerChoice) {
    // Win Condition needs to be defined
    // Increment humanScore or computerScore based on win.
    // rock beats scissors, ties to rock, loses to paper
    if (humanChoice == "rock" & computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
        return humanScore;
    } else if (humanChoice == "rock" & computerChoice == "rock") {
        console.log("It's a tie!");
    } else if (humanChoice == "rock" & computerChoice == "paper") {
        console.log("You lose! Paper beats Rock!"); 
        computerScore++
        return computerScore;
    }

    // scissors beats paper, ties to scissors, loses to rock
    if (humanChoice == "scissors" & computerChoice == "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore++
        return humanScore;
    } else if (humanChoice == "scissors" & computerChoice == "scissors") {
        console.log("It's a tie!");
    } else if (humanChoice == "scissors" & computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors!")
        computerScore++
        return computerScore;
    }

    // paper beats rock, ties to paper and loses to scissors
    if (humanChoice == "paper" & computerChoice == "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++
        return humanScore;
    } else if (humanChoice == "paper" & computerChoice == "paper") {
        console.log("It's a tie!");
    } else if (humanChoice == "paper" & computerChoice == "scissors") {
        console.log("You lose!")
        computerScore++
        return computerScore;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//Define new function to tie rounds together
function playGame(humanSelection, computerSelection) {
    //Declare score variables in function to track game
    humanScore =  0;
    computerScore = 0;

    //Play 5 playRound
    for (let i = 0; i < 5; i++) {
        console.log("This is Your Score:" + " " + humanScore);
        console.log("Your opponent's score is:" + " " + computerScore);
        //Run functions to return values.
        getHumanChoice();
        getComputerChoice();
        //init round.
        playRound(humanSelection, computerSelection); 
    }
    //Specify game win-con
    if (humanScore > computerScore) {
        console.log("Congratualtions, you win!");
    } else if (humanScore < computerScore){
        console.log("Sorry, you lost!");
    } else {
        console.log("Woah, it's a tie!");
    }

}

playGame(humanSelection, computerSelection)