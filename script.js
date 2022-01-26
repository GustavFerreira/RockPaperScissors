var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerChoice(){
  var choices = ['r','p','s'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " +  convertToWord(computerChoice) + ". You win!";
}
function lose(userChoice, computerChoice){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = convertToWord(computerChoice) + " loses to  " +  convertToWord(userChoice) + ". You lose!";
}
function draw(userChoice, computerChoice){
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = convertToWord(computerChoice) + " equals  " +  convertToWord(userChoice) + ". Its a draw!";
}


function game(userChoice){
  var computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

