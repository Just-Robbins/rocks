let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let choice = Math.random();

    if(choice >= 0.33 && choice <.66) {
        return 'r'; 
    } else if(choice >=.66) {
        return 'p';
    } else {
        return 's';
    }
}

function getHumanChoice () {
    return prompter = prompt('Please choose a value');
}

function playRound (computerChoice, humanChoice) {
    console.log(computerChoice+humanChoice);

    if (humanChoice =='r' && computerChoice =='s') {
        humanScore++;
        console.log('Human win')
    } else if (humanChoice == 'p' && computerChoice == 'r') {
        humanScore++;
        console.log('Human win')
    } else if (humanChoice == 's' && computerChoice == 'p') {
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



for (let i = 0; i < 5; i++ ) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
}
