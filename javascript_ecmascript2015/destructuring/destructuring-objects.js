'use strict';

let toybox = { item1: 'car', item2: 'ball', item3: 'frisbee' };

let {item1, item2} = toybox;

console.log(item1, item2);

//Destructuring allows you to declare new variables by placing the key
//on the left side of a colon and the new variable name on the right side
let {item3: disc} = toybox;
console.log(disc);
