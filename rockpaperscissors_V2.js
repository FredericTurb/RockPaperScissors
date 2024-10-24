const mainArray = ["Rock", "Paper", "Scissors"];

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();
getHumanChoice();

function getComputerChoice(){
    let myRandom = Math.floor(Math.random() * 3);
    return(mainArray[myRandom]);
} 
function getHumanChoice(){
    buttonRock.addEventListener("click", () => playRound(mainArray[0])); 
    buttonPaper.addEventListener("click", () => playRound(mainArray[1])); 
    buttonScissors.addEventListener("click", () => playRound(mainArray[2])); 
}

function playRound(str)
{

}










// 1) WE GET COMPUTER CHOICE AS AN ARRAY CALLED TEST. TEST[0] = COMPUTER CHOICE. -> DONE
// 2) CREATE 3 BUTTONS -> ADD EVENT LISTENER                                     -> DONE
// 3) CALL PLAYROUND WITH THE RESULT OF PRESSED BUTTON AS ARGUMENT               -> DONE
// 4) 



