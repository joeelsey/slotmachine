//'use strict';

var SlotMachine = function() {
  this.arr = ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Cherry', 'Cherry', 'Cherry', 'Cherry',
   'Orange', 'Orange', 'Orange', 'Bell', 'Bell', 'Bell', '$', '$', 'Jackpot'];
  this.money = 100;
  document.getElementById('money').innerHTML = this.money;

};

SlotMachine.prototype.Turn = function() {

   //The first row of the slot machine.
  this.wheel1 = this.arr[Math.floor(Math.random() * this.arr.length)];
  document.getElementById('wheel1').innerHTML = this.wheel1;
  this.wheel2 = this.arr[Math.floor(Math.random() * this.arr.length)];
  document.getElementById('wheel2').innerHTML = this.wheel2;
  this.wheel3 = this.arr[Math.floor(Math.random() * this.arr.length)];
  document.getElementById('wheel3').innerHTML = this.wheel3;

  //The second row of the slot machine.
  this.wheel4 = this.arr[Math.floor(Math.random() * this.arr.length)];
  document.getElementById('wheel4').innerHTML = this.wheel4;
  this.wheel5 = this.arr[Math.floor(Math.random() * this.arr.length)];
  document.getElementById('wheel5').innerHTML = this.wheel5;
  this.wheel6 = this.arr[Math.floor(Math.random() * this.arr.length)];
  document.getElementById('wheel6').innerHTML = this.wheel6;

  //The third row of the slot machine.
  this.wheel7 = this.arr[Math.floor(Math.random() * this.arr.length)];
  document.getElementById('wheel7').innerHTML = this.wheel7;
  this.wheel8 = this.arr[Math.floor(Math.random() * this.arr.length)];
  document.getElementById('wheel8').innerHTML = this.wheel8;
  this.wheel9 = this.arr[Math.floor(Math.random() * this.arr.length)];
  document.getElementById('wheel9').innerHTML = this.wheel9;

  //reward generator.
  this.reward = function() {
    if (this.wheel1 === this.wheel2 && this.wheel1 === this.wheel3) {
      this.addMoney();
      switch (this.wheel1) {
        case 'Apple':
          console.log('Apples.  You win 1 dollar');
          document.getElementById('message').innerHTML = '<div>Apples.  You win 1 dollar</div>';
          break;
        case 'Cherry':
          console.log('Cherries. You win 3 dollars');
          document.getElementById('message').innerHTML = '<div>Cherries.  You win 3 dollars</div>';
          break;
        case 'Orange':
          console.log('Oranges. You win 5 dollars');
          document.getElementById('message').innerHTML = '<div>Oranges.  You win 5 dollars</div>';
          break;
        case 'Bell':
          console.log('Bells. You win 8 dollars');
          document.getElementById('message').innerHTML = '<div>Bells.  You win 8 dollars</div>';
          break;
        case '$':
          console.log('Dollars.  You win 16 dollars');
          document.getElementById('message').innerHTML = '<div>Dollars.  You win 16 dollars</div>';
          break;
        case 'Jackpot':
          console.log('Jackpot!  You win the jackpot!');
          document.getElementById('message').innerHTML = '<div>Jackpot.  You win the jackpot</div>';
          break;
        default:
          console.log('Error.');
          break;
      }
    } else {
      document.getElementById('message').innerHTML = '<div>No Winner.</div>';
      console.log('No winner.');
      this.loseMoney();
    }
  };

  this.addMoney = function() {
      if (this.wheel1 === 'Apple') {return this.money += 1;}
      if (this.wheel1 === 'Cherry') {return this.money += 3;}
      if (this.wheel1 === 'Orange') {return this.money += 5;}
      if (this.wheel1 === 'Bell') {return this.money += 8;}
      if (this.wheel1 === '$') {return this.money += 16;}
      if (this.wheel1 === 'Jackpot') {return this.money += 100;}
  };

  this.loseMoney = function() {
    console.log(this.money);
    if(this.money === 0) {return document.getElementById('message').innerHTML = '<div>The House Always Wins</div>';}
    return this.money -= 1;
  }

  this.reward();
  console.log(this.wheel1, this.wheel2, this.wheel3);
  document.getElementById('money').innerHTML = this.money;
};

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

var pennyslot = new SlotMachine();
pennyslot.Turn();
