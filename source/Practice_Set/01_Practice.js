/* Practice questions from JS files - 01 to 08 */

console.log("\n")

/* =====================  
    Topic: 02_Variables
   =====================

Q1: Explain the "Temporal Dead Zone" (TDZ) and how it affects variables declared with let and const compared to var. 
- Ans: I. The Temporal Dead Zone (TDZ) refers to a period where if the variables are not declared but still accessed, the compiler throws an Reference Error. This happens with variable declared using let and const. 
II. Variables declared with var if accessed before declaration will however return undefined and doesn't throw an error. This is due to,
III. Hoisting - where the variable declarations are moved to the top of their scope during the compilation phase.

Note: TDZ is a safer way to handle variables and a more precise and predictable behavior. */

/* Q2: Write a code snippet that attempts to reassign a value to a const variable. Wrap it in a try...catch block to handle the error and log a custom message. */
// Ans:
const dateOfBirth = 2007

try {
    dateOfBirth = 2006
}
catch (error) {
    console.log("Error Occured: Cannot reassign a constant value!")
    console.log("Value Remains: " , dateOfBirth)
}

console.log("\n")

/* Q3: Create three variables: one using var inside a function, one using let inside a block, and one const globally. Demonstrate which ones are accessible outside their respective scopes. */

// Ans:
function qn3() {
    var functionVar = "I am a var variable inside a function";
}

if (true) {
    let blockLet = "I am a let variable inside a block";
}

const globalConst = "I am a const variable globally";

// Accessing variables outside their respective scopes  
try {
    console.log(functionVar); // ReferenceError: functionVar is not defined
} 
catch (error) {
    console.log("var variable: ", error.message);
}

try {
    console.log(blockLet); // ReferenceError: blockLet is not defined
} 
catch (error) {
    console.log("let variable: ", error.message);
}

console.log(globalConst); // Output: I am a const variable globally

console.log("\n")

/* =====================
    Topic: 03_DataTypes
   =====================

Q1: List the 7 primitive datatypes in JavaScript and provide one coding example for each. 

-Ans: 1. String
      2. Number
      3. BigInt
      4. Boolean
      5. undefined
      6. null
      7. Symbol
*/

let str = "Vedant"
let num = 19
let bigIn = 12345678901234567890n
let bool = true
let undef = undefined
let nul = null
let sybl = Symbol("id")

console.table({str, num, bigIn, bool, undef, nul, sybl})

console.log("\n")

/* Q2: Create a "type checker" function that takes an input and returns a string saying "This is a [datatype]". Make sure it correctly identifies null (which technically returns "object" via typeof). */

function typeCheck(input) {
    console.log(input , "is of type: " , typeof input)
}

let userInp = null
typeCheck(userInp)

console.log("\n")

/* Q3:  Explain the difference between undefined and null. In what specific coding scenario would you intentionally use null?

-Ans: Undefined: It is a datatype that represents the variable is being declared but still doesn't hold any value and might be later assigned one.
Null: It is a datatype which shows that the variable has been explicitly assigned a value of null, indicating the absence of any object value. 

Use-Case: null is used when we doesn't want any value just like whereas undefined when we might give a value to a variable afterwards. */

/* ======================
    Topic: 04_Operations
   ======================

 Q1: Explain the difference between prefix increment (++x) and postfix increment (x++).
 -Ans: Prefix Increment: Increases a value first and then returns the incremented value.
Postfix Increment: Returns the current value first and then increases it. */

/* Q2: Given let a = 10; let b = a++ + ++a;, predict the values of a and b, then write the code to verify your answer. 

-Ans: Predicted values: a = 10
                        b = I. returns 10 first then increments to 11
                            II. then increments again to 12 and return 12
                            III. Adds 10 + 12 = 22 */

let a = 10
let b = a++ + ++a

console.table({"Value of a: " : a , "Value of b: " : b})

console.log("\n")

/* Q3: Write a program that calculates the remainder of two numbers without using the modulo (%) operator. 

-Ans: We know Dividend = (Divisor x Quotient) + Remainder 
So, Remainder = Dividend - (Divisor * Quotient) */

function remainder(divisor , dividend) {
    const quotient = Math.floor(dividend/divisor)
    const rem = dividend - (divisor * quotient)

    console.log("Remainder is: " , rem)
}

remainder(2 , 5)

console.log("\n")

/* ===========================
    Topic: 05_Typeconversions
   ===========================

   Q1: What are "Truthy" and "Falsy" values? List 5 values that JavaScript evaluates as false.
   -Ans: Truthy: Values that are considered true when evaluated in a boolean context.
                 Examples: 1. true
                           2. 1
                           3. "non-empty string"
                           4. []
                           5. {}

         Falsy: Values that are considered false when evaluated in a boolean context.

    ** 5 Falsy values: 1. false
                    2. 0
                    3. ""
                    4. null
                    5. undefined */

/* Q2: You are given the string let score = "33abc". Convert this to a number using Number(). Log the result and its typeof. Explain why the result is NaN. 

-Ans: Result is NaN because, the string "33abc" contains non-numeric characters, so JavaScript cannot convert it to a valid number. */

let score = "33abc"
let numScore = Number(score)

console.table({"Value after Conversion: " : numScore , "Type after Conversion: " : typeof numScore})

console.log("\n")

/* Q3: Demonstrate "Type Coercion" by writing code that adds a string, a number, and a boolean together (e.g., "5" + 2 + true). Explain the order of operations the JS engine follows. 

-Ans: Type Corecion: It is the automatic conversion of values from one data type to another done by the JavaScript engine. 

Explanation: Since the provided value has a string at first position, JavaScript converts the subsequent values to strings before performing concatenation, and hence we receive a string as the result. */

let coercion = "5" + 2 + true
console.log("Result of Type Coercion: " , coercion) // Output: "52true"

console.log("\n")

/* ==========================
    Topic: 06_DataComparison
   ==========================

   Q1: Why is it generally recommended to use strict equality (===) over loose equality (==)? Provide a coding example where == gives an unexpected true result.

   -Ans: Strict equality (===) is recommended over loose equality (==) because it checks for both value and type, while loose equality performs type coercion before comparison, which can lead to unexpected results.

   Example: 0 == false // true
            1 == true  // true whereas 'strict equality' gives both as false */

/* Q2: Compare null and undefined using both == and ===. Log the results and explain the internal logic JS uses for these specific cases. 

Explanation: null == undefined is true because they are considered equal in value, but null === undefined is false because they are of different types [object and undefined] */

console.table({"null == undefined: " : (null == undefined) , "null === undefined: " : (null === undefined)}) // Output: true and false

console.log("\n")

/* Q3: Write a script that compares two different strings alphabetically and logs which one comes first. 

-Ans: Strings are compared by their ASCII values and hence the order is determined by their alphabetical sequence. [lexicographical order] */

let str1 = "Apple"
let str2 = "Banana" 

if (str1 < str2) {
    console.log(str1 + " comes before " + str2)
}
else if (str1 > str2) {
    console.log(str2 + " comes before " + str1)
}
else {
    console.log("Both strings are identical.")
}

console.log("\n")

/* ========================
    Topic: 07_MemoriesinJS
   ========================

   Q1: Describe the difference between the Stack and the Heap. Which one is used for primitive types and which for reference types?

   -Ans: Stack: Memory structure which stores 'PRIMITIVE DATA' and functions on the LIFO structure. It is faster and has a fixed size and makes copy of values during execution.

   Heap: Stores 'REFERENCE DATA' and is used for dynamic memory allocation. It is slower than stack and has a variable size and stores reference to the actual data in Stack Memory. */

/* Q2: Create an object userOne. Create userTwo and set it equal to userOne. Change a property in userTwo and log both objects. Explain why both objects changed. 

-Ans: Objects are stored in Heap memory. Upon assignment, both variables point to the same memory location. */

let userOne = {
    pc: "Lenovo"
}

let userTwo = userOne

userTwo.pc = "Asus"

console.table({"PC used by UserOne: " : userOne.pc , "PC used by UserTwo: " : userTwo.pc})

console.log("\n")

/* Q3: Perform a "Shallow Copy" of an array using the spread operator ([...]). Change an element in the new array and prove that the original array remains unchanged. Explain how this relates to memory allocation. 

Explanation: Here we are making a copy of the array in a new memory location.
And, not assigning it to the first array hence any changes made will be to a new location
hence value of first array remains unchanged. */ 

let originalArray = [1, 2, 3]
let shallowCopyArray = [...originalArray]

shallowCopyArray[0] = 10

console.log("In Case of Shallow Copy: " )
console.table({"Original Array: " : originalArray , "Shallow Copy Array: " : shallowCopyArray})

console.log("\nIn Case of Equality: ")

// If it would have been equal i.e. 
shallowCopyArray = originalArray

shallowCopyArray[0] = 10
console.table({"Original Array: " : originalArray , "Shallow Copy Array: " : shallowCopyArray})