var Slotmachine = {
  FRUIT: ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Cherry', 'Cherry', 'Cherry', 'Cherry',
    'Orange', 'Orange', 'Orange', 'Bell', 'Bell', 'Bell', '$', '$', 'Jackpot'],

  wheels: [],

  winnerBracket: [],

  bank: 100,

  bets: 0,

  //main method.  passes a number of bets
  turn: function() {
    this.numberOfBets(3);
  },

  //takes the number of bets and passes that to createWheels, countAcrossRows, and adds to global bets
  numberOfBets: function(bets) {
    this.createWheels(3);
    this.countAcrossRows(bets);
    this.bets += bets;
  },

  createWheels: function(numberOfWheels) {
    for(var i = 0; i < 3; i++) {
      this.createColumn(numberOfWheels);
    }
  },

  //creates wheels of fruit types
  createColumn: function(wheels) {
    for(var i = 0; i < wheels; i++) {
      this.wheels.push({number: this.wheels.length + 1, fruit: this.FRUIT[Math.floor(Math.random() * this.FRUIT.length)]});
    }
  },

  countAcrossRows: function(rowNumber) {
    var rowOneCounter = 0;
    var rowTwoCounter = 3;
    var rowThreeCounter = 6;

    var slotNumbersArray = [];
    for(var i = 0; i < rowNumber; i++) {
      rowOneCounter++;
      rowTwoCounter++;
      rowThreeCounter++;

      slotNumbersArray.push({slotNumberOne: this.wheels[rowOneCounter - 1].fruit,
                             slotNumberTwo: this.wheels[rowTwoCounter - 1].fruit,
                             slotNumberThree: this.wheels[rowThreeCounter - 1].fruit});
    }
    console.log('wheels', this.wheels);
    console.log('slot number array', slotNumbersArray);
    this.winnerValidation(slotNumbersArray);
  },

  winnerValidation: function(slotNumbers) {
    for(var i = 0; i < slotNumbers.length; i++) {
      console.log('Slotmachine: ',slotNumbers[i].slotNumberOne, slotNumbers[i].slotNumberTwo, slotNumbers[i].slotNumberThree);
      if(slotNumbers[i].slotNumberOne === slotNumbers[i].slotNumberTwo &&
         slotNumbers[i].slotNumberOne === slotNumbers[i].slotNumberThree) {
           this.winnerMessage(slotNumbers[i].slotNumberOne);
           this.winnerBracket.push({slotNumbers: i});
         }
    }

    return this.winnerBracket;
  },

  winnerReward: function(fruit) {
    this.bank += this.bets;
    console.log('this bank winner', this.bank, fruit);
  },
  //
  // loserReward: function(bets) {
  //   var loserMessage = 'no winner';
  //   this.bank -= this.bets;
  //
  //   if(this.winnerBracket.length === 0) {
  //     console.log(loserMessage);
  //   }
  // },
  //
  winnerMessage: function(wheel) {
    switch (wheel) {
      case 'Apple':
        this.winnerReward('Apple');
        console.log('Apples.  You win 1 dollar');
        break;
      case 'Cherry':
        this.winnerReward('Cherry');
        console.log('Cherries. You win 3 dollars');
        break;
      case 'Orange':
        this.winnerReward('Orange');
        console.log('Oranges. You win 5 dollars');
        break;
      case 'Bell':
        this.winnerReward('Bell');
        console.log('Bells. You win 8 dollars');
        break;
      case '$':
        this.winnerReward('$');
        console.log('Dollars.  You win 16 dollars');
        break;
      case 'Jackpot':
        this.winnerReward('Jackpot');
        console.log('Jackpot!  You win the jackpot!');
        break;
      default:
        console.log('Error.', wheel);
        break;
    }
  }

};

Slotmachine.turn();
