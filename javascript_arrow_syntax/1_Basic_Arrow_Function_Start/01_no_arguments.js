/* Benefits of Arrow Functions:
    The first benefit of arrow functions, as discussed in this workshop, is it's shorter syntax.
    
    The advanced technical benefit with arrow functions comes with using callbacks in object orientated programming and using this.
*/

const name = "Andrew";

//Function Declaration
function sayName() {
    const message = "My name is " + name;
    console.log(message);
}
//Function Expresion
const sayName = function() {
    const message = "My name is " + name;
    console.log(message);
}
//Function Arrow 
const sayNameArrow = () => {
    const message = "My name is " + name;
    console.log(message);
}

function sayBye() {
  console.log("Bye " + name);  
}

/* In this example we're increasing a person's age by 1 ever one second. 
You have to assign this to a variable, in this case self because whenever you create a function a new this value is defined.

Arrow functions do not have a this value defined. You can write the above code in the following way.
*/
function Person() {
  this.age = 0;

  var self = this;

  setInterval(function() {
    self.age ++;
  }, 1000);

}

function PersonArrow() {
  this.age = 0;

  setInterval(() => {
    this.age ++;
  }, 1000);

}