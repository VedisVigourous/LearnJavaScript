/* Functions are used to reduce the repetition of code blocks by making a structure holding block of code, which is frequently used! 

Definition of a Funtions: 
    -> function funcName (parameters) {
        // block of code
    }    
        
Execution of a functions: 
-> funcName = reference
-> funcName() = calling of a function! */

function myName(){
    console.log("V");  
    console.log("E");  
    console.log("D");  
    console.log("A");  
    console.log("N");  
    console.log("T");  
}

console.log("\n> First Function:");
myName()


// A function to add two numbers - passed as parameters
function printSum(a, b){
    console.log(`\n> Sum of two numbers: ${a+b}`)
}

function add(a, b) {
    return a+b
}

console.log(`\n> Addition of Two numbers: ${add(5,3)}`)
printSum(5,4)

/* Return vs Printing in a function: 
   - Return actually assigns a value after the execution
   - Whereas, if we only console log a value within function : it will print and forget the value!

   - i.e. if we assign a variable the output of a function and then print the variable
   - The function having return concept will only give it a value else the value will be undefined! */

const varLog = printSum(10, 10)
const varRet = add(10, 10)

console.log("\n> Log vs Return: ");
console.table({
    "Using Log": varLog,
    "Using Return": varRet
})

/* Note: After return : all the further code blocks are never executed! and the function is checked out! */


// Using String Interpolation with return
function greet(userName) {
    return `Greetings, ${userName}!`
}

console.log(`\n> ${greet("Vedant")}`);


/* Note: If a function asks for parameter and the function is called without passing one: undefined is returned - wherever the parameter was used !! 

- Can be checked by if - conditional */
function greetNew(userName){
    if(!userName){
        console.log("Enter a username!");
        return
    }

    return `Greetings, ${userName}!`
}

console.log(`> ${greetNew()}`);

/* Note: we can even hardcode a parameter value by: 
   function name(param = "hardcodeValue") {} 
   
   - If we call a function with another value - it gets overwritten! */