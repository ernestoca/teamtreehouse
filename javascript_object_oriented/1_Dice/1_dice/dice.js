function diceRoll() {
  var sides = 6;
  var randomNumber = Math.floor(Math.random() * sides) + 1;
  console.log(randomNumber);
}

var dice = {
    sides: 6,
    roll: function() {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}