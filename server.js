//'use strict';

if(!localStorage.getItem('money')) {
  populateStorage();
} else {
  setStorage();
}

function setStorage() {
  var reward = localStorage.getItem('money');

  document.getElementById('money').value = reward;
}

function populateStorage() {
  localStorage.setItem('money', document.getElementById('money').value);

  setStorage();
}


//Work in progress
SlotMachine.prototype.saveMoneyState = function() {
  if (!supportsLocalStorage()) {
    return false;
  }
  localStorage['game.start'] = gameInProgress;
  localStorage['money.addmoney'] = this.money.add;
  localStorage['money.subtractmoney'] = this.money.subtract;
  return true;
};

//Work in progress
SlotMachine.prototype.resumeGame = function() {
  if (!supportsLocalStorage()) {
    return false;
  }
  gameInProgress = (localStorage['game.start'] == 'true');
  if (!gameInProgress) {
    return false;
  }
};
