'use strict';

class Person {
  dance() {
    const dances = [
      'waltz',
      'tango',
      'mambo',
      'foxtrot'
    ];
    console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
  }
  constructor({ name, age, eyeColor = 'brown' } = {}) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
  }
}

class Student extends Person {
  dance(traditional) {
      if(traditional) {
         super.dance();
         return;
      }
      const dances = [
          'lyrical',
          'tap',
          'ballet',
          'jazz'
     ];
     console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
  }
      

  constructor({ name, age, interestLevel = 5 } = {} ) {
    //When extending a class you must be sure to call the super in the child clas constructor before any reference to the instance
    super({name, age});
    this.name = name;
    this.age = age;
    this.interestLevel = interestLevel;
    this.grades = new Map;
  }
}
//Normally, a named JavaScript function, like a constructor function, can appear at
//the bottom of a script and still be called by code that appears before it.
//That's known as hoisting, however, JavaScript classes aren't hoisted.
//This means you need to load code that defines the class before any code that calls the class.

let stevenJ = new Student({ name: 'Steven', age: 22, insterestLevel: 3 });
stevenJ.dance(false);
console.log(stevenJ.interestLevel);