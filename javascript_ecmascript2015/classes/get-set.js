'use strict';

class Student {
  
  get name() {
      return `${this.firstName} ${this.lastName}`;
  }
    
  constructor({ firstName, lastName, age, interestLevel = 5 } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.interestLevel = interestLevel;
  }
}

let stevenJ = new Student({ firstName: 'Steven', lastName: 'Jones', age:22});
console.log(stevenJ.name);
