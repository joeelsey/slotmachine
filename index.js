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
  this.rewardMarker = false;
};

SlotMachine.prototype.Turn = function() {
  console.log('this', this);
  //document.getElementById('message').innerHTML = '<div></div>';

  for (var i = 1; i <= 9; i++) {
    this.wheel[i].number = i;
    this.wheel[i].types = this.types[Math.floor(Math.random() * this.types.length)];
    document.getElementById('wheel' + i).innerHTML = this.wheel[i].types;
  }

  //reward generator.
  this.reward = function() {
    this.wheelColumnOne();
    this.wheelColumnTwo();
    this.wheelColumnThree();

    if (this.rewardMarker === false) {
      this.loseMoney();
    } else {
      this.rewardMarker = false;
    }

    if (this.wheelOne === false && this.wheelTwo === false && this.wheelThree === false) {
      document.getElementById('message').innerHTML = '<div>No Winner.</div>';
    }
  };

  this.wheelColumnOne = function() {
    this.wheelOne = false;

    if (this.wheel[1].types === this.wheel[2].types && this.wheel[1].types === this.wheel[3].types) {
      this.rewardMarker = true;
      this.wheelOne = true;
      this.addMoney();
      console.log('wheel column one type', this.wheel[1].types);
      this.winnerMessage(this.wheel[1].types);
    }
  };

  this.wheelColumnTwo = function() {
    this.wheelTwo = false;

    if (this.wheel[4].types === this.wheel[5].types && this.wheel[4].types === this.wheel[6].types) {
      this.rewardMarker = true;
      this.wheelTwo = true;
      this.addMoney();
      console.log('wheel column two type', this.wheel[4].types);
      this.winnerMessage(this.wheel[4].types);
    }
  };

  this.wheelColumnThree = function() {
    this.wheelThree = false;

    if (this.wheel[7].types === this.wheel[8].types && this.wheel[7].types === this.wheel[9].types) {
      this.rewardMarker = true;
      this.wheelThree = true;
      this.addMoney();
      console.log('wheel column three type', this.wheel[7].types);
      this.winnerMessage(this.wheel[7].types);
    }
  };

  //message based on the matches.
  this.winnerMessage = function(wheel) {
    switch (wheel) {
      case 'Apple':
        console.log('Apples.  You win 1 dollar');
        document.getElementById('message').innerHTML += '<div>Apples.  You win 1 dollar</div>';
        break;
      case 'Cherry':
        console.log('Cherries. You win 3 dollars');
        document.getElementById('message').innerHTML += '<div>Cherries.  You win 3 dollars</div>';
        break;
      case 'Orange':
        console.log('Oranges. You win 5 dollars');
        document.getElementById('message').innerHTML += '<div>Oranges.  You win 5 dollars</div>';
        break;
      case 'Bell':
        console.log('Bells. You win 8 dollars');
        document.getElementById('message').innerHTML += '<div>Bells.  You win 8 dollars</div>';
        break;
      case '$':
        console.log('Dollars.  You win 16 dollars');
        document.getElementById('message').innerHTML += '<div>Dollars.  You win 16 dollars</div>';
        break;
      case 'Jackpot':
        console.log('Jackpot!  You win the jackpot!');
        document.getElementById('message').innerHTML += '<div>Jackpot.  You win the jackpot</div>';
        break;
      default:
        console.log('Error.');
        break;
    }
  };

  this.addMoney = function() {
    if (this.wheel[1].types === 'Apple' && this.wheelOne === true ||
        this.wheel[4].types === 'Apple' && this.wheelTwo === true ||
        this.wheel[7].types === 'Apple' && this.wheelThree === true ) {
      this.money += 1;
    }
    if (this.wheel[1].types === 'Cherry' && this.wheelOne === true ||
        this.wheel[4].types === 'Cherry' && this.wheelTwo === true ||
        this.wheel[7].types === 'Cherry' && this.wheelThree === true) {
      this.money += 3;
    }
    if (this.wheel[1].types === 'Orange' && this.wheelOne === true ||
        this.wheel[4].types === 'Orange' && this.wheelTwo === true ||
        this.wheel[7].types === 'Orange' && this.wheelThree === true) {
      this.money += 5;
    }
    if (this.wheel[1].types === 'Bell' && this.wheelOne === true ||
        this.wheel[4].types === 'Bell' && this.wheelTwo === true ||
        this.wheel[7].types === 'Bell' && this.wheelThree === true) {
      this.money += 8;
    }
    if (this.wheel[1].types === '$' && this.wheelOne === true ||
        this.wheel[4].types === '$' && this.wheelTwo === true ||
        this.wheel[7].types === '$' && this.wheelThree === true) {
      this.money += 16;
    }
    if (this.wheel[1].types === 'Jackpot' && this.wheelOne === true ||
        this.wheel[4].types === 'Jackpot' && this.wheelTwo === true ||
        this.wheel[7].types === 'Jackpot' && this.wheelThree === true) {
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
  document.getElementById('money').innerHTML = this.money;
};

var pennyslot = new SlotMachine();
pennyslot.Turn();
