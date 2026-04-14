/* To strictly use the Number type we can use the Number() function. */

let num1 = new Number(10);
console.log(num1) // Output: [Number: 10]

// Traditionally: 
let num2 = 10;
console.log(num2) // Output: 10

/* Notice the difference in the output. 
   1. In the first one, javascript it explicitly told to create a Number object, so it outputs [Number: 10].
    2. In the second one, it is just a primitive number guessed by default js, so it outputs 10. */


// Converting Number to a sting: toString() method: 
console.log(num1.toString() + ": Type: " + typeof(num1)) // Output: '10'


/* Further we can use all the String methods on the typecasted Number 
   Ex. length, charAt, indexOf etc. */

console.log("Length of num1: " + num1.toString().length)


/* Important Method: toFixed(<decimal_places>)  
   : It is used to print a number precisely including the decimal points followed
   : Or to limit the long decimals following to a given length */

console.log("Num1 with 2 decimal place: " + num1.toFixed(2))


/* Important Method: toPrecise(<lenght_of_number_tobeDisplayed>) 
   : It is used for approximations in javascript
   : Converts the number to fixed length using approximation by following digits 
   : approximate the digit to +1 if the following digit is >=5 */ 

const numDec = 23.53546
console.log("\n> " + numDec + " in 2 Digits: " + numDec.toPrecision(2))
console.log("> " + numDec + " in 3 Digits: " + numDec.toPrecision(3))
console.log("> " + numDec + " in 5 Digits: " + numDec.toPrecision(5))

/* Sometimes the above method gives values in exponential form too 
   : If the value are large or small
   : Priority is given to numbers before decimal points */

const numExp = 123456789
console.log("\n> " + numExp + " in Exponential form: " + numExp.toPrecision(3))


/* Important method: toLocaleString() :
    : It is used to convert a number to a string based on the locale settings of the user's environment.
    : That is it inputs commas to separate thousands, millions etc. based on the locale settings of the user. 
    : By default, the format is in millions, but it can be changed by passing the locale as an argument. */

const numLocal = 100000000
console.log("\n> " + numLocal + " in Local String: " + numLocal.toLocaleString('en-IN'))