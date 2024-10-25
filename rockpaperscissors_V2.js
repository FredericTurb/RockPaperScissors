const mainArray = ["Rock", "Paper", "Scissors"];

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();


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
            humanScore = humanScore + 1;
            checkScores();}
    else if(myHuman === 0 && computerChoice === mainArray[1] || myHuman === 1 && computerChoice === mainArray[2] || myHuman === 2 && computerChoice === mainArray[0]){
            computerScore = computerScore + 1;
            checkScores();}
}

function checkScores(){
    if (computerScore === 5){
                            }
    if (humanScore === 5){
                            }
    if (humanScore >= 5 || computerScore >= 5){
        humanScore = 0;
        computerScore = 0;}}
        
getHumanChoice();


