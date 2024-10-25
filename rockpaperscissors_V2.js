const mainArray = ["Rock", "Paper", "Scissors"];

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

const won = "You Won This Round !";
const lost = "You Lost This Round !";
const tie = "This Is a Tie ! No points !";

const wonGame = "CONGRATULATIONS ! You Won The Game ! ";
const lostGame = "You Lost Sucker ! Try Again ! ";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let myRandom = Math.floor(Math.random() * 3);
    return(mainArray[myRandom]);}
    
function getHumanChoice(){
    buttonRock.addEventListener("click", () => playGame(0)); 
    buttonPaper.addEventListener("click", () => playGame(1)); 
    buttonScissors.addEventListener("click", () => playGame(2));}

function playGame(myHuman){
    computerChoice = getComputerChoice();
    
    if(myHuman === 0 && computerChoice === mainArray[2] || myHuman === 1 && computerChoice === mainArray[0] || myHuman === 2 && computerChoice === mainArray[1]){
            humanScore++;
            displayInDivRound(won);}
    else if(myHuman === 0 && computerChoice === mainArray[1] || myHuman === 1 && computerChoice === mainArray[2] || myHuman === 2 && computerChoice === mainArray[0]){    
            computerScore++;
            displayInDivRound(lost);}
    else{displayInDivRound(tie);}

    displayPlayed(myHuman)
    checkScores();
    displayScores()  
}

function checkScores(){
    if (humanScore === 5){;
        displayFinal(wonGame);
        resetScores();}
    else if (computerScore === 5){
        resetScores();
        displayFinal(lostGame);}
    }

function resetScores(){
    humanScore = 0;
    computerScore = 0;
}

function displayScores()
{   
    const containerPlayerScore = document.querySelector("#scorep");
    const containerComputerScore = document.querySelector("#scorec");

    containerPlayerScore.textContent = `${humanScore} points`;
    containerComputerScore.textContent = `${computerScore} points`;
}

function displayPlayed(myHuman)
{
    const containerPlayerPlayed = document.querySelector("#p1");
    const containerComputerPlayed = document.querySelector("#p2");

    containerPlayerPlayed.textContent = `${mainArray[myHuman]}`;
    containerComputerPlayed.textContent = `${computerChoice}`;
}

function displayInDivRound(result)
{
    const containerResults = document.querySelector("#result");
    containerResults.textContent = `${result}`;
}

function displayFinal(result)
{
    const containerResultsF = document.querySelector("#result");
    containerResultsF.textContent = `${result}`;
}

getHumanChoice();


