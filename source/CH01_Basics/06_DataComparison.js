/* General Comparisons : [Easily Predictable and Understandable]
 * 1. == (Equality) : Checks if the values are equal, ignoring the type.
 * 2. < / <= (Less than / Less than or equal to) : Compares if the left value is less than (or equal to) the right value.
 * 3. > / >= (Greater than / Greater than or equal to) : Compares if the left value is greater than (or equal to) the right value.
 * 4. != (Inequality) : Checks if the values are not equal, ignoring the type.
  
 * Note: It returns a boolean value (true or false) based on the comparison result. */

// Real Examples: 

let num1 = 5
let num2 = 10

let isEqual = (num1 == num2) 
let isLessThan = (num1 < num2)
let isGreaterThan = (num1 > num2)
let isNotEqual = (num1 != num2)

console.log("\n > For num1 =", num1, "and num2 =", num2 , "\n")

console.table({
    "Is Equal (num1 == num2)": isEqual,
    "Is Less Than (num1 < num2)": isLessThan,
    "Is Greater Than (num1 > num2)": isGreaterThan,
    "Is Not Equal (num1 != num2)": isNotEqual
})


/* Now, let's see how these comparisons work with different data types. */
let strNum = "5"
let num3 = 13

// Comparing using >=
console.log("\n> Comparing strNum and num3 using >= : ", strNum >= num3 , "\n")


/* Note: Still in this case, JavaScript being a smart language converts the string "5" to the number 5 before making the comparison. So, it compares 5 >= 13, which is false. 

However, the results are sometimes unexpected 

// One such unexpected case is null comparison with 0

Explanation: When null is compared with 0 using the >= operator, JavaScript converts null to 0 before making the comparison. So, it compares 0 >= 0, which is true. 
    - Similarly, for undefined - gives always false */

console.table({
    "> Comparing null and 0 using > ": null > 0, // false
    "> Comparing null and 0 using == ": null == 0, // false
    "> Comparing null and 0 using >= ": null >= 0 // true
})


/* Concept of Strict Checking: 
    - It doesn't only checks the value but also compares the data type of the operands.
 
    * 1. === (Strict Equality) : Checks if the values are equal and of the same type.
    * 2. !== (Strict Inequality) : Checks if the values are not equal or not of the same type. */

let strictNum1 = 2
let strictStrNum = "2"

console.log("\n > For Number =", strictNum1, "and String as a Number =", strictStrNum , "\n")
console.table({
    "Strict Equality (strictNum1 === strictStrNum)": strictNum1 === strictStrNum, // false
    "Strict Inequality (strictNum1 !== strictStrNum)": strictNum1 !== strictStrNum // true
}) 

/* Explanation: 
    * Even though the values are the same that is 2, the data types are different (number vs string). Therefore, strict equality returns false, and strict inequality returns true.
    * Practically, Using the strict comparisons are preferred over general to handle unexpected results.  */