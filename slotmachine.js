var Slotmachine = {
  FRUIT: ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Cherry', 'Cherry', 'Cherry', 'Cherry',
    'Orange', 'Orange', 'Orange', 'Bell', 'Bell', 'Bell', '$', '$', 'Jackpot'],

  wheels: [],

  winnerBracket: [], //pushes the bracket that won into this array.  I feel like I'm going to need this in the future.

  bank: 100,

  bets: 0,

  //main method.  passes a number of bets. minimum of three.
  turn: function() {
    this.numberOfBets(3);
  },

  //takes the number of bets and passes that to createWheels, countAcrossRows, and adds to global bets
  numberOfBets: function(bets) {
    this.createWheels(bets);
    this.countAcrossRows(bets);
    this.bets += bets;
    this.bank -= bets;

    console.log('Your bet: ',bets, 'Your bank: ', this.bank);
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
  },

  //checks each row to see if there are matching fruit types.
  winnerValidation: function(slotNumbers) {
    var winnerFruit = [];
    console.log('slotnumbers: ', slotNumbers);
    for (var i = 0; i < slotNumbers.length; i++) {
      console.log('Slotmachine: ',slotNumbers[i].slotNumberOne, slotNumbers[i].slotNumberTwo, slotNumbers[i].slotNumberThree);
      if (slotNumbers[i].slotNumberOne === slotNumbers[i].slotNumberTwo &&
         slotNumbers[i].slotNumberOne === slotNumbers[i].slotNumberThree) {
          //  winnerFruit = slotNumbers[i].slotNumberOne;
           winnerFruit.push(slotNumbers[i].slotNumberOne);
           this.winnerBracket.push({slotNumbers: i + 1});
         }
    }
    this.winnerMessage(winnerFruit);
    //console.log('winner bracket', this.winnerBracket);
  },

  winnerMessage: function(wheel) {
    var winnerMessage = [];
    for (var i = 0; i < wheel.length; i++) {
      switch (wheel[i]) {
        case 'Apple':
          this.winnerReward('Apple');
          winnerMessage.push('Apples.  You win 1 dollar. ');
          break;
        case 'Cherry':
          this.winnerReward('Cherry');
          winnerMessage.push('Cherries. You win 3 dollars. ');
          break;
        case 'Orange':
          this.winnerReward('Orange');
          winnerMessage.push('Oranges. You win 5 dollars. ');
          break;
        case 'Bell':
          this.winnerReward('Bell');
          winnerMessage.push('Bells. You win 8 dollars. ');
          break;
        case '$':
          this.winnerReward('$');
          winnerMessage.push('Dollars.  You win 16 dollars. ');
          break;
        case 'Jackpot':
          this.winnerReward('Jackpot');
          winnerMessage.push('Jackpot!  You win the jackpot! ');
          break;
        case 'lose':
          this.loserMessage();
          break;
        default:
          console.log('Error.', wheel);
          break;
      }
    }

    if (winnerMessage.length) {
      for (var j = 0; j < winnerMessage.length; j++) {
        console.log(winnerMessage[j]);
      }
    } else {
      console.log('No winners this time.');
    }
  },

  winnerReward: function(fruit) {
    this.bank += this.bets;
    switch (fruit) {
      case 'Apple':
        this.bank += 1;
        break;
      case 'Cherry':
        this.bank += 3;
        break;
      case 'Orange':
        this.bank += 5;
        break;
      case 'Bell':
        this.bank += 8;
        break;
      case '$':
        this.bank += 16;
        break;
      case 'Jackpot':
        this.bank += 100;
        break;
      default:
        console.log('there was an error in the winner reward switch');
        break;
    }
    console.log('this bank winner', this.bank, fruit);
  },

  loserMessage: function() {
    var loserMessage = 'no winner';
    if(this.winnerBracket.length === 0) {
      console.log(loserMessage);
    }
  }

};

Slotmachine.turn();
