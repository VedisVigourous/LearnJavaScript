/* Curly braces '{}' are known as scope in JavaScript. 
   - It is the area where variables are defined and can be accessed.
    - Variables defined inside a scope are not accessible outside of that scope.

    # Problem with Var:
      - Variables declared using 'var' are accessible outside the scope too! 
      - It is function scoped, not block scoped.
      - This can lead to unexpected behavior and bugs in your code.
      - Hence, it's use is deprecated in modern JavaScript. 
      
      Object declaration vs Scope: 
      - Curly braces used within an object literal are not a scope in the traditional sense.
      - It is used to define properties and methods within object!
      - Whereas, curly braces used in control flow statements (like if, for, while) or function definitions create a new scope. */
      
let a = 10;
var b = 20;

console.log(`\n> Accessing Globally Declared Variables: a = ${a}, b = ${b}`); 

// Declaring a function to demonstrate scope
if (true) {
    let scopeA = 30;
    var scopeB = 40;

    console.log(`\n> Accessing Block Scoped Variables: scopeA = ${scopeA}, scopeB = ${scopeB}`);
}

/* console.log(`\n> Accessing Function Scoped Variables: scopeA = ${scopeA}, scopeB = ${scopeB}`); 
### Gives an error as scopeA and scopeB are not accessible outside the conditional */



// ******* Demostration of Var ******** //

var x = 50;

if(true){
    var x = 60; 
}

console.log(`\n> Accessing Var Declared Inside If Block: x = ${x}`);

/* Note: The value changed to 60 even outside the if block. 
   - It shouldn't have changed if we had used 'let' instead of 'var'.
   - This is because var is function scoped, not block scoped. Hence, it can be accessed and modified outside the block as well. */