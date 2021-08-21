var scoreList = document.querySelector('#scoreList');

function highscores() {
  var savedHS = localStorage.getItem('allHSEntries');
  if(!savedHS) {
    return false
  }

  savedHS = JSON.parse(savedHS)

  for (let i = 0; i < savedHS.length; i++) {
    console.log(savedHS[i]);
    document.write(savedHS[i].inital + "<br>")
  }
}

highscores();