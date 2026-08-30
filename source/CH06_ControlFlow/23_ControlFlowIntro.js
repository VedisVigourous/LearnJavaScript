/* Control Flow/ Login Flow - as the names suggest controls the flow of the code execution
   - Based on different conditions different block of code will be executed using logical/control flow statements 
   
   List of conditional operators :
   1. > - less than
   2. < - greater than
   3. >= - greater than or equal to
   4. <= - less than or equal to
   5. == - equality
   6. != - inequality
   7. === - strict equality
   8. !== - strict inequality 
   9. && - logical AND
   10. || - logical OR
   11. ! - logical NOT   */   

/* 1. If statement - exectues a block of code if the condition is true     
   
   syntax:
   if (condition) {
    // block of code 
   }   */

speed = 90
console.log(`\n--> Speed set to ${speed} `);

if(speed > 80){
    console.log("> Overspeeding!");
}


/* 2. If else statement - executes a block of code if the condition is true, otherwise executes another block of code if the condition is false

   syntax:  
   if (condition) {
    // block of code if condition is true
   }
    else {
    // block of code if condition is false
   }   */

if (speed < 100){
    console.log("> Speed smaller than 100!");
}
else {
    console.log("> Speed even greater than 100!");
}


/* Note: If else follow scope theory
   - If a variable is created within the block of code, it will not be accessible outside the block of code.

   - But, if declared using var keyword, it will be accessible outside the block of code.  
   - If accessed before declaration, it will return undefined.
   
   - [Reference error] in case of let and const! */






/* Writing Implicit scoped if-else
   - It is written in a single line.
   - Curly Braces are not required. */

if (true) console.log("Implicit Condition True");

/* If there are more than two conditions
   - We can use if-else if ladder.
   - An optional else statement can be added for final condition */

let money = 1000

if (money < 500) {
    console.log("Money less than 500");
}
else if (money < 800){
    console.log("Money less than 800");
}
else {
    console.log("Money greater than 800");
    
}

/* Logical And (&&) - Executes block of code only if all condition specified are true.
   Logical Or (||) - Executes block of code even if one condition is true */

const oldUser = true
const newUser = false

const mobileLogin = false
const emailLogin = true

if (newUser && emailLogin) {
    console.log("Good to go...");
}
else if (newUser && mobileLogin){
    console.log("Update Email");
}
else if (oldUser && (mobileLogin || emailLogin)){
    console.log("Old User ... Good to go")
}





