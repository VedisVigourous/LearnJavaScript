/* These high order loops are more array specific and are more functional programming oriented. They are also more declarative than the for loop. */

/* 1. For of loop ->
   - To iterate over a given body of code we can use the for of loop. It is a more modern way of iterating over arrays and other iterable objects. 
   
   Syntax:
   for (declaration of iterable) {
       // body of the loop
    }   */


let arr = [1, 2, 3, 4, 5];

for (let val of arr) {
    console.log(val);
}

console.log();


// On String

let nm = "Vedant Chauhaan"
for (let char of nm){
    if(char === " ") {
        break;
    }
    console.log(char);
}


console.log();


/* Some specific datatype like maps have specific implementations of the for-of loop */

let map = new Map();
map.set("name", "Vedant");
map.set("age", 20);
map.set("city", "Delhi");

console.log(`> Key-Value Pairs of the Map are: `);
for (let values of map) {
    console.log(values);
};

/* It gives the array of both keys and values */


/* To get only keys of values we can destructure the array of key-value pairs */

console.log(`\n> Keys of the Map are: `);
for (let [key, value] of map) {
    console.log(`Keys: ${key}, Values: ${value}`);
}


/* For of loop on objects 
   =================== 
   - NOTE -> Objects are not iterable using for loops 
   ===================    */