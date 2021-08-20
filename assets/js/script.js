  var questions = [
    {
      q: 'Commonly used data types DO Not Include:',
      a: '1. strings', 
      b: '2. booleans',
      c: '3. alerts',
      d: '4. numbers',
      answer: 'a'
    },
    {
      q: 'Question 2',
      a: '1', 
      b: '2',
      c: '3',
      d: '4',
      answer: 'b'
    },
    {
      q: 'Question 3',
      a: '1', 
      b: '2',
      c: '3',
      d: '4',
      answer: 'c'
    },
    {
      q: 'Question 4',
      a: '1', 
      b: '2',
      c: '3',
      d: '4',
      answer: 'd'
    },
    {
      q: 'Question 5',
      a: '1', 
      b: '2',
      c: '3',
      d: '4',
      answer: 'a'
    }
  ]

  let currentQuestion = 0;

  var quizArea = document.querySelector('#quiz-area');

  function welcomeScreen() {
    // Create Header
    var welcomeHeaderEl = document.createElement('h1');
    welcomeHeaderEl.textContent = "Coding Quiz Challenge"; 
    welcomeHeaderEl.className = ('welcomeHeader');
    welcomeHeaderEl.id = "quizHeader"
    // Append Header
    quizArea.appendChild(welcomeHeaderEl);
    
    // Create Quiz Description
    var welcomePEl = document.createElement('p');
    welcomePEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    welcomePEl.className = ('welcomeP');
    welcomePEl.id = "quizDesc"
    // Append quiz desc
    quizArea.appendChild(welcomePEl);
    
    // Create Button
    var welcomeButton = document.createElement('button');
    welcomeButton.textContent = "Start Quiz";
    welcomeButton.id = "startBtn";
    welcomeButton.className = ('btn start-btn');
    // Append button
    quizArea.appendChild(welcomeButton);

    welcomeButton.addEventListener('click', function(){
      // Remove Paragraph
      welcomePEl.remove();
      // Remove Button
      welcomeButton.remove();

      startQuiz();
    });

    
  }
  
  function startQuiz() {
    let counter = 0;
    // Show first question
    var questionsHeader = document.querySelector('#quizHeader');
    questionsHeader.textContent = questions[currentQuestion].q;
    questionsHeader.className = "welcomeHeader textLeft";
    
      // Answer 1
      var answer1Btn = document.createElement('button');
      answer1Btn.textContent = questions[currentQuestion].a;
      answer1Btn.id = `answer${counter}Btn`;
      answer1Btn.className = ("btn qAnswers");
      quizArea.appendChild(answer1Btn);
      console.log(answer1Btn.id)
      // Answer 2
      counter++;
      var answer2Btn = document.createElement('button');
      answer2Btn.textContent = questions[currentQuestion].b;
      answer2Btn.id = `answer${counter}Btn`;
      answer2Btn.className = ("btn qAnswers");
      quizArea.appendChild(answer2Btn);
      console.log(answer2Btn.id)
      // Answer 3
      counter++;
      var answer3Btn = document.createElement('button');
      answer3Btn.textContent = questions[currentQuestion].c;
      answer3Btn.id = `answer${counter}Btn`;
      answer3Btn.className = ("btn qAnswers");
      quizArea.appendChild(answer3Btn);
      console.log(answer3Btn.id)
      // Answer 4
      counter++;
      var answer4Btn = document.createElement('button');
      answer4Btn.textContent = questions[currentQuestion].d;
      answer4Btn.id = `answer${counter}Btn`;
      answer4Btn.className = ("btn qAnswers");
      quizArea.appendChild(answer4Btn);
      console.log(answer4Btn.id)
  }

  function advanceQuestion() {
    if ((currentQuestion + 1) >= questions.length) {
      // End of array
    } else {
      currentQuestion++;
      var questionsHeader = document.querySelector('#quizHeader');
      questionsHeader.textContent = questions[currentQuestion].q;
      console.log(questions[currentQuestion]);
    }
  }

welcomeScreen();