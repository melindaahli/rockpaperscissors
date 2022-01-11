$(".play").click(function () {
  let userChoice = $(".input").val();
  userChoice = userChoice.toLowerCase();
  $(".userChoice").text(userChoice);

  if (userChoice === "rock") {
  } else if (userChoice === "paper") {
  } else if (userChoice === "scissors") {
  } else {
    $(".userChoice").text("Invalid");
    $(".computerChoice").text("Invalid");
  }
  let computerChoice = getRandomComputerChoice();
  let winner;
  if (userChoice === "rock" && computerChoice === "rock") {
    winner = "Draw!";
  }
  if (userChoice === "rock" && computerChoice === "paper") {
    winner = "You Lose!";
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    winner = "You Win!";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    winner = "You Win!";
  }
  if (userChoice === "paper" && computerChoice === "paper") {
    winner = "Draw!";
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    winner = "You Lose!";
  }
  if (userChoice === "sciccors" && computerChoice === "rock") {
    winner = "You Lose!";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    winner = "You Win!";
  }
  if (userChoice === "scissors" && computerChoice === "scissors") {
    winner = "Draw!";
  }
  $(".result").text(winner);
});

function getRandomComputerChoice() {
  let randomNumber = Math.random() * 3;
  randomNumber = Math.ceil(randomNumber);
  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  $(".computerChoice").text(computerChoice);
  return computerChoice;
}
