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
