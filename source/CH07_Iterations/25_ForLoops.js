/* For Loop - Used for a fixed number of iterations
   - Syntax

   for (initialization; condition; increment/decrement) {
        // block of code
   }    
        
   - A block scope is defined on loop initialization */

for(let i = 0; i < 5; i++) {
    console.log(i);
}


console.log();



/* Nested For Loop - A loop inside another loop
   - Syntax

   for (initialization; condition; increment/decrement) {
        for (initialization; condition; increment/decrement) {
            // block of code
        }
    }  */

for(let i = 0; i < 3; i++) {
    console.log(`\nOuter Loop: ${i}`);
    for(let j = 0; j < 2; j++) {
        console.log(`Inner Loop: ${j}`);
    }
}

console.log();

/* Iterating through an array */

console.log("\n> Iterating through an array using a for loop");
let arr = ["One" , "Two", "Three", "Four", "Five"];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/* Note: If we move ahead of the array length -> values printed will be undefined */


console.log()


/* BREAK & CONTINUE - Used to control the flow of a loop
   - break: Exits the loop completely
   - continue: Skips the current iteration and moves to the next iteration */ 

for (let i = 1; i <=10; i++) {
    if(i === 5) {
        console.log("> Skipping the iteration at i = 5");
        continue;
    }

    if(i === 7) {
        console.log("> Breaking the loop at i = 5");
        break;
    }
    console.log(i);
}