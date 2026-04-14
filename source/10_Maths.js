// /* Math in javascript is a built in object having different sorts of properties and methods. It is not a function object. It is a static object. */

// // Methods Include: 
// // 1. Math.abs() - returns the absolute value of a number
// console.log(`> Absolute value of -5 is: ${Math.abs(-5)}`)


// // 2. Math.round() - rounds the number to the nearest integer
// console.log(`> Round of 4.6 is: ${Math.round(4.6)}`)


// /* 3.1 Math.ceil() - round a number up to the next largest integer
//    3.2 Math.floor() - round a number down to the next smallest integer 
   
//    [ceil - ceiling i.e. top
//    [floor - floor i.e. bottom ] */

// console.table({
//     "> Ceil of 4.2 is: " : Math.ceil(4.2),
//     "> Floor of 4.8 is: " : Math.floor(4.8)
// });


// /* To determine the least / greatest number from a set of numbers we use: 
//    4.1 Math.min() - returns the smallest of zero or more numbers
//     4.2 Math.max() - returns the largest of zero or more numbers */

// let arr = [3, 5, 1, 8, 2];
// console.log(`\n> Array: ${arr}`);
// console.table({
//     "> Minimum number in the array is: " : Math.min(...arr),
//     "> Maximum number in the array is: " : Math.max(...arr)
// });



// /* Most Used method: 
//    5. Math.random() - returns a random number between 0 (inclusive) and 1 (exclusive) */
// console.log(`\n> Random number between 0 and 1 is: ${Math.random()}`)

// /* Sometimes, we are required to generate a random number in a specific range. 
//    For example, a die game: requires a random number between 1 and 6. 
   
//    * To recieve a value from 0 to 10(excl) we would just multiply the .random() value with 10 
//    * And to exlude the case of 0 : we will add the value received by 1 i.e. the range is now: 1 to 10 
//    * And to receive a single number we can use: round, floor or ceil as required  
    
//    * And to receive in a range: 
//    - Declare a max and min value
//    - now (max - min + 1) depicts the range of the value excluding 0
//    - random * range gives the value in range, but starting from 1
//    - Hence, for a minimum number the formula is:
//    - [(random * range) + min] */

const max = 6
const min = 1

console.log(`Value from 1 to 6: ${Math.floor((Math.random() * (max - min + 1) + min))}`)