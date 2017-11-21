'use strict';

var Person = function (data) {
  for (var key in data) {
    this[key] = data[key];  
  }
  this.getKeys = () => {
    //So what the arrow, or lambda function does, is it binds the function to 
    //the instance of the person, no matter where it was called.
    //In other words, this now refers to Alena.
    return Object.keys(this);
  }
}

var Alena = new Person({ name: 'Alena', role: 'Teacher' });

console.log('Alena\'s Keys:', Alena.getKeys()); // 'this' refers to 'Alena'

var getKeys = Alena.getKeys;

console.log(getKeys()); // 'this' refers to the node process

//An arrow function is bound to his parent scope