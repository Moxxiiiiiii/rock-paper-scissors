/* Create Variables Rock, Paper, Scissors in function
getComputerChoice and getHumanChoice */

//Create the name of the function
function getComputerChoice(input){
    //Create expression that returns a number between 0-99.
    let randomNumber = Math.random() * 100
    console.log(randomNumber)
    //Create If statements as follows:
    //If number returned is < 33 return "rock"
    if (randomNumber < 33) {
        return "Rock";
    //If number returned is > 33 && < 66 return "paper"
    } else if (randomNumber > 33 & randomNumber < 66) {
        return "Paper";
    //If number returned is > 66 return "scissors"
    } else (randomNumber) > 66 
        return "Scissors";
}

//Create the name of the function
//humanChoice needs to be case insensitive
function getHumanChoice(input) {
    //Create and Return value for user input
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
    console.log(humanChoice)
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
    if (humanChoice == rock & computerChoice == scissors) {
        console.log("You win! Rock beats Scissors!");
    } else if (humanChoice == rock & computerChoice == rock) {
        console.log("It's a tie!");
    } else if (humanChoice == rock & computerChoice == paper) {
        console.log("You lose! Paper beats Rock!"); }

    // scissors beats paper, ties to scissors, loses to rock
    if (humanChoice == scissors & computerChoice == paper) {
        console.log("You win! Scissors beats Paper!");
    } else if (humanChoice == scissors & computerChoice == scissors) {
        console.log("It's a tie!");
    } else if (humanChoice == scissors & computerChoice == rock) {
        console.log("You lose! Rock beats Scissors!")
    }

    // paper beats rock, ties to paper and loses to scissors
    if (humanChoice == paper & computerChoice == rock) {
        console.log("You win! Paper beats Rock!");
    } else if (humanChoice == paper & computerChoice == paper) {
        console.log("It's a tie!");
    } else if (humanChoice == paper & computerChoice == scissors) {
        console.log("You lose!")
    }
}
