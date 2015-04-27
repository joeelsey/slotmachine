// var Slotmachine = {
//   fruit: ['Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Apple', 'Cherry', 'Cherry', 'Cherry', 'Cherry',
//     'Orange', 'Orange', 'Orange', 'Bell', 'Bell', 'Bell', '$', '$', 'Jackpot'],
//   wheel: [
//     {number: null},
//     {number: 1, fruit: '', column: {winner: false}}, {number: 2, fruit: '', column: {winner: false}},
//     {number: 3, fruit: '', column: {winner: false}}, {number: 4, fruit: '', column: {winner: false}},
//     {number: 5, fruit: '', column: {winner: false}}, {number: 6, fruit: '', column: {winner: false}},
//     {number: 7, fruit: '', column: {winner: false}}, {number: 8, fruit: '', column: {winner: false}},
//     {number: 9, fruit: '', column: {winner: false}}
//   ],
//
//   wheelObject: [],
//   money: 100,  //would love to make this user input at some point.  I.e. 'putting money in the machine'.
//
//   //should display the money.  untested
//   // moneyDisplay: function() {
//   //   document.getElementById('money').innerHTML = this.money;
//   // }(),
//
//   //calls spinColumns three times.  Once for each column.
//   turn: function() {
//     document.getElementById('winMessage').innerHTML = '<div> </div>';
//     this.spinColumns(); //this way you could add a column by just adding another number...  Maybe not.
//     this.loseMoney(); //you lose money with every spin
//     this.createWheelObject(3);
//     this.displayColumn(3);
//   },
//
//   //How many wheels do you want your slot machine to have.
//   createWheelObject: function(wheelNumber) {
//     this.wheelObject = [];
//     for (var i = 0; i < wheelNumber; i++) {
//       this.wheelObject.push({number: i + 1, fruit: this.fruit[Math.floor(Math.random() * this.fruit.length)]});
//       console.log('wheel objects', this.wheelObject);
//     }
//   },
//
//   // //assigns a random fruit type from the fruit array to each wheel object
//   // numberOfColumns: function() {
//   //   for (var i = 1; i <= 9; i++) {
//   //     this.wheel[i].number = i;
//   //     this.wheel[i].fruit = this.fruit[Math.floor(Math.random() * this.fruit.length)];
//   //     document.getElementById('wheel' + i).innerHTML = this.wheel[i].fruit;
//   //     // console.log('fruit assignment', this.wheel[i].fruit);
//   //   }
//   // },
//
//   displayColumn: function(wheelColumn) {
//     for (var i = 1; i <= wheelColumn; i++) {
//       console.log(i);
//       console.log('wheel assignment', this.wheelObject[i - 1].fruit);
//       document.getElementById('wheel' + i).innerHTML = this.wheelObject[i - 1].fruit;
//     }
//   },
//
//   //Every three spins the comparison should stop and then another three spins at a higher index should start.
//   //This should happen three times.
//   spinColumns: function() {
//     var columnOneCounter = 0;
//     var columnTwoCounter = 3;
//     var columnThreeCounter = 6;
//     for(var i = 0; i < 1; i++) {
//       columnOneCounter++;
//       this.winnerValidator(columnOneCounter);
//       this.loseValidator(columnOneCounter);
//
//       columnTwoCounter++;
//       this.winnerValidator(columnTwoCounter);
//       this.loseValidator(columnTwoCounter);
//
//       columnThreeCounter++;
//       this.winnerValidator(columnThreeCounter);
//       this.loseValidator(columnThreeCounter);
//     }
//   },
//
//   //takes a wheel number and checks for matches of fruit.  Reward event if match happens.
//   winnerValidator: function(wheelNumber) {
//     var winnerType,
//         wheelColumnWinner;
//     if (this.wheel[wheelNumber].fruit === this.wheel[wheelNumber + 1].fruit &&
//         this.wheel[wheelNumber].fruit === this.wheel[wheelNumber + 2].fruit) {
//
//       this.wheel[wheelNumber].column.winner = true;
//       this.winnerMessage(this.wheel[wheelNumber].fruit);
//
//       winnerType = this.wheel[wheelNumber].fruit;
//       wheelColumnWinner = this.wheel[wheelNumber].column.winner;
//       // this.addMoney(winnerType, wheelColumnWinner);
//     }
//   },
//
//   //checks to see if the columns are losers.  If they all are then lose money and lose message.  If win remove lose message.
//   loseValidator: function(wheelNumber) {
//     if (this.wheel[wheelNumber].column.winner === false) {
//       document.getElementById('message').innerHTML = '<div>No Winner.</div>';
//     } else {
//       document.getElementById('message').innerHTML = '<div> </div>';
//     }
//   },
//
//   //this works so no refactor until later but its going to be an object literal soon
//   winnerMessage: function(wheel) {
//     switch (wheel) {
//       case 'Apple':
//         console.log('Apples.  You win 1 dollar');
//         document.getElementById('winMessage').innerHTML += '<div>Apples.  You win 1 dollar</div>';
//         break;
//       case 'Cherry':
//         console.log('Cherries. You win 3 dollars');
//         document.getElementById('winMessage').innerHTML += '<div>Cherries.  You win 3 dollars</div>';
//         break;
//       case 'Orange':
//         console.log('Oranges. You win 5 dollars');
//         document.getElementById('winMessage').innerHTML += '<div>Oranges.  You win 5 dollars</div>';
//         break;
//       case 'Bell':
//         console.log('Bells. You win 8 dollars');
//         document.getElementById('winMessage').innerHTML += '<div>Bells.  You win 8 dollars</div>';
//         break;
//       case '$':
//         console.log('Dollars.  You win 16 dollars');
//         document.getElementById('winMessage').innerHTML += '<div>Dollars.  You win 16 dollars</div>';
//         break;
//       case 'Jackpot':
//         console.log('Jackpot!  You win the jackpot!');
//         document.getElementById('winMessage').innerHTML += '<div>Jackpot.  You win the jackpot</div>';
//         break;
//       default:
//         console.log('Error.');
//         break;
//     }
//   },
//
//   // addMoney: function(winnerType, wheelColumnWinner) {
//   //   var  validateType = function (t, w) {
//   //     if (w.wheel[1].fruit === t && w.wheel.column.winner === true ||
//   //         w.wheel[4].fruit === t && w.wheel.column.winner === true ||
//   //         w.wheel[7].fruit === t && w.wheel.column.winner === true ) {
//   //           return true;
//   //     }
//   //   }
//   //
//   //   if (validateType('Apple', this)) {
//   //     this.money += 1;
//   //   }
//   //
//   //
//   //   if (this.wheel[1].fruit === 'Cherry' && this.wheel.column.winner === true ||
//   //       this.wheel[4].fruit === 'Cherry' && this.wheel.column.winner === true ||
//   //       this.wheel[7].fruit === 'Cherry' && this.wheel.column.winner === true) {
//   //     this.money += 3;
//   //   }
//   //   if (this.wheel[1].fruit === 'Orange' && this.wheel.column.winner === true ||
//   //       this.wheel[4].fruit === 'Orange' && this.wheel.column.winner === true ||
//   //       this.wheel[7].fruit === 'Orange' && this.wheel.column.winner === true) {
//   //     this.money += 5;
//   //   }
//   //   if (this.wheel[1].fruit === 'Bell' && this.wheel.column.winner === true ||
//   //       this.wheel[4].fruit === 'Bell' && this.wheel.column.winner === true ||
//   //       this.wheel[7].fruit === 'Bell' && this.wheel.column.winner === true) {
//   //     this.money += 8;
//   //   }
//   //   if (this.wheel[1].fruit === '$' && this.wheel.column.winner === true ||
//   //       this.wheel[4].fruit === '$' && this.wheel.column.winner === true ||
//   //       this.wheel[7].fruit === '$' && this.wheel.column.winner === true) {
//   //     this.money += 16;
//   //   }
//   //   if (this.wheel[1].fruit === 'Jackpot' && this.wheel.column.winner === true ||
//   //       this.wheel[4].fruit === 'Jackpot' && this.wheel.column.winner === true ||
//   //       this.wheel[7].fruit === 'Jackpot' && this.wheel.column.winner === true) {
//   //     this.money += 100;
//   //   }
//   // },
//
//   loseMoney: function() {
//     console.log(this.money);
//     if (this.money === 0) {
//       document.getElementById('loseMessage').innerHTML = '<div>The House Always Wins</div>';
//     }
//     return this.money -= 1;
//   }
// };
