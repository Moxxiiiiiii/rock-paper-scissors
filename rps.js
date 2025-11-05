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
function getHumanChoice(input) {
    //Create and Return value for user input
    let humanChoice = prompt("Rock, Paper or Scissors?")
    console.log(humanChoice)
}

