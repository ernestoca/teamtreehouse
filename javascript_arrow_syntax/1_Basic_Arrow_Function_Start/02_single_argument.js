function square(x) {
    return x * x;
}

const squareAr = (x) => {
    return x + x;
}

function cube(x) {
    return square(x) * x;
}
/* If your arrow function only takes a single argument, we don't need parentheses */
const cubeAr = x => squareAr(x) * x;//And we don't need the return keyword, it will always return the value of the statement without the use of the return keyword 
                        //You can reduce the Arrow syntax further by removing the curly braces when you only have a 
                        //single line of code in your array function.
    
