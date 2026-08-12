/* 'this' keyword -> it is used to update or get the current context of the object.
   - Context refers to the values and parameters an object holds! */

const user = {
    username: "vedant",
    age: 20,

    welcome: function () {
        console.log(`Welcome ${this.username} and your age is ${this.age}`);
        console.log(this)

        /* This here will return with all the parameters (context) that the object holds */
    }
}


user.welcome();
user.username = "soumya";
user.welcome();


// Note: In node environment, 'this' will return an empty object but in browser it will return the window object.
/* `Window` is a global object that holds all the parameters and values of the current environment. */

console.log(`\n> This in node environment: `, this, `\n\n`);


// ********************* //


// This keyword in a function:

function vedantFn() {
    const owner = "Vedant"
    // console.log(this);
    console.log(this.owner)
}

vedantFn();

/* In functions 'this' returns many parameters like microtask, nodeStart etc which are related to the current environment. 
   - Even the this.owner returns undefined! that is this works the best with objects and not with functions! 
   
   
   
   MYTH: That this works flawlessly with arrow functions!
   - It's not true even with arrowfunctions, if a parameter is being accessed from the object, it will return undefined.  */

const thisArrowFn = () => {
    const owner = "Vedant"
    console.log(this.owner);    
}

thisArrowFn();



console.log("\nArrow Functions: ");
// ***************** //


/* Arrow Functions:- 
   # Syntax: name = (<parameters>) => { //block of code } */
   
const addTwo = (a, b) => {
    return a + b;
}


// Implicit Arrow function -> to return in a single line! - Doesn't have to use return keyword and curly braces!
// The other is 'Explicit Return Function' which uses return keyword and curly braces to return the value.

const addTwoImplicit = (a, b) => a + b;

console.table({
    "Output of Add Two arr fn:": addTwo(2, 3),
    "Output of Add Two Implicit arr fn:": addTwoImplicit(2, 3)
});


/* Note: If used curly braces then we have to use return keyword
   - However, paranthesis can be used to return without using return keyword and curly braces! 
   
   - Example:
   const name = () => ( <returningValues> ) */


// Also note if we return an object in an arrow function, we have to use paranthesis to return the object otherwise it will give undefined!

const returnObject = () => ({ name: "Vedant", age: 20 });
console.log(`\nReturning an object in arrow function: `, returnObject());