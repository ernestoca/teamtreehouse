'use strict';

function submit(name, comments, rating = 5) {
  let data = { name, comments, rating };
  //When the interpreter encounters a variable assignment without a property key, 
  //the variable name itself is used as the property key.
  for (let key in data) {
    console.log(key + ':', data[key]);
  }
  //    
}

submit('English', 'Great course', 9);