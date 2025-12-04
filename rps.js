function playGame(){

    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
    // console.log (randomNumber);// Debugging in the beginning
     if (randomNumber < 1) {
        return "Rock";
     } else if (randomNumber > 1) {
        return "Scissors";
     } else {
        return "Paper";
     }
    }
    //console.log (getComputerChoice()); Debugging in the beginning

    function getHumanChoice() {
        let sign = prompt("Choose your Hand Signal: ");
        return sign.toLowerCase().charAt(0).toUpperCase() + sign.toLowerCase().slice(1);
    }
    //console.log(getHumanChoice()); Debugging in the beginning
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === "Paper" && computerChoice === "Scissors") {
            console.log("Computer won the round, Scissors beats Paper");
            computerScore++;
        } else if (humanChoice === "Paper" && computerChoice === "Rock"){
            console.log("Easy win for you, Paper beats Rock");
            humanScore++;
        } else if (humanChoice === "Rock" && computerChoice === "Scissors"){
            console.log("Easy win for you, Rock beats Scissors");
            humanScore++;
        } else if (humanChoice === "Rock" && computerChoice === "Paper"){
            console.log("Computer won the round, Paper beats Rock");
            computerScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper"){
            console.log("Easy win, Scissors beats Paper");
            humanScore++;
        } else if (humanChoice === "Scissors" && computerChoice === "Rock"){
            console.log("Computer won the round, Rock beats Scissors");
            computerScore++;
        }else {
            console.log("It's a tie round, when you have two similar hand signals!!");
        }
    }    
    for (let i = 0; i < 5; i++) {  // Exactly 5 rounds
        const humanSelection= getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i+1} - Human: ${humanScore}, Computer: ${computerScore}`);
    }
}
playGame();
