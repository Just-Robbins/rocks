let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let choice = Math.random();

    if(choice >= 0.33 && choice <.66) {
        return 'rock'; 
    } else if(choice >=.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice () {
    return prompter = prompt('Please choose a value');
}

function playRound (computerChoice, humanChoice) {
    console.log(computerChoice+humanChoice);

    if (humanChoice =='rock' && computerChoice =='scissors') {
        humanScore++;
        console.log('Human win')
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        console.log('Human win')
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        console.log('Human win')
    } else if (humanChoice == computerChoice) {
        console.log('tie')
    } else {
        computerScore++;
        console.log('comp win');
    }
    console.log(humanScore + ' ' + computerScore);
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const humanSelection = button.id;
        playRound(computerSelection, humanSelection);
    });
});