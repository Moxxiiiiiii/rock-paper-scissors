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
    //If number returned is > 33 && < 66 return "paper"
    } else if (randomNumber > 33 & randomNumber < 66) {
        computerChoice = "paper";
    //If number returned is > 66 return "scissors"
    } else if (randomNumber > 66) {
        computerChoice = "scissors";
    }
    console.log(computerChoice)
}


//Create the name of the function
//humanChoice needs to be case insensitive
function getHumanChoice(input) {
    //Create and Return value for user input
    humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(humanChoice);
}


//Declare Variables for Player and Computer Score
let humanScore =  0
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
    } else if (humanChoice == "rock" & computerChoice == "rock") {
        console.log("It's a tie!");
    } else if (humanChoice == "rock" & computerChoice == "paper") {
        console.log("You lose! Paper beats Rock!"); 
        computerScore++
    }

    // scissors beats paper, ties to scissors, loses to rock
    if (humanChoice == "scissors" & computerChoice == "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore++
    } else if (humanChoice == "scissors" & computerChoice == "scissors") {
        console.log("It's a tie!");
    } else if (humanChoice == "scissors" & computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors!")
        computerScore++
    }

    // paper beats rock, ties to paper and loses to scissors
    if (humanChoice == "paper" & computerChoice == "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++
    } else if (humanChoice == "paper" & computerChoice == "paper") {
        console.log("It's a tie!");
    } else if (humanChoice == "paper" & computerChoice == "scissors") {
        console.log("You lose!")
        computerScore++
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//Define new function to tie rounds together
function playGame(input) {
    //Declare score variables in function to track game
    let totalScore = (humanScore + computerScore);
    console.log("This is Your Score:" + humanScore)
    //Play 5 playRound
    do
        playRound(humanSelection, humanChoice)
    while (totalScore > 6);

}