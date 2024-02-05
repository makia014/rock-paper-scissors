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

let roundWinner;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
    return `This round is a tie! You both drew ${computerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    roundWinner = "player";
    return `You win this round as ${playerSelection} beats ${computerSelection}.`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    roundWinner = "computer";
    return `Computer wins this round as ${computerSelection} beats ${playerSelection}.`;
  }
}

function playGame() {
  let playerPoints = 0;
  let computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Enter your choice: ");
    let playersChoice = playerInput.toLowerCase();
    let computersChoice = getComputerChoice();
    console.log(playRound(playersChoice, computersChoice));
    if (roundWinner === "player") {
      playerPoints++;
      console.log(`You get 1 point.`);
    } else if (roundWinner === "computer") {
      computerPoints++;
      console.log(`Computer gets 1 point.`);
    } else {
      console.log("Both you and computer get no points for the round.");
    }
  }
  if (playerPoints >= computerPoints) {
    console.log(
      `You: ${playerPoints}. Computer: ${computerPoints}. You win this game!!!`
    );
  } else {
    console.log(
      `You: ${playerPoints}. Computer: ${computerPoints}. Computer wins this game!!!`
    );
  }
}

playGame();
