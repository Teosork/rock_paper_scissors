    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3);
     if (randomNumber < 1) {
        return "Rock";
     } else if (randomNumber > 1) {
        return "Scissors";
     } else {
        return "Paper";
     }
    }

    let humanScore = 0;
    let computerScore = 0;

    function getHumanChoice() {
        let sign = prompt("Choose your Hand Signal: ");
        return sign.toLowerCase().charAt(0).toUpperCase() + sign.toLowerCase().slice(1);
    }

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase().charAt(0).toUpperCase() + humanChoice.toLowerCase().slice(1);
        computerChoice = computerChoice.toLowerCase().charAt(0).toUpperCase() + computerChoice.toLowerCase().slice(1);
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
        return {humanScore, computerScore};
    }    
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');

    rockButton.addEventListener('click', function (event) {
        const humanChoice = event.target.textContent;
        const computerChoice = getComputerChoice();

        const scores = playRound(humanChoice, computerChoice);

        document.querySelector('#human-choice').textContent =
            `You chose: ${humanChoice}`;
        document.querySelector('#computer-choice').textContent =
            `Computer chose: ${computerChoice}`;
        document.querySelector('#scores').textContent =
            `Human: ${scores.humanScore} | Computer: ${scores.computerScore}`;
    });

    paperButton.addEventListener('click', function(event){
        const humanChoice = event.target.textContent;
        const computerChoice = getComputerChoice();

        const scores = playRound(humanChoice, computerChoice);

        document.querySelector('#human-choice').textContent =
            `You chose: ${humanChoice}`;
        document.querySelector('#computer-choice').textContent =
            `Computer chose: ${computerChoice}`;
        document.querySelector('#scores').textContent =
            `Human: ${scores.humanScore} | Computer: ${scores.computerScore}`;
    });
    scissorsButton.addEventListener('click', function(event){
        const humanChoice = event.target.textContent;
        const computerChoice = getComputerChoice();

        const scores = playRound(humanChoice, computerChoice);

        document.querySelector('#human-choice').textContent =
            `You chose: ${humanChoice}`;
        document.querySelector('#computer-choice').textContent =
            `Computer chose: ${computerChoice}`;
        document.querySelector('#scores').textContent =
            `Human: ${scores.humanScore} | Computer: ${scores.computerScore}`;
    });
    const resetButton = document.querySelector('#reset');

    resetButton.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        document.querySelector('#scores').textContent = 'Human: 0 | Computer: 0';
        document.querySelector('#human-choice').textContent = '';
        document.querySelector('#computer-choice').textContent = '';
    });