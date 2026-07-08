/* Practice questions from JS files - 01 to 11 */

let startTime = Date.now()

/* Q1: Explain the difference between "Null" and "Undefined" using a real-world analogy (e.g., a form field or a library shelf)
   Ans: Taking the example of a library shelf: I. Null - It can be imagined as an empty shelf that is left blank and will not soon be filled! 
                                               II. Undefined - It is however, a shelf that is left empty because the books are not being placed on it yet! */



/* Q2: Write a script that uses typeof inside a template literal to print: "The value of [variable] is [value] and its type is [type]". */
console.log("")

let templateVar = 123
console.log(`Ans 2 > The value of templateVar is ${templateVar} and its type is ${typeof(templateVar)}`)



/* Q3: Create a deep copy of an object (not a shallow copy) using JSON.parse(JSON.stringify(obj)). Change a nested property and prove the original object remains untouched. Explain why a standard spread operator [...] might fail for nested objects 

Ans: Concept: The Spread Operator ({...obj}): This creates a Shallow Copy. It copies the first layer of properties perfectly. However, if there is an object inside your object (a nested property), the spread operator just copies the memory reference for that inner object. If you change the inner object on the copy, the original changes too!

The JSON Hack (JSON.parse(JSON.stringify(obj))): This creates a Deep Copy. JSON.stringify converts your entire object into a raw text string, completely severing all memory references. Then, JSON.parse takes that string and builds a brand new, completely disconnected object in a new memory address.*/
console.log("")

let originalUser = {
    name: "Vedant",
    skills: {
        language: "Java",
        framework: "Spring"
    }
}
// 1. Using Spread Operator (Shallow Copy)
let shallowCopyUser = {...originalUser}
shallowCopyUser.skills.language = "Python" // Changing nested property in shallow copy

// 2. Using JSON Hack (Deep Copy)
let deepCopyUser = JSON.parse(JSON.stringify(originalUser))
deepCopyUser.skills.language = "JavaScript" // Changing nested property in deep copy

console.table({originalUser, shallowCopyUser, deepCopyUser})

/* =========
    STRINGS
   ========= */

console.log("")

/* Q1: What is "String Interpolation" and why is it preferred over standard concatenation using the + operator? 
   Ans: String interpolation is a feature in JavaScript that allows you to embed expressions inside string literals using backticks and the ${} syntax. It is preferred over standard concatenation because it makes the code more readable and easier to maintain. */



/* Q2: Take the string let gameName = "   Space-Invaders-Mobile   ". Write a single line of code that:
Trims the whitespace.
Replaces "Mobile" with "PC".
Converts the entire string to Uppercase. */

let gameName = "   Space-Invaders-Mobile   "
let modifedGameName = gameName.trim().replace("Mobile", "PC").toUpperCase()
console.table({
    "Original String": gameName,
    "Modified String": modifedGameName
})

console.log("")

/* Q3: Use a string method to check if a specific email address ends with @gmail.com and log a boolean result. */
// Ans: Using - 'includes()'
const mail = "vedant.javascript@gmail.com"
console.log(`> Mail ends with @gmail.com? - ${mail.endsWith("@gmail.com")}`)

console.log("")


/* ================
    NUMBER & MATHS
   ================ */
   
console.log("")

/* Q1: Given a number let balance = 500.4567, format it so it always displays exactly two decimal places (like a currency). */
let balance = 500.4567
const balanceDecimal = balance.toFixed(2)

console.log("> Balance in 2 decimal places: " + balanceDecimal)

console.log("")

/* Q2: Write a function that generates a random integer between a min and a max value (inclusive). Explain why you need to use Math.floor() and Math.random() together for this. 

Ans: We need Math.floor() and Math.random() together to generate a random integer within the specified range. Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive), and Math.floor() rounds it down to the nearest integer. */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log("> Random integer between 1 to 10: " + getRandomInteger(1, 10))

console.log("")

/* Q3: Explain the difference between Number.isInteger() and Number.isNaN() 
   Ans: Number.isInteger() - returns a boolean value by checking if the number given is integer or not
        Number.isNAN() - It is used to check the type of declared variable and returns true only if the type is of 'Number' */

var integer = 1234
console.log(`> For value: ${integer}:`)
console.table({"isInteger(): ": Number.isInteger(integer),
               "isNAN():": Number.isNaN(integer)
})

console.log("")

/* =============
    Date & Time
   ============= */
   
/* Q1: Create a new Date object for "current time." Extract and log the current Month (1-12) and the current Day of the week. Note: Remember that months are 0-indexed in JS.*/
var currentDate = new Date()
console.log(`> Current Month: ${currentDate.getMonth() + 1} & Current Day: ${currentDate.getDay()}`)
console.log("")



/* Q2: Convert a Date object into a readable string format (e.g., "Monday, July 9, 2026") using .toLocaleString(). */
// And Using: currentDate instance

console.log(`> Formatted Date: ${currentDate.toLocaleString('en-US', {weekday: 'long', month: 'long' , day: 'numeric' ,year: 'numeric'})}`)
console.log("")



/* Q3: How can you measure the execution time of a specific block of code using Date.now()? Provide a coding example. 
   Ans: Initializing a Date.now() variable at both start and end of the code - file and hence printing the difference so obtained! */
let endTime = Date.now()
let difference = endTime - startTime
console.log("> Program Run Time: " + difference.toFixed(2) + "ms")