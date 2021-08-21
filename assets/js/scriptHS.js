var scoreList = document.querySelector('#scoreList');
var clearHS = document.querySelector('#clear-high-score')

function highscores() {
  var savedHS = localStorage.getItem('allHSEntries');
  if(!savedHS) {
    scoreList.textContent = "No high scores."
    return false
  }

  savedHS = JSON.parse(savedHS)

  for (let i = 0; i < savedHS.length; i++) {
    var scoreListLi = document.createElement('li');
    scoreListLi.className = "highScorelist";
    scoreListLi.textContent = (savedHS[i].inital + ' - ' + savedHS[i].score);
    scoreList.appendChild(scoreListLi);
  }
}

clearHS.addEventListener('click', function(){
  // clear all high scores
  localStorage.removeItem('allHSEntries');
  // refresh page
  location.reload();
})

highscores();