var hello 

// function hideWelcome() {
//   var hideWelcome = document.querySelector("#quiz-area").style.display = "none";
// }

var welcomeScreen = function () {
  // Create Header
  var welcomeHeaderEl = document.createElement('h1');
  welcomeHeaderEl.className = ('welcomeHeader');
  var h1Text = document.createTextNode("Coding Quiz Challenge"); 
  // Append Header
  welcomeHeaderEl.appendChild(h1Text);
  var quizArea = document.querySelector('#quiz-area');
  quizArea.appendChild(welcomeHeaderEl);

  // Create Quiz Description
  var welcomePEl = document.createElement('p');
  welcomePEl.className = ('welcomeP');
  var pText = document.createTextNode("Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!")
  // Append quiz desc
  welcomePEl.appendChild(pText); 
  var quizArea = document.querySelector('#quiz-area');
  quizArea.appendChild(welcomePEl);

  // Create Button
  var welcomeButton = document.createElement('button');
  welcomeButton.className = ('welcomeButton');
  var buttonText = document.createTextNode("Start");
  // Append button
  welcomeButton.appendChild(buttonText);
  var quizArea = document.querySelector('#quiz-area');
  quizArea.appendChild(welcomeButton);
}

welcomeScreen();