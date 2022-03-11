let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let secretNumber= Math.floor(Math.random()*10)
    return secretNumber;
}

const compareGuesses = (humanGuess,computerGuess,secretTargetNumber) => {
    let humanNumber=Math.abs(humanGuess-secretTargetNumber)
    // we use Math.abs because the output from subtracting
        // human guess from secret target number can be negative so Math.abs will give us absolute value.
    let computerNumber=Math.abs(computerGuess-secretTargetNumber);
    if(humanNumber===computerNumber){
        return true
    }
   else if(humanNumber<computerNumber){
        return true;
    }
   else {
       return false;
    }

}

const updateScore=(whoWon)=>{
    if (whoWon==='human'){
        return humanScore++;
    }
    else if (whoWon==='computer'){
        return computerScore++;
    }
}

const advanceRound=()=>{
    currentRoundNumber++;
}

