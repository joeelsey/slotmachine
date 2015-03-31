//'use strict';

var SlotMachine = function() {
  this.types = ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Cherry', 'Cherry', 'Cherry', 'Cherry',
    'Orange', 'Orange', 'Orange', 'Bell', 'Bell', 'Bell', '$', '$', 'Jackpot'
  ];
  this.money = 100;
  document.getElementById('money').innerHTML = this.money;
  this.wheel = [
    {number: null}, {number: 1, types: ''}, {number: 2, types: ''}, {number: 3, types: ''}, {number: 4, types: ''},
    {number: 5, types: ''}, {number: 6, types: ''}, {number: 7, types: ''}, {number: 8, types: ''}, {number: 9, types: ''}
  ];
};

SlotMachine.prototype.Turn = function() {
  console.log('this', this);
  
  for (var i = 1; i <= 9; i++) {
    this.wheel[i].number = i;
    this.wheel[i].types = this.types[Math.floor(Math.random() * this.types.length)];
    document.getElementById('wheel' + i).innerHTML = this.wheel[i].types;
  }

  //reward generator.
  this.reward = function() {

    var rewardMarker = false;
    this.wheelOne = false;
    this.wheelTwo = false;
    this.wheelThree = false;

    if (this.wheel1 === this.wheel2 && this.wheel1 === this.wheel3) {
      rewardMarker = true;
      this.wheelOne = true;
      this.addMoney();
      this.winnerMessage(this.wheel1);
    }

    if (this.wheel4 === this.wheel5 && this.wheel4 === this.wheel6) {
      rewardMarker = true;
      this.wheelTwo = true;
      this.addMoney();
      this.winnerMessage(this.wheel4);
    }

    if (this.wheel7 === this.wheel8 && this.wheel7 === this.wheel9) {
      rewardMarker = true;
      this.wheelThree = true;
      this.addMoney();
      this.winnerMessage(this.wheel7);
    }

    if (rewardMarker === false) {
      document.getElementById('message').innerHTML = '<div>No Winner.</div>';
      console.log('No winner.');
      this.loseMoney();
    }
  };

  //message based on the matches.
  this.winnerMessage = function(wheel) {
    switch (wheel) {
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
  };

  this.addMoney = function() {
    if (this.wheel1 === 'Apple' && this.wheelOne === true || this.wheel4 === 'Apple' && this.wheelTwo === true || this.wheel7 === 'Apple' && this.wheelThree === true) {
      this.money += 1;
    }
    if (this.wheel1 === 'Cherry' && this.wheelOne === true || this.wheel4 === 'Cherry' && this.wheelTwo === true || this.wheel7 === 'Cherry' && this.wheelThree === true) {
      this.money += 3;
    }
    if (this.wheel1 === 'Orange' && this.wheelOne === true || this.wheel4 === 'Orange' && this.wheelTwo === true || this.wheel7 === 'Orange' && this.wheelThree === true) {
      this.money += 5;
    }
    if (this.wheel1 === 'Bell' && this.wheelOne === true || this.wheel4 === 'Bell' && this.wheelTwo === true || this.wheel7 === 'Bell' && this.wheelThree === true) {
      this.money += 8;
    }
    if (this.wheel1 === '$' && this.wheelOne === true || this.wheel4 === '$' && this.wheelTwo === true || this.wheel7 === '$' && this.wheelThree === true) {
      this.money += 16;
    }
    if (this.wheel1 === 'Jackpot' && this.wheelOne === true || this.wheel4 === 'Jackpot' && this.wheelTwo === true || this.wheel7 === 'Jackpot' && this.wheelThree === true) {
      this.money += 100;
    }
  };

  this.loseMoney = function() {
    console.log(this.money);
    if (this.money === 0) {
      document.getElementById('message').innerHTML = '<div>The House Always Wins</div>';
    }
    return this.money -= 1;
  };

  this.reward();
  console.log(this.wheel1, this.wheel2, this.wheel3);
  console.log(this.wheel4, this.wheel5, this.wheel6);
  console.log(this.wheel7, this.wheel8, this.wheel9);
  document.getElementById('money').innerHTML = this.money;
};

var pennyslot = new SlotMachine();
pennyslot.Turn();
