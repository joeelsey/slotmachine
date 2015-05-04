var Slotmachine = {
  FRUIT: ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Cherry', 'Cherry', 'Cherry', 'Cherry',
    'Orange', 'Orange', 'Orange', 'Bells', 'Bells', 'Bells', '$$$$$', '$$$$$', 'Jackpot'],

  wheels: [],

  winnerBracket: [], //pushes the bracket that won into this array.  I feel like I'm going to need this in the future.

  bank: 300,

  bets: 0,

  //main method.  passes a number of bets. minimum of three.
  turn: function() {
    this.numberOfBets(3);
    console.log('this bets', this.bets);
  },

  //takes the number of bets and passes that to createWheels, countAcrossRows, and adds to global bets
  numberOfBets: function(bets) {
    this.createWheels(bets);
    this.countAcrossRows(bets);
    this.bets += bets;
    this.bank -= bets;
  },

  //passes the number of wheels to create column and calls the function three times.
  createWheels: function(numberOfWheels) {
    for(var i = 0; i < 3; i++) {
      this.createColumn(numberOfWheels);
    }
  },

  //creates a random fruit type
  createColumn: function(wheels) {
    for(var i = 0; i < wheels; i++) {
      this.wheels.push({number: this.wheels.length + 1, fruit: this.FRUIT[Math.floor(Math.random() * this.FRUIT.length)]});
    }
  },

  //creates a row of fruit types by three
  countAcrossRows: function(rowNumber) {
    var slotNumbersArray = [];
    for(var i = 0, j = 0, k = 3, l = 6; i < rowNumber; i++) {
      j++;
      k++;
      l++;

      slotNumbersArray.push({slotNumberOne: this.wheels[j - 1].fruit,
                             slotNumberTwo: this.wheels[k - 1].fruit,
                             slotNumberThree: this.wheels[l - 1].fruit});
    }
    this.winnerValidation(slotNumbersArray);
    this.setWheelsToElement(slotNumbersArray);
  },

  //checks each row to see if there are matching fruit types.
  winnerValidation: function(slotNumbers) {
    var winnerFruit = [];
    console.log('slotnumbers: ', slotNumbers);
    for (var i = 0; i < slotNumbers.length; i++) {
      console.log('Slotmachine: ',slotNumbers[i].slotNumberOne, slotNumbers[i].slotNumberTwo, slotNumbers[i].slotNumberThree);
      if (slotNumbers[i].slotNumberOne === slotNumbers[i].slotNumberTwo &&
         slotNumbers[i].slotNumberOne === slotNumbers[i].slotNumberThree) {
           winnerFruit.push(slotNumbers[i].slotNumberOne);
           this.winnerBracket.push({slotNumbers: i + 1});
         }
    }
    this.winnerMessage(winnerFruit);
    this.wheels = [];

  },

  winnerMessage: function(wheel) {
    var winnerMessage = [];
    for (var i = 0; i < wheel.length; i++) {
      switch (wheel[i]) {
        case 'Apple':
          this.winnerReward('Apple');
          winnerMessage.push('Apples.  You win ' + (1 * this.bets) + ' dollars. ');
          break;
        case 'Cherry':
          this.winnerReward('Cherry');
          winnerMessage.push('Cherries. You win ' + ( 3 * this.bets) + ' dollars. ');
          break;
        case 'Orange':
          this.winnerReward('Orange');
          winnerMessage.push('Oranges. You win ' + (5 * this.bets) + ' dollars. ');
          break;
        case 'Bells':
          this.winnerReward('Bells');
          winnerMessage.push('Bells. You win ' + (8 * this.bets) + ' dollars. ');
          break;
        case '$':
          this.winnerReward('$$$$$');
          winnerMessage.push('Dollars.  You win ' + (16 * this.bets) + ' dollars. ');
          break;
        case 'Jackpot':
          this.winnerReward('Jackpot');
          winnerMessage.push('Jackpot!  You win the jackpot! ' + (100 * this.bets) + ' dollars!');
          break;
        default:
          console.log('Error.', wheel);
          break;
      }
    }

    if (winnerMessage.length) {
      document.getElementById('message').innerHTML = '';
      for (var j = 0; j < winnerMessage.length; j++) {
        console.log(winnerMessage[j]);
        document.getElementById('message').innerHTML += winnerMessage[j];
      }
    } else {
      console.log('No winners this time.');
      document.getElementById('message').innerHTML = '';
      this.loserMessage();
    }
  },

  winnerReward: function(fruit) {
    switch (fruit) {
      case 'Apple':
        this.bank += this.bets * 1;
        break;
      case 'Cherry':
        this.bank += this.bets * 3;
        break;
      case 'Orange':
        this.bank += this.bets * 5;
        break;
      case 'Bells':
        this.bank += this.bets * 8;
        break;
      case '$':
        this.bank += this.bets * 16;
        break;
      case 'Jackpot':
        this.bank += this.bets * 100;
        break;
      default:
        console.log('there was an error in the winner reward switch');
        break;
    }
    console.log('this bank winner', this.bank, fruit);
  },

  loserMessage: function() {
    var loserMessage = 'no winner';
    console.log(loserMessage);
    document.getElementById('message').innerHTML = loserMessage;
    if(this.bank === 0) {
      console.log('The House always wins.');
      document.getElementById('message').innerHTML += loserMessage;
    }
  },

  //pushes data to dom.  Currently limited to 3 wheels and the bank.
  setWheelsToElement: function(wheels) {
    document.getElementById('wheel1').innerHTML = '';
    document.getElementById('wheel2').innerHTML = '';
    document.getElementById('wheel3').innerHTML = '';
    wheels.map(function(wheel, index) {
      document.getElementById('wheel1').innerHTML += wheel.slotNumberOne +  ' ';
      document.getElementById('wheel2').innerHTML += wheel.slotNumberTwo +  ' ';
      document.getElementById('wheel3').innerHTML += wheel.slotNumberThree +  ' ';
    });
    document.getElementById('bank').innerHTML = this.bank;
    this.bets = 0;
  }

};

Slotmachine.turn();
