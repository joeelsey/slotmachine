var Slotmachine = {
  types: ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Cherry', 'Cherry', 'Cherry', 'Cherry',
    'Orange', 'Orange', 'Orange', 'Bell', 'Bell', 'Bell', '$', '$', 'Jackpot'],
  wheel: [
    {number: null},
    {number: 1, types: '', column: {number: 1, winner: false}}, {number: 2, types: '', column: {number: 1, winner: false}},
    {number: 3, types: '', column: {number: 1, winner: false}}, {number: 4, types: '', column: {number: 2, winner: false}},
    {number: 5, types: '', column: {number: 2, winner: false}}, {number: 6, types: '', column: {number: 2, winner: false}},
    {number: 7, types: '', column: {number: 3, winner: false}}, {number: 8, types: '', column: {number: 3, winner: false}},
    {number: 9, types: '', column: {number: 3, winner: false}}
  ],
  money: 100,  //would love to make this user input at some point.  I.e. 'putting money in the machine'.

  //should display the money.  untested
  moneyDisplay: function() {
    document.getElementById('money').innerHTML = this.money;
  }(),

  //calls spinColumns three times.  Once for each column.
  turn: function() {
    this.assignRandomTypes();
    this.spinColumns(3); //this way you could add a column by just adding another number...  Maybe not.
    this.loseMoney(); //you lose money with every spin
  },

  //assigns a random fruit type from the types array to each wheel object
  assignRandomTypes: function() {
    for (var i = 1; i <= 9; i++) {
      this.wheel[i].number = i;
      this.wheel[i].types = this.types[Math.floor(Math.random() * this.types.length)];
      document.getElementById('wheel' + i).innerHTML = this.wheel[i].types;
    }
  },

  //Every three spins the comparison should stop and then another three spins at a higher index should start.
  //This should happen three times.
  spinColumns: function(columnNumber) {
    var columnOneCounter = 0;
    var columnTwoCounter = 3;
    var columnThreeCounter = 6;
    for(var i = 0; i <= columnNumber; i++) {
      console.log('spin wheels counter ', counter);

      columnOneCounter++;
      columnTwoCounter++;
      columnThreeCounter++;

      winnerValidator(columnOneCounter); //if all three of these winner validators fail then lose message should show.
      winnerValidator(columnTwoCounter);
      winnerValidator(columnThreeCounter);

      loseValidator(columnOneCounter);
      loseValidator(columnTwoCounter);
      loseValidator(columnThreeCounter);
    }
  },

  //takes a wheel number and checks for matches of types.  Reward event if match happens.
  winnerValidator: function(wheelNumber) {
    if (this.wheel[wheelNumber].types === this.wheel[wheelNumber + 1].types &&
        this.wheel[wheelNumber].types === this.wheel[wheelNumber + 2].types) {

      this.wheel[wheelNumber].column.winner = true;
      this.winnerMessage(this.wheel[wheelNumber].types);
      this.addMoney();
      console.log('wheel column type', this.wheel[wheelNumber].types);
    }
  },

  //checks to see if the columns are losers.  If they all are then lose money and lose message.  If win remove lose message.
  loseValidator: function(wheelNumber) {
    if (this.wheel[wheelNumber].column.winner === false && this.wheel[wheelNumber + 1].column.winner === false &&
        this.wheel[wheelNumber + 2].column.winner === false) {
      console.log('no winner');
      document.getElementById('message').innerHTML = '<div>No Winner.</div>';
    } else {
      document.getElementById('message').innerHTML = '<div> </div>';
    }
  },

  //this works so no refactor until later but its going to be an object literal soon
  winnerMessage: function(wheel) {
    switch (wheel) {
      case 'Apple':
        console.log('Apples.  You win 1 dollar');
        document.getElementById('winMessage').innerHTML += '<div>Apples.  You win 1 dollar</div>';
        break;
      case 'Cherry':
        console.log('Cherries. You win 3 dollars');
        document.getElementById('winMessage').innerHTML += '<div>Cherries.  You win 3 dollars</div>';
        break;
      case 'Orange':
        console.log('Oranges. You win 5 dollars');
        document.getElementById('winMessage').innerHTML += '<div>Oranges.  You win 5 dollars</div>';
        break;
      case 'Bell':
        console.log('Bells. You win 8 dollars');
        document.getElementById('winMessage').innerHTML += '<div>Bells.  You win 8 dollars</div>';
        break;
      case '$':
        console.log('Dollars.  You win 16 dollars');
        document.getElementById('winMessage').innerHTML += '<div>Dollars.  You win 16 dollars</div>';
        break;
      case 'Jackpot':
        console.log('Jackpot!  You win the jackpot!');
        document.getElementById('winMessage').innerHTML += '<div>Jackpot.  You win the jackpot</div>';
        break;
      default:
        console.log('Error.');
        break;
    }
  },

  addMoney: function() {
    // var yeah = function (t, w) {
    //   if (w.wheel[1].types === t && w.wheelOne === true ||
    //       w.wheel[4].types === t && w.wheelTwo === true ||
    //       w.wheel[7].types === t && w.wheelThree === true ) {
    //         return true;
    //   }
    // }
    //
    // if (yeah('Apple', this)) {
    //   this.money += 1;
    // }
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
  },

  loseMoney: function() {
    console.log(this.money);
    if (this.money === 0) {
      document.getElementById('loseMessage').innerHTML = '<div>The House Always Wins</div>';
    }
    return this.money -= 1;
  }
};
