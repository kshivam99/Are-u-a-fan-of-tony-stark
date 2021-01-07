var readlineSync = require("readline-sync");
const chalk = require('chalk');
 
var score = 0;

// data of high score
var highScores = [
  {
    name: "Shivam",
    score: 10,
  },

  {
    name: "Tony",
    score: 10,
  },
  ,

  {
    name: "Pepper",
    score: 9,
  }
]

// array of objects
var questions = [{
  question: "What does Harley Call Tony In 'Iron Man 3'?",
  answer: "The Mechanic"
}, {
  question: "What does Stark Drink In 'Iron Man 2'?",
  answer: "Chlorophyll"
},
{
  question: "When does Robert Downey Jr. First Appear As Tony Stark?",
  answer: "The Incredible Hulk"
},
{
  question: "What year did the first Iron Man movie come out?",
  answer: "2008"
},
{
  question: "Whom does Iron Man faces in the Civil War?",
  answer: "Captain America"
},
{
  question: "What is the name of Tony Stark's love interest?",
  answer: "pepper potts"
},
{
  question: "What is Pepper Potts' superhero name?",
  answer: "Rescue"
},

{
  question: "Who was the villain of Iron Man 3?",
  answer: "The Mandarin"
},

{
  question: "Which college did Tony Stark go to?",
  answer: "MIT"
},

{
  question: "What is Pepper allergic to?",
  answer: "Strawberries"
},
];

function welcome() {
 var userName = readlineSync.question(chalk.red("Hey Champ, What's your name? "));

  console.log("Welcome "+ userName + " TO ULTIMATE IRON MAN'S QUIZ? Only A True Fan Will Pass This Iron Man Quiz");
  console.log("-----------------------");
  console.log("So, here we go ->");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.bgRed(question));

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
    console.log(chalk.bgGreen.black("Correct Answer is " + answer));
    score--;
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("You SCORED: ", score);

  console.log("These are the High Scores:")
  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


