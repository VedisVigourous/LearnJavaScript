/* IIFE stand for -> Immediately Invoked Function Expression. 
   - It is a function that runs as soon as it is defined. 
   
   Syntax - requires two set of parentheses!
   - 1. Function definition
   - 2. Function call 
   
   Syntax:
   (function() {
     // Function body
   })();
   
   ===============
   
   Note: IIFE must be explicitly terminated ';' -> as the function itself doesn't know where to return */

// NAMED IIFE
(function greet(){
    console.log("Hellow User!")
})();

// The above function will be immediately invoked without the need of calling it explicitly! 


/* IMPORTANT: IIFE solves the problem of global scope pollution!
   - Global Scope Pollution refers to -> many type of declarations within the global scope !
   - IIFE gives a private space and variables can be declared up there! 
   
   
    |      Normal Function        |           IIFE           |
    | Defined for possible reuse  |  Usually executed once   |
    |   Has an accesible name     |   Generally anonymous    |
    |     Called separately       |    Called immediately    |              */


// ANONYMOUS DECLARATION OF IIFE

(() => {
    console.log("Hellow Again User!");
})();


/* Passing of Arguments to an IIFE 
   - The second paranthesis used to call the function can also be used to pass arguments to the IIFE.  */

// ANONYMOUS IIFE 
((name) => {
    console.log(`Hello ${name}!`);
})('Vedant');