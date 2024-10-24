/* ___ ROCK_PAPER_SCISSORS___*/ 

const mainArray = ["Rock","Paper","Scissors"];
let arrayString = "Rock, Paper or Scissors ?";
let humanScore = 0;
let computerScore = 0;

let computerSelection = getComputerChoice(mainArray);

let userChoice = prompt(arrayString);
let userSelection = getHumanChoice(userChoice, mainArray);
let scoreArray = [];

while (userSelection == null){
    userChoice = prompt(arrayString);
    userSelection = getHumanChoice(userChoice, mainArray);


    
}  
if (userSelection !== null){
    scoreArray = playRound(computerSelection, userSelection, mainArray, humanScore, computerScore);}

    
/*
playGame(userChoice, scoreArray, computerSelection, userSelection, mainArray, humanScore, computerScore);



function playGame(userChoice, scoreArray, computerSelection, userSelection, mainArray, humanScore, computerScore){
    
    while (scoreArray[0] < 5 && scoreArray[1] < 5)
        {
            computerSelection = getComputerChoice(mainArray);
            userChoice = prompt(arrayString);
            userSelection = getHumanChoice(userChoice, mainArray);
            if (userSelection !== null){
                scoreArray = playRound(computerSelection, userSelection, mainArray, scoreArray[0], scoreArray[1])};
                }
    if (scoreArray[0] == 5){
        console.log("Congratulations, you won!! ");}
    if (scoreArray[1] == 5){
        console.log("You lost against the computer");
    }
}


*/


function playRound(computerSelection, userSelection, mainArray, humanScore, computerScore){

    if(userSelection === mainArray[0] && computerSelection === mainArray[2] || userSelection === mainArray[1] && computerSelection === mainArray[0] || userSelection === mainArray[2] && computerSelection === mainArray[1]){
        displayPlayed(userSelection, computerSelection);
        humanScore += 1;
        console.log(`You won this round, the score is ${humanScore} for you and ${computerScore} for the computer`);
        return[humanScore, computerScore]}

    else if(userSelection === mainArray[0] && computerSelection === mainArray[1] || userSelection === mainArray[1] && computerSelection === mainArray[2] || userSelection === mainArray[2] && computerSelection === mainArray[0]){
        displayPlayed(userSelection, computerSelection);
        computerScore += 1;
        console.log(`Computer won this round, the score is ${humanScore} for you and ${computerScore} for the computer`);
        return[humanScore, computerScore];}
    else{
        displayPlayed(userSelection, computerSelection);
        console.log("This is a tie!, no points for either one of you! ");
        return[humanScore, computerScore];}
}







function displayPlayed(userSelection, computerSelection){
    console.log(`You played ${userSelection} and computer played ${computerSelection}`);
} 

function getComputerChoice(mainArray){
    let myRandom = Math.floor(Math.random() * 3);
    return(mainArray[myRandom]);
} 

function getHumanChoice(userChoice, mainArray){

    if(typeof userChoice !== 'string' || !userChoice || !/^[A-Za-z]+$/.test(userChoice)){
        console.log("Please enter Rock, Paper or Scissors");
        return null;}

    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();       

    if(userChoice !== mainArray[0] && userChoice !== mainArray[1] && userChoice !== mainArray[2]){
        console.log("Please enter Rock, Paper or Scissors");
        return null;}
    else{return(userChoice);}
}