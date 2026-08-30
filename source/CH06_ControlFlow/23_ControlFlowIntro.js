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

if (true) console.log("> Implicit Condition True\n");

/* If there are more than two conditions
   - We can use if-else if ladder.
   - An optional else statement can be added for final condition */

let money = 1000

if (money < 500) {
    console.log("> Money less than 500");
}
else if (money < 800){
    console.log("> Money less than 800");
}
else {
    console.log("> Money greater than 800");
    
}

/* Logical And (&&) - Executes block of code only if all condition specified are true.
   Logical Or (||) - Executes block of code even if one condition is true */

const oldUser = true
const newUser = false

const mobileLogin = false
const emailLogin = true

if (newUser && emailLogin) {
    console.log("> Good to go...");
}
else if (newUser && mobileLogin){
    console.log("> Update Email");
}
else if (oldUser && (mobileLogin || emailLogin)){
    console.log("> Old User ... Good to go \n")
}





/* Switch statement - executes a block of code based on the matching case value
   - It is used when there are multiple conditions to check.
   - It is more efficient than if-else if ladder. 
   
   Syntax:
   
   switch (key) {
    case value1:
        // block of code
        break;
    case value2:
        // block of code
        break;
    default:
        // block of code
   } 
        
   here, key is the variable whose value is compared against the case values. 
   - Also, values to be compared can be of different data types. */

let day = 2

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
}



/* NOTE: If break is not used after each case, the following code is automatically executed until a break is found or the switch statement ends.
   - This is called as {fall through.} */



/* Nullish Coalescing Operator (??) - It is used to provide a default value for a variable if it is null or undefined. 
- It's working revolves around 'null' and 'undefined' values.

- Imagine getting two values for a variable,
  1. being null or undefined, and
    2. being a valid value (like a number, string, etc.)

    then the nullish coalescing operator (??) will return the valid value if the first value is null or undefined, otherwise it will return the first value. */

let userName = null ?? "Vedant"

/* Since it has two option either null or 'Vedant' it will return the valid value */

console.log(`\n> Value of UserName - ${userName}`);



/* Ternary Operator - It is a shorthand for if-else statement.
   - It is used to assign a value to a variable based on a condition.
   - It is also called as conditional operator. 
   
   Syntax:
    condition ? trueValue : falseValue */

const ranVar = 5 > 2 ? 5 : 2

// Here, the condition is true, so the value of ranVar will be 5.