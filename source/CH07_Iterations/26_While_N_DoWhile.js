/* While loop - Checks the condition before executing the block of code 

   Syntax:
   while (condition) {
    // block of code

    -> Increment / Decrement
   }  */

let ind  = 1;

console.log(`> Table of 5: `)
while (ind <= 10){
    console.log(`5 x ${ind} = ${5*ind}`)
    ind++;
}


/* Looping through an array using while loop */
let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];
let index = 0;

console.log(`\n> Fruits in the basket: `)
while (index < fruits.length){
    console.log(fruits[index]);
    index++;
}




// ========== //



/* Do-While loop - Executes the block of code once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. Note: The condition being checked after the execution of code 

Syntax:
do {
    // block of code
    -> Increment / Decrement
} while (condition);  */



let num = 11;
console.log(`\n> Table of 7: `)
do {
    console.log(`7 x ${num} = ${7*num}`)
    num++;
}while (num <= 10);

// Note: For num = 11 loop executes because condition is checked after i.e. one execution is always done!p