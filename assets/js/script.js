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
    // Show first question
    var questionsHeader = document.querySelector('#quizHeader');
    questionsHeader.textContent = questions[currentQuestion].q;
    questionsHeader.className = "welcomeHeader textLeft";
    // create list
    var answerlist = document.createElement('li');
    answerlist.id = "answerList";
    quizArea.appendChild(answerlist);
      // Answer 1
      var answer1Btn = document.createElement('button');
      answer1Btn.textContent = questions[currentQuestion].a;
      answer1Btn.id = 'a';
      answer1Btn.className = ("btn qAnswers");
      answerlist.appendChild(answer1Btn);
      // Answer 2
      var answer2Btn = document.createElement('button');
      answer2Btn.textContent = questions[currentQuestion].b;
      answer2Btn.id = 'b';
      answer2Btn.className = ("btn qAnswers");
      answerlist.appendChild(answer2Btn);
      // Answer 3
      var answer3Btn = document.createElement('button');
      answer3Btn.textContent = questions[currentQuestion].c;
      answer3Btn.id = 'c';
      answer3Btn.className = ("btn qAnswers");
      answerlist.appendChild(answer3Btn);
      // Answer 4
      var answer4Btn = document.createElement('button');
      answer4Btn.textContent = questions[currentQuestion].d;
      answer4Btn.id = 'd';
      answer4Btn.className = ("btn qAnswers");
      answerlist.appendChild(answer4Btn);

      document.querySelectorAll('.qAnswers').forEach(function(el){
        el.addEventListener('click', function() {
          // alert('id: ' + this.id);
          if (questions[currentQuestion].q === questions[0].q && this.id === 'a' || questions[currentQuestion].q === questions[1].q && this.id === 'b' || questions[currentQuestion].q === questions[2].q && this.id === 'c' || questions[currentQuestion].q === questions[3].q && this.id === 'd' || questions[currentQuestion].q === questions[4].q && this.id === 'a') {
            console.log('correct');
            advanceQuestion();
          }
          else {
            console.log('wrong');
            advanceQuestion();
          }
        });
      });
  }

  function quizEnd() {
    document.querySelector('#answerList').remove();
    document.querySelector('#quizHeader').textContent = "All done!"
  }

  function advanceQuestion() {
    if ((currentQuestion + 1) >= questions.length) {
      // End of array
      quizEnd();
    } else {
      currentQuestion++;
      var questionsHeader = document.querySelector('#quizHeader');
      questionsHeader.textContent = questions[currentQuestion].q;
      console.log(questions[currentQuestion]);
    }
  }

welcomeScreen();