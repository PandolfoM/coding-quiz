var questions = [
  {
    q: "Commonly used data types DO Not Include:",
    a: "1. strings",
    b: "2. booleans",
    c: "3. alerts",
    d: "4. numbers",
    answer: "a",
  },
  {
    q: "The condition in an if / else statement is enclosed with ______.",
    a: "1. quotes",
    b: "2. curly brackets",
    c: "3. parenthesis",
    d: "4. square brackets",
    answer: "c",
  },
  {
    q: "Arrays in JavaScript can be used to store ______.",
    a: "1. numbers and strings",
    b: "2. other arrays",
    c: "3. booleans",
    d: "4. all of the above",
    answer: "d",
  },
  {
    q: "String values must be enclosed within _____ when being assigned to variables.",
    a: "commas",
    b: "curly brackets",
    c: "quotes",
    d: "parenthesis",
    answer: "c",
  },
  {
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: "JavaScript",
    b: "terminal/bash",
    c: "for loops",
    d: "console.log",
    answer: "d",
  },
];

let timeLeft = 75;
let currentQuestion = 0;
let score = 0;
var timerEl = document.querySelector("span");
var quizArea = document.querySelector("#quiz-area");

function welcomeScreen() {
  // Create Header
  var welcomeHeaderEl = document.createElement("h1");
  welcomeHeaderEl.textContent = "Coding Quiz Challenge";
  welcomeHeaderEl.className = "welcomeHeader";
  welcomeHeaderEl.id = "quizHeader";
  // Append Header
  quizArea.appendChild(welcomeHeaderEl);

  // Create Quiz Description
  var welcomePEl = document.createElement("p");
  welcomePEl.textContent =
    "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
  welcomePEl.className = "welcomeP";
  welcomePEl.id = "quizDesc";
  // Append quiz desc
  quizArea.appendChild(welcomePEl);

  // Create Button
  var welcomeButton = document.createElement("button");
  welcomeButton.textContent = "Start Quiz";
  welcomeButton.id = "startBtn";
  welcomeButton.className = "btn start-btn";
  // Append button
  quizArea.appendChild(welcomeButton);

  welcomeButton.addEventListener("click", function () {
    // Remove Paragraph
    welcomePEl.remove();
    // Remove Button
    welcomeButton.remove();

    startQuiz();
    timer();
  });
}

function timer() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      timerEl.textContent = "0";
      quizEnd();
    }
  }, 1000);
}
function startQuiz() {
  // Show first question
  var questionsHeader = document.querySelector("#quizHeader");
  questionsHeader.textContent = questions[currentQuestion].q;
  questionsHeader.className = "welcomeHeader textLeft";
  // create list
  var answerlist = document.createElement("li");
  answerlist.id = "answerList";
  quizArea.appendChild(answerlist);
  // Answer 1
  var answer1Btn = document.createElement("button");
  answer1Btn.textContent = questions[currentQuestion].a;
  answer1Btn.id = "a";
  answer1Btn.className = "btn qAnswers";
  answerlist.appendChild(answer1Btn);
  // Answer 2
  var answer2Btn = document.createElement("button");
  answer2Btn.textContent = questions[currentQuestion].b;
  answer2Btn.id = "b";
  answer2Btn.className = "btn qAnswers";
  answerlist.appendChild(answer2Btn);
  // Answer 3
  var answer3Btn = document.createElement("button");
  answer3Btn.textContent = questions[currentQuestion].c;
  answer3Btn.id = "c";
  answer3Btn.className = "btn qAnswers";
  answerlist.appendChild(answer3Btn);
  // Answer 4
  var answer4Btn = document.createElement("button");
  answer4Btn.textContent = questions[currentQuestion].d;
  answer4Btn.id = "d";
  answer4Btn.className = "btn qAnswers";
  answerlist.appendChild(answer4Btn);
  // register clicks for buttons
  document.querySelectorAll(".qAnswers").forEach(function (el) {
    el.addEventListener("click", function () {
      if (
        (questions[currentQuestion].q === questions[0].q && this.id === "a") ||
        (questions[currentQuestion].q === questions[1].q && this.id === "c") ||
        (questions[currentQuestion].q === questions[2].q && this.id === "d") ||
        (questions[currentQuestion].q === questions[3].q && this.id === "c") ||
        (questions[currentQuestion].q === questions[4].q && this.id === "d")
      ) {
        // Correct Answer
        score += 3;
        var correctLine = document.querySelector(".yes-no");
        correctLine.style.opacity = "1";
        correctLine.innerHTML = "<p class='yes-no-color'>Correct!</p>";
        setTimeout(function() {
          correctLine.style.opacity = "0";
        }, 500);
        advanceQuestion();
      } else {
        // Wrong Answer
        var wrongLine = document.querySelector(".yes-no");
        wrongLine.style.opacity = "1";
        wrongLine.innerHTML = "<p class='yes-no-color'>Wrong!</p>";
        setTimeout(function() {
          wrongLine.style.opacity = "0";
        }, 500);
        timeLeft -= 10;
        advanceQuestion();
      }
    });
  });
}

function quizEnd() {
  document.querySelector("#answerList").remove();
  document.querySelector("#yes-no").remove();
  var allDoneEl = document.querySelector("#quizHeader");
  allDoneEl.textContent = "All done!";

  var finalScore = document.createElement("p");
  finalScore.className = "textLeft";
  finalScore.textContent = "Your final score is " + score;
  quizArea.appendChild(finalScore);

  var initialInputForm = document.createElement("form");
  initialInputForm.className = "textLeft padding";
  initialInputForm.innerHTML =
    "<label for='initial'>Enter Initials: </label><input type='text' id='initialInput'></input><input class='submit-btn' id='submit-btn' type='submit' value='Submit'></input>";
  quizArea.appendChild(initialInputForm);

  var initialBtnEl = document.querySelector("#submit-btn");
  initialBtnEl.addEventListener("click", function (event) {
    event.preventDefault();

    var inital = document.querySelector("#initialInput").value;
    
    if (inital === "") {
      window.location.href = "../../highscores.html";
    } else {
      getHighScores();
    }
  });
}

function getHighScores() {
  var prevHS = JSON.parse(localStorage.getItem('allHSEntries'));
  if (prevHS === null) prevHS = [];
  var hsInitial = document.querySelector("#initialInput").value;
  var highScores = {
    'inital': hsInitial,
    'score': score
  };
  localStorage.setItem('highScores', JSON.stringify(highScores));
  prevHS.push(highScores);
  localStorage.setItem('allHSEntries', JSON.stringify(prevHS));
  window.location.href = "../../highscores.html";
}

function advanceQuestion() {
  if (currentQuestion + 1 >= questions.length) {
    // End of array
    timeLeft = 0;
    quizEnd();
    

  } else {
    // Continue to next question in array
    currentQuestion++;
    document.querySelector("#quizHeader").textContent = questions[currentQuestion].q;
    document.querySelector("#a").textContent = questions[currentQuestion].a;
    document.querySelector("#b").textContent = questions[currentQuestion].b;
    document.querySelector("#c").textContent = questions[currentQuestion].c;
    document.querySelector("#d").textContent = questions[currentQuestion].d;
  }
}

welcomeScreen();
