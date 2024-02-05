function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  switch (computerChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `This round is a tie! You both drew ${computerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You win this round as ${playerSelection} beats ${computerSelection}.`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return `Computer wins this round as ${computerSelection} beats ${playerSelection}.`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playersChoice = prompt("Enter your choice: ");
    let computersChoice = getComputerChoice();
    console.log(playRound(playersChoice, computersChoice));
  }
}

playGame();
