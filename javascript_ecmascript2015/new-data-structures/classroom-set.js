'use strict';

let classroom = new Set();

let stevenJ = {name: 'Steven', age: 22},
    sarah = {name: 'Sarah', age: 23},
    stevenS = {name: 'Steven', age: 22};

classroom.add(stevenJ);
classroom.add(sarah);

if(classroom.has(stevenJ)) {
   console.log('stevenJ is in the classroom');''
}

if(classroom.has(stevenS)) {
   console.log('stevenS is in the classroom');''
}

//Create an array of students from the classroom set
let arrayOfStudent = Array.from (classroom);
console.log(arrayOfStudent);

//Create a set from an existing array
let alumi = new Set(arrayOfStudent);
console.log(alumi.size);