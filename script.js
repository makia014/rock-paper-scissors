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

let playerPoints;
let computerPoints;
const field = document.querySelector(".field");
const stats = document.createElement("p");
field.prepend(stats);
const start = document.querySelector(".start");
const divs = document.querySelectorAll("div");
const btns = document.querySelector(".btns");
const choice = document.querySelectorAll(".choice");
const choices = document.querySelector(".choices");
const playerScore = document.querySelector(".you");
const playerSVG = document.querySelector("#playerSVG");
const computerScore = document.querySelector(".computer");
const computerSVG = document.querySelector("#computerSVG");

const winner = document.createElement("h3");
document.body.insertBefore(winner, start);

const addToScreen = (el, string) => {
  el.textContent = string;
};

const addRoundChoice = (svg, selection) => {
  svg.src = `imgs/hand-${selection}-svgrepo-com.svg`
  svg.classList.add("round-choice");
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    addToScreen(
      stats,
      `This round is a tie! You both drew ${playerSelection}.`
    );
    addRoundChoice(playerSVG, playerSelection);
    addRoundChoice(computerSVG, playerSelection);
    
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    addToScreen(
      stats,
      `Computer chose ${computerSelection}, but you chose ${playerSelection}. You win this round!`
    );
    addRoundChoice(playerSVG, playerSelection);
    addRoundChoice(computerSVG, computerSelection);
    
    playerPoints++;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    addToScreen(
      stats,
      `Computer wins this round as it chose ${computerSelection}, which beats your ${playerSelection}.`
    );
    addRoundChoice(playerSVG, playerSelection);
    addRoundChoice(computerSVG, computerSelection);
    
    computerPoints++;
  }
}

const getWinner = () => {
  if (computerPoints == 5 || playerPoints == 5) {
    computerPoints < playerPoints
      ? addToScreen(winner, "The winner is you!")
      : addToScreen(winner, "The winner is computer!");
    winner.classList.add("finish");
    toggleField();
  }
};

function toggleField() {
  divs.forEach((div) => {
    div.classList.toggle("hidden");
  });
  choice.forEach((el) => {
    el.classList.toggle("hidden");
  });
  addToScreen(stats, "");
  computerPoints = 0;
  playerPoints = 0;
  addToScreen(computerScore, computerPoints);
  addToScreen(playerScore, playerPoints);
  computerSVG.classList.remove("round-choice");
  computerSVG.src = "";
  playerSVG.classList.remove("round-choice");
  playerSVG.src = "";
}

start.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  toggleField();
  roundWinner = "";
  addToScreen(winner, roundWinner);
  winner.classList.remove("finish");

  choices.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    if (e.target.classList.contains("choice")) {
      let cC = getComputerChoice();
      let pC = e.target.title;
      playRound(pC, cC);
      addToScreen(computerScore, computerPoints);
      addToScreen(playerScore, playerPoints);
    }
    getWinner();
  });
});
