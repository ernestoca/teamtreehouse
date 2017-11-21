'use strict';

class Bird {
  static changeColor(color) {
    this.color = color;
  }
  constructor({ color = 'red' } = {}) {
    this.color = color;
  }
}

let redBird new Bird;
console.log(redBird.color);
Bird.changeColor.call(redBird, 'blue');
console.log(redBird.color);

//This is equivalent to:
class Bird2 {
  static changeColor(bird, color) {
    bird.color = color;
  }
  constructor({ color = 'blue' } = {}) {
    this.color = color;
  }
}

let blueBird new Bird2;
console.log(blueBird.color);
//Now we don't need the call method
Bird.changeColor(redBird, 'green');
console.log(blueBird.color);