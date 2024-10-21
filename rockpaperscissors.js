// Rock Paper Scissors //

const myArray = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice(myArray); //
console.log(computerChoice + " DEBUT ICI ");
let userChoice = "Rock" // prompt("Rock, Paper or Scissors ?");
let cleanArray = checkPrompt(userChoice);
if (cleanArray){getHumanChoice(cleanArray, myArray)};
let mainScore = playRound(computerChoice, cleanArray, myArray, humanScore, computerScore);
playGame(mainScore, computerChoice, cleanArray, myArray, humanScore, computerScore);
console.log(computerChoice + "dans la déclaration");




function playGame(mainScore, computerChoice, cleanArray, myArray, humanScore, computerScore){

    let myScore = mainScore[0];
    let coScore = mainScore[1];

    while(myScore < 5 && coScore < 5){
        myScore += 1;
        coScore += 1;
        console.log(`Your score is ${myScore} and the computer score is: ${coScore}`);
        playRound(computerChoice, cleanArray, myArray, humanScore, computerScore);
    }
}

function playRound(computerChoice, cleanArray, myArray, humanScore, computerScore){

    if(cleanArray === myArray[0] && computerChoice === myArray[2] || cleanArray === myArray[1] && computerChoice === myArray[0] || cleanArray === myArray[2] && computerChoice === myArray[1]){
        displayPlayed(cleanArray, myArray);
        humanScore += 1;
        return[humanScore, computerScore]}

    else if(cleanArray === myArray[0] && computerChoice === myArray[1] || cleanArray === myArray[1] && computerChoice === myArray[2] || cleanArray === myArray[2] && computerChoice === myArray[0]){
        displayPlayed(cleanArray, myArray);
        computerScore += 1;
        return[humanScore, computerScore];}
    else{
        displayPlayed(cleanArray, myArray);
        console.log("This is a tie!, no points for either one of you! ");
        playRound(computerChoice, cleanArray, myArray, humanScore, computerScore);}
}

function displayPlayed(cleanArray, computerChoice){
    console.log(computerChoice + " displayPlayed ici");
    console.log(`You played ${cleanArray} and computer played ${computerChoice}`);
}

function getComputerChoice(myArray){
    let myRandom = Math.floor(Math.random() * 3);
    console.log(myArray[myRandom] + "getComput");
    return(myArray[myRandom]);
}

function checkPrompt(userChoice){

    if(typeof userChoice !== 'string' || !userChoice || !/^[A-Za-z]+$/.test(userChoice)){
        console.log("Enter Rock, Paper or Scissors check prompt");
        return null;}
    else{return(userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase());}
}

function getHumanChoice(userChoice, myArray){
    if(userChoice !== myArray[0] && userChoice !== myArray[1] && userChoice !== myArray[2]){
        console.log("Enter Rock, Paper or Scissors humanchoice");
        return;}
    else{return(userChoice);}
}