var displayScore = document.querySelector('#displayScore');
var displayScoreMarker = document.querySelector('#displayScore::marker');

function highscores() {
  var getInitial = localStorage.getItem('Initials');
  var getScore = localStorage.getItem('Score');

  
  if (getInitial === null || getInitial === "") {
    displayScore.textContent = "No high scores";
  } 
  else {
    displayScore.textContent = getInitial + ' - ' + getScore;
  }
}

highscores();