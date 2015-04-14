var Slotmachine = {
  FRUIT: ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Cherry', 'Cherry', 'Cherry', 'Cherry',
    'Orange', 'Orange', 'Orange', 'Bell', 'Bell', 'Bell', '$', '$', 'Jackpot'],

  wheels: [],

  bank: 100,

  bets: 0,

  turn: function() {
    this.numberOfBets(3);
    console.log('wheels', this.wheels);
  },

  numberOfBets: function(bets) {
    this.createWheels(bets);
    this.countAcrossRows(bets);
    this.bets += bets;
  },

  createColumn: function() {
    for(var i = 0; i < 3; i++) {
      this.wheels.push({number: this.wheels.length + 1, fruit: this.FRUIT[Math.floor(Math.random() * this.FRUIT.length)]});
    }
  },

  createWheels: function(numberOfWheels) {
    for(var i = 0; i < numberOfWheels; i++) {
      this.createColumn();
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
    this.winnerValidation(slotNumbersArray);
  },

  winnerValidation: function(slotNumbers) {
    for(var i = 0; i < slotNumbers.length; i++) {
      console.log(slotNumbers[i].slotNumberOne, slotNumbers[i].slotNumberTwo, slotNumbers[i].slotNumberThree);
      if(slotNumbers[i].slotNumberOne === slotNumbers[i].slotNumberTwo &&
         slotNumbers[i].slotNumberOne === slotNumbers[i].slotNumberThree) {
           this.winnerReward(this.bets);
           this.winnerMessage(slotNumbers[i].slotNumberOne);
         } else {
           this.loserReward(this.bets);
         }
    }
  },

  winnerReward: function(bets) {
    this.bank += bets;
  },

  loserReward: function(bets) {
    this.bank -= bets;
  },

  winnerMessage: function(wheel) {
    switch (wheel) {
      case 'Apple':
        console.log('Apples.  You win 1 dollar');
        break;
      case 'Cherry':
        console.log('Cherries. You win 3 dollars');
        break;
      case 'Orange':
        console.log('Oranges. You win 5 dollars');
        break;
      case 'Bell':
        console.log('Bells. You win 8 dollars');
        break;
      case '$':
        console.log('Dollars.  You win 16 dollars');
        break;
      case 'Jackpot':
        console.log('Jackpot!  You win the jackpot!');
        break;
      default:
        console.log('Error.', wheel);
        break;
    }
  },

};

Slotmachine.turn();
