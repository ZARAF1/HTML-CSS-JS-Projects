// first we randomly get user's choice
const getUserChoice = () => {
    let randomNumber= Math.floor(Math.random()*3);
    if (randomNumber===0){
        return 'rock'
    }
    if (randomNumber===1){
        return 'paper'
    }
    if(randomNumber===2){
        return 'scissors'
    }
}
// second we get random computer's choice
const getComputerChoice =()=>{
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber===0){
        return 'rock'
    }
    if (randomNumber===1){
        return 'paper'
    }
    if(randomNumber===2){
        return 'scissors'
    }
}

// to determine the winner we will first deal with a tie condition
const determineWinner = (userChoice, computerChoice)=>{
    if (userChoice===computerChoice){
        return 'Game was a tie';
    }
// the deal with the rest of the scenarios
    // scenario 1
    if (userChoice==='rock'){
        if (computerChoice==='paper'){
            return 'Computer Wins';
        }
        else {
            return 'User Wins';
        }
    }
    // scenario 2
    if (userChoice==='paper'){
        if(computerChoice==='scissors'){
            return 'Computer Wins';
        }
        else{
            return "User Wins"
        }
    }
// scenario 3
    if (userChoice==='scissors'){
        if (computerChoice==='rock'){
            return 'Computer Wins'
        }
        else{
            return 'User Wins'
        }
    }
}
// nest we start the game 
const playGame=()=>{
    const userChoice=getUserChoice();
    const computerChoice= getComputerChoice();
    console.log('User:   ' +userChoice)
    console.log('Computer:   '+ computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
}
playGame()


/*
// Another Implementation by Me Excellent Job Ali
let choices = ['rock','paper','scissor'];

const getUserChoice =()=>{
    let randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber]
}

const getComputerChoice =()=>{
    let randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber]
}
let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

const playGame=()=> {
    if (userChoice === computerChoice) {
         return "Its a draw"
    }
    if (userChoice==="rock" && computerChoice==="paper"){
        return "Computer Wins"
    }
    else if(userChoice==="paper" && computerChoice==="scissor"){
        return "Computer Wins"
    }
    else if(userChoice==="scissor" && computerChoice==="rock"){
        return "Computer Wins"
    }
    else {
        return "User Wins";
    }
}
console.log(`User: ${userChoice}: Computer: ${computerChoice}`)
console.log(playGame())
 */